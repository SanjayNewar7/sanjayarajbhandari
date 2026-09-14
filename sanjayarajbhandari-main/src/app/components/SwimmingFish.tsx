import { useEffect, useRef } from 'react';

type Creature = {
  kind: 'fish' | 'shark' | 'octopus'; x: number; y: number;
  vx: number; vy: number; angle: number; size: number; speed: number;
  phase: number; school: number; image: number; target: number;
  decision: number; wander: number; burst: number; rest: number;
  nextMeal?: number; hiddenUntil?: number; bend?: number; reach?: number;
  escaping?: boolean; escapeX?: number; escapeY?: number;
  freeSwim?: boolean;
};
type BloodParticle = { x: number; y: number; vx: number; vy: number; age: number; radius: number };
const assets = ['realistic-silver-fish.webp', 'realistic-blue-fish.webp', 'reef-shark.webp', 'reef-octopus.webp'];
const random = (min: number, max: number) => min + Math.random() * (max - min);
const turn = (angle: number) => Math.atan2(Math.sin(angle), Math.cos(angle));

/** One continuous simulation: schooling, pursuit, escape and recovery share state. */
export function SwimmingFish() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.closest('section');
    if (!canvas || !section) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = 1, height = 1, frame = 0, last = 0, visible = false, disposed = false;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = preference.matches;
    const cursor = { x: -1000, y: -1000, active: false, ripple: 0 };
    const images = assets.map(name => { const img = new Image(); img.src = `/assets/images/optimized/landing/${name}`; return img; });
    const creatures: Creature[] = [];
    const blood: BloodParticle[] = [];
    let simulationTime = 0;

    function resize() {
      const oldW = width, oldH = height;
      width = section!.clientWidth; height = section!.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas!.width = Math.round(width * ratio); canvas!.height = Math.round(height * ratio);
      ctx!.setTransform(ratio, 0, 0, ratio, 0, 0);
      creatures.forEach(c => { c.x *= width / oldW; c.y *= height / oldH; });
      if (reduced) render(0);
    }
    resize();
    const schoolCount = width < 640 ? 2 : 4;
    for (let group = 0; group < schoolCount; group++) {
      const cx = random(.1, .9) * width, cy = random(.15, .85) * height;
      for (let i = 0; i < 9; i++) {
        const freeSwim = Math.random() < .1;
        const angle = freeSwim ? random(-Math.PI, Math.PI) : random(-1.35, 1.35);
        creatures.push({ kind: 'fish', x: cx + random(-65, 65), y: cy + random(-45, 45), vx: Math.cos(angle) * 35, vy: Math.sin(angle) * 35, angle, size: random(20, 36), speed: random(32, 52), phase: random(0, 6), school: group, image: group % 2, target: -1, decision: random(6, 14), wander: angle, burst: 0, rest: 0, freeSwim });
      }
    }
    for (let i = 0; i < 5; i++) {
      const angle = random(-.75, .75);
      creatures.push({ kind: 'fish', x: random(0, width), y: random(0, height), vx: Math.cos(angle) * 26, vy: Math.sin(angle) * 26, angle, size: random(65, 95), speed: random(22, 36), phase: random(0, 6), school: -1, image: i % 2, target: -1, decision: random(7, 16), wander: angle, burst: 0, rest: 0, freeSwim: Math.random() < .1 });
    }
    for (const kind of ['shark', 'octopus'] as const) creatures.push({
      kind, x: random(.1, .9) * width, y: random(.2, .8) * height,
      vx: 0, vy: 0, angle: 0, size: kind === 'shark' ? 190 : 125,
      speed: kind === 'shark' ? 54 : 25, phase: 0, school: -1,
      image: kind === 'shark' ? 2 : 3, target: -1, decision: 0,
      wander: random(-3, 3), burst: 0, rest: 0,
      // Separate initial windows prevent synchronized first attacks.
      nextMeal: kind === 'shark' ? random(38, 54) : random(68, 88),
    });

    function step(dt: number) {
      simulationTime += dt;
      for (let i = blood.length - 1; i >= 0; i--) {
        const p = blood[i]; p.age += dt;
        if (p.age >= 3.5) { blood.splice(i, 1); continue; }
        p.x += p.vx * dt; p.y += p.vy * dt;
        p.vx *= Math.exp(-dt * 1.1); p.vy *= Math.exp(-dt * 1.1);
      }
      cursor.ripple = Math.max(0, cursor.ripple - dt);
      // Snapshot avoids iteration-order bias when a school updates its heading.
      const previous = creatures.map(c => ({ ...c }));
      creatures.forEach((c, index) => {
        if (c.hiddenUntil) {
          if (simulationTime < c.hiddenUntil) return;
          // Replace eaten fish at an edge to keep the schools populated.
          c.hiddenUntil = 0; c.escaping = false;
          // Most fish re-enter from the left/top/bottom and keep an upright
          // orientation; the 10% free swimmers may use every edge and angle.
          const edge = c.freeSwim ? Math.floor(random(0, 4)) : [0, 2, 3][Math.floor(random(0, 3))];
          if (edge === 0) { c.x = -c.size; c.y = random(40, height - 40); c.angle = random(-.35, .35); }
          else if (edge === 1) { c.x = width + c.size; c.y = random(40, height - 40); c.angle = Math.PI + random(-.35, .35); }
          else if (edge === 2) { c.x = random(40, width - 40); c.y = -c.size; c.angle = Math.PI / 2 + random(-.35, .35); }
          else { c.x = random(40, width - 40); c.y = height + c.size; c.angle = -Math.PI / 2 + random(-.35, .35); }
          c.vx = Math.cos(c.angle) * c.speed; c.vy = Math.sin(c.angle) * c.speed;
        }
        const feeding = c.kind !== 'fish' && simulationTime >= (c.nextMeal ?? Infinity);
        c.decision -= dt; c.burst = Math.max(0, c.burst - dt); c.rest = Math.max(0, c.rest - dt);
        if (c.decision <= 0) {
          // Real fish hold a cruising heading for a sustained bout and make
          // modest course corrections. Large turns are reserved for escape.
          c.decision = c.kind === 'fish' ? random(7, 15) : c.kind === 'shark' ? random(10, 18) : random(6, 12);
          const courseChange = c.kind === 'fish'
            ? random(-.32, .32) + (Math.random() < .08 ? random(-.45, .45) : 0)
            : c.kind === 'shark' ? random(-.22, .22) : random(-.48, .48);
          c.wander = turn(c.wander + courseChange);
          if (c.kind !== 'fish' && feeding && c.rest <= 0 && (c.target < 0 || creatures[c.target]?.hiddenUntil)) {
            const candidates = previous.map((p, i) => ({ p, i, distance: Math.hypot(p.x - c.x, p.y - c.y) }))
              .filter(({ p, i }) => p.kind === 'fish' && p.size < 40 && !creatures[i].hiddenUntil).sort((a, b) => a.distance - b.distance).slice(0, feeding ? 1 : 5);
            c.target = candidates[Math.floor(Math.random() * candidates.length)]?.i ?? -1;
          }
        }
        // Predators cruise independently between feeding windows. Keeping an
        // old prey target here caused the shark to orbit and rotate endlessly.
        if (c.kind !== 'fish' && !feeding && c.target >= 0) c.target = -1;
        let ax = Math.cos(c.wander) * 3.2, ay = Math.sin(c.wander) * 3.2;
        let pace = c.speed;
        if (c.kind === 'fish') {
          const neighbors = previous.filter((p, i) => !p.hiddenUntil && i !== index && c.school >= 0 && p.school === c.school && Math.hypot(p.x - c.x, p.y - c.y) < 180);
          if (neighbors.length) {
            const center = neighbors.reduce((a, p) => ({ x: a.x + p.x, y: a.y + p.y, vx: a.vx + p.vx, vy: a.vy + p.vy }), { x: 0, y: 0, vx: 0, vy: 0 });
            ax += (center.x / neighbors.length - c.x) / 210 + center.vx / neighbors.length / 95;
            ay += (center.y / neighbors.length - c.y) / 210 + center.vy / neighbors.length / 95;
            neighbors.forEach(p => { const dx = c.x - p.x, dy = c.y - p.y, d = Math.hypot(dx, dy); if (d < 28) { ax += dx / Math.max(d, 1) * 1.25; ay += dy / Math.max(d, 1) * 1.25; } });
          }
          previous.filter(p => p.kind !== 'fish').forEach(predator => {
            const dx = c.x - predator.x, dy = c.y - predator.y, d = Math.hypot(dx, dy);
            const radius = predator.kind === 'shark' ? 190 : 125;
            if (d < radius) {
              const force = 7 * (1 - d / radius);
              ax += dx / Math.max(d, 1) * force; ay += dy / Math.max(d, 1) * force;
              c.burst = Math.max(c.burst, 2.8);
              if (!c.escaping) {
                c.escaping = true;
                const horizontalExit = Math.min(c.x, width - c.x) < Math.min(c.y, height - c.y);
                c.escapeX = horizontalExit ? (c.x < width / 2 ? -c.size * 2 : width + c.size * 2) : c.x + dx * 3;
                c.escapeY = horizontalExit ? c.y + dy * 2 : (c.y < height / 2 ? -c.size * 2 : height + c.size * 2);
              }
            }
          });
          if (c.escaping) {
            const dx = (c.escapeX ?? c.x) - c.x, dy = (c.escapeY ?? c.y) - c.y, d = Math.hypot(dx, dy);
            ax = dx / Math.max(d, 1) * 12; ay = dy / Math.max(d, 1) * 12;
            pace = c.speed * 3.2; c.burst = Math.max(c.burst, .25);
          }
        } else if (c.target >= 0 && !creatures[c.target].hiddenUntil && c.rest <= 0) {
          const prey = previous[c.target];
          const dx = prey.x + prey.vx * .45 - c.x, dy = prey.y + prey.vy * .45 - c.y, d = Math.hypot(dx, dy);
          ax += dx / Math.max(d, 1) * 3; ay += dy / Math.max(d, 1) * 3;
          pace *= c.kind === 'octopus' ? 1.25 + .65 * Math.max(0, Math.sin(c.phase * .8)) : 1.2;
          if (feeding) pace = c.kind === 'shark' ? 175 : 145;
          c.reach = c.kind === 'octopus' ? Math.max(0, Math.min(1, (220 - d) / 140)) : 0;
          const preyNow = creatures[c.target];
          const mouthX = c.x + (c.kind === 'shark' ? Math.cos(c.angle) * c.size * .43 : 0);
          const mouthY = c.y + (c.kind === 'shark' ? Math.sin(c.angle) * c.size * .43 : 0);
          if (feeding && Math.hypot(preyNow.x - mouthX, preyNow.y - mouthY) < (c.kind === 'octopus' ? 85 : 30)) {
            // An actual nearby prey is consumed; nothing teleports to the predator.
            for (let n = 0; n < 14; n++) blood.push({ x: preyNow.x, y: preyNow.y, vx: random(-22, 22), vy: random(-18, 18), age: 0, radius: random(1.5, 3.5) });
            preyNow.hiddenUntil = simulationTime + random(2, 3);
            preyNow.escaping = false;
            c.nextMeal = simulationTime + (c.kind === 'shark' ? random(48, 72) : random(64, 92));
            c.rest = 3.5; c.target = -1;
          } else if (!feeding && d < 65) { preyNow.burst = 2; c.rest = random(2, 5); c.target = -1; c.wander += random(1, 2.5); }
        } else {
          c.reach = (c.reach ?? 0) * Math.exp(-dt * 4);
          if (c.target >= 0 && creatures[c.target].hiddenUntil) { c.target = -1; c.decision = 0; }
        }
        if (cursor.active) {
          const dx = c.x - cursor.x, dy = c.y - cursor.y, d = Math.hypot(dx, dy);
          const radius = 150 + cursor.ripple * 100;
          if (d < radius) { const f = (1 - d / radius) * 10; ax += dx / Math.max(d, 1) * f; ay += dy / Math.max(d, 1) * f; c.burst = Math.max(c.burst, .7); }
        }
        // Soft steering at all four boundaries; no teleport or repeated travel path.
        const margin = Math.min(100, width * .18);
        if (!c.escaping) {
          ax += Math.max(0, (margin - c.x) / margin) * 2.6 - Math.max(0, (c.x - width + margin) / margin) * 2.6;
          ay += Math.max(0, (margin - c.y) / margin) * 2.6 - Math.max(0, (c.y - height + margin) / margin) * 2.6;
        }
        let desired = Math.atan2(ay, ax);
        if (c.kind === 'fish' && !c.freeSwim && Math.cos(desired) < 0) {
          desired = desired >= 0 ? Math.PI / 2 - .08 : -Math.PI / 2 + .08;
        }
        const reactiveFish = c.kind === 'fish' && (c.escaping || c.burst > 0);
        const predatorTurnRate = c.kind === 'shark'
          ? (feeding ? .72 : .24)
          : (feeding ? 1.15 : .52);
        const maxTurn = (reactiveFish ? 2.2 : c.kind === 'fish' ? .42 : predatorTurnRate) * dt;
        const steering = Math.max(-maxTurn, Math.min(maxTurn, turn(desired - c.angle)));
        c.bend = (c.bend ?? 0) + (steering / Math.max(dt, .001) - (c.bend ?? 0)) * (1 - Math.exp(-dt * 5));
        c.angle += steering;
        if (c.burst > 0) pace *= c.kind === 'fish' ? 2.6 : 1.4;
        const ease = 1 - Math.exp(-dt * (reactiveFish ? 3.2 : c.kind === 'fish' ? .9 : 2.2));
        c.vx += (Math.cos(c.angle) * pace - c.vx) * ease; c.vy += (Math.sin(c.angle) * pace - c.vy) * ease;
        c.x += c.vx * dt; c.y += c.vy * dt;
        if (c.escaping && (c.x < -c.size || c.x > width + c.size || c.y < -c.size || c.y > height + c.size)) {
          c.hiddenUntil = simulationTime + random(2, 3);
        } else if (c.kind === 'fish' && !c.freeSwim && c.x >= width - 1) {
          c.hiddenUntil = simulationTime + random(2, 3);
        } else if (!c.escaping) {
          c.x = Math.max(0, Math.min(width, c.x)); c.y = Math.max(0, Math.min(height, c.y));
        }
        c.phase += dt * (c.kind === 'octopus' ? 3 : 7) * (c.burst > 0 ? 1.7 : 1);
      });
    }

    function drawCreature(c: Creature) {
      if (c.hiddenUntil) return;
      const img = images[c.image]; if (!img.complete || !img.naturalWidth) return;
      const w = c.size, h = w * img.naturalHeight / img.naturalWidth;
      ctx!.save(); ctx!.translate(c.x, c.y);
      ctx!.globalAlpha = c.kind === 'fish' ? (c.size < 40 ? .64 : .58) : .65;
      if (c.kind === 'octopus') {
        const bodyRotation = Math.sin(c.angle) * .25;
        ctx!.rotate(bodyRotation);
        const prey = c.target >= 0 ? creatures[c.target] : undefined;
        const reach = (c.reach ?? 0) * 32;
        const targetAngle = prey ? Math.atan2(prey.y - c.y, prey.x - c.x) - bodyRotation : 0;
        // A continuous mesh bends the arms with increasing amplitude toward their tips.
        const cells = width < 640 ? 9 : 12, sw = img.naturalWidth / cells, sh = img.naturalHeight / cells;
        for (let row = 0; row < cells; row++) for (let col = 0; col < cells; col++) {
          const v = row / (cells - 1), u = col / (cells - 1);
          const arm = Math.max(0, (v - .32) / .68);
          // Three narrow arm regions reach; the remaining arms retain their length.
          const selectedArm = Math.max(...[.24, .55, .82].map(center => Math.exp(-Math.pow((u - center) / .085, 2))));
          const extension = selectedArm * arm * arm * reach * 1.7;
          const dx = Math.sin(c.phase * 1.25 + u * 13 - v * 6) * arm * 7 + Math.cos(targetAngle) * extension;
          const dy = Math.cos(c.phase * 1.05 + u * 15 + v * 3) * arm * 9 + Math.sin(targetAngle) * extension;
          ctx!.drawImage(img, col * sw, row * sh, sw, sh, -w / 2 + col * w / cells + dx, -h / 2 + row * h / cells + dy, w / cells + 1.4, h / cells + 1.4);
        }
      } else {
        ctx!.rotate(c.angle);
        // Continuous body deformation keeps the tail attached through each stroke.
        const slices = c.size < 40 ? 6 : c.kind === 'shark' ? 18 : 14;
        for (let i = 0; i < slices; i++) {
          const u = i / slices, tail = Math.pow(1 - u, 2);
          const amplitude = tail * w * (c.kind === 'shark' ? .045 : .055);
          // Bend follows angular velocity, so vertical and horizontal turns flex
          // the spine instead of rotating a rigid sprite. Never mirror the image.
          const curve = -(c.bend ?? 0) * tail * w * .055;
          const offset = Math.sin(c.phase - u * 5) * amplitude + curve;
          const finPulse = 1 + Math.sin(c.phase + u * 9) * .04;
          ctx!.drawImage(img, i * img.naturalWidth / slices, 0, img.naturalWidth / slices, img.naturalHeight, -w / 2 + i * w / slices, -h / 2 * finPulse + offset, w / slices + .6, h * finPulse);
        }
      }
      ctx!.restore();
    }
    function render(dt: number) {
      if (dt > 0) step(dt);
      ctx!.clearRect(0, 0, width, height); creatures.forEach(drawCreature);
      ctx!.save();
      blood.forEach(p => {
        ctx!.globalAlpha = .55 * Math.pow(1 - p.age / 3.5, 1.5);
        ctx!.fillStyle = '#b51c32'; ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius * (1 + p.age * .3), 0, Math.PI * 2); ctx!.fill();
      });
      ctx!.restore();
    }
    function tick(now: number) {
      frame = 0;
      if (disposed || !visible || document.hidden || reduced) return;
      if (last && now - last < 1000 / 30) { frame = requestAnimationFrame(tick); return; }
      const dt = last ? Math.min((now - last) / 1000, .05) : 1 / 30; last = now;
      render(dt); frame = requestAnimationFrame(tick);
    }
    function resume() { cancelAnimationFrame(frame); frame = 0; last = 0; if (reduced) render(0); else if (visible && !document.hidden) frame = requestAnimationFrame(tick); }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; resume(); }); observer.observe(section);
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(section);
    const pointer = (event: PointerEvent) => { const rect = section.getBoundingClientRect(); cursor.x = event.clientX - rect.left; cursor.y = event.clientY - rect.top; cursor.active = !reduced; };
    const leave = () => { cursor.active = false; };
    const splash = (event: PointerEvent) => { pointer(event); cursor.ripple = 1.5; };
    const change = () => { reduced = preference.matches; cursor.active = false; resume(); };
    section.addEventListener('pointermove', pointer, { passive: true }); section.addEventListener('pointerleave', leave); section.addEventListener('pointerdown', splash, { passive: true });
    preference.addEventListener('change', change); document.addEventListener('visibilitychange', resume);
    images.forEach(img => { img.onload = () => { if (!disposed && reduced) render(0); }; });
    return () => { disposed = true; cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect(); section.removeEventListener('pointermove', pointer); section.removeEventListener('pointerleave', leave); section.removeEventListener('pointerdown', splash); preference.removeEventListener('change', change); document.removeEventListener('visibilitychange', resume); images.forEach(img => { img.onload = null; }); };
  }, []);
  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
