import { useEffect, useRef } from 'react';
import { line, curveBasisClosed } from 'd3-shape';

// Flat solid colors only, per this site's no-gradient rule.
const VARIANTS = [
  { body: '#ff8f1f', belly: '#ffd166', back: '#c65a00', fin: '#e8720f', accent: '#ffffff' }, // clownfish-ish
  { body: '#2fa4e7', belly: '#8fd6ff', back: '#0f5c8f', fin: '#1b7dbf', accent: '#0a2b4a' }, // blue tang
  { body: '#f4d35e', belly: '#fff2b8', back: '#c99a1e', fin: '#d8b23a', accent: '#7a5c00' }, // yellow tang
  { body: '#e8e8ec', belly: '#ffffff', back: '#a7abb5', fin: '#b9bcc4', accent: '#5a5d66' }, // silver fish
];

const SPINE_POINTS = 9;
// Narrow snout, widest at mid-body, tapering to a slim peduncle before the tail.
const WIDTHS = [0.2, 0.5, 0.8, 1, 0.92, 0.7, 0.42, 0.24, 0.1];
const AVOID_RADIUS = 130;

type Point = [number, number];

type Fish = {
  x: number;
  y: number;
  angle: number;
  wanderAngle: number;
  baseSpeed: number;
  speed: number;
  size: number;
  variant: (typeof VARIANTS)[number];
  phase: number;
  finPhase: number;
  pupil: { x: number; y: number; targetX: number; targetY: number; timer: number };
};

export function SwimmingFish() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame = 0;
    let time = 0;
    let lastTime = performance.now();
    const cursor = { x: -9999, y: -9999, active: 0, target: 0 };

    // A basis spline approximates near the outline points rather than
    // interpolating exactly through them, which stays smooth and stable even
    // where point spacing is very uneven (e.g. the narrow head/tail) — a
    // closed Catmull-Rom spline was overshooting badly there and turning the
    // body into a pinched teardrop instead of a proper tapered fish.
    const closedSpline = line<Point>().curve(curveBasisClosed).context(ctx);

    function applyResize() {
      const newWidth = parent!.clientWidth;
      const newHeight = parent!.clientHeight;
      if (newWidth === width && newHeight === height) return;
      width = newWidth;
      height = newHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applyResize, 120);
    }

    applyResize();

    const fish: Fish[] = Array.from({ length: 8 }, () => {
      const size = 22 + Math.random() * 20;
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        angle,
        wanderAngle: angle,
        baseSpeed: 14 + Math.random() * 10,
        speed: 14,
        size,
        variant: VARIANTS[Math.floor(Math.random() * VARIANTS.length)],
        phase: Math.random() * Math.PI * 2,
        finPhase: Math.random() * Math.PI * 2,
        pupil: { x: 0, y: 0, targetX: 0, targetY: 0, timer: Math.random() * 3 },
      };
    });

    function handlePointerMove(e: PointerEvent) {
      const rect = parent!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        cursor.target = 0;
        return;
      }
      cursor.x = x;
      cursor.y = y;
      cursor.target = 1;
    }
    function handlePointerLeave() {
      cursor.target = 0;
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    function fillSpline(points: Point[], color: string) {
      ctx!.beginPath();
      closedSpline(points);
      ctx!.closePath();
      ctx!.fillStyle = color;
      ctx!.fill();
    }

    function drawFish(f: Fish) {
      const { size, variant } = f;
      const bodyLen = size * 1.9;
      const step = bodyLen / (SPINE_POINTS - 1);

      // Spine points in the fish's local frame (forward = +x), each offset
      // sideways by a traveling wave whose amplitude grows toward the tail —
      // real fish barely move at the head and whip hardest at the tail.
      const spine: Point[] = [];
      for (let i = 0; i < SPINE_POINTS; i++) {
        const t = i / (SPINE_POINTS - 1);
        const taper = Math.pow(t, 1.7);
        const wave = Math.sin(time * 5.2 - i * 0.9 + f.phase) * size * 0.2 * taper;
        spine.push([-i * step, wave]);
      }

      function normalAt(i: number) {
        const [px, py] = spine[i];
        const [qx, qy] = i === 0 ? spine[1] : spine[i - 1];
        const dx = i === 0 ? px - qx : qx - px;
        const dy = i === 0 ? py - qy : qy - py;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        return [-dy / len, dx / len] as Point;
      }

      ctx!.save();
      ctx!.translate(f.x, f.y);
      ctx!.rotate(f.angle);

      // Tail fin — a smooth paddle shape that whips past the last spine point.
      const tail = spine[SPINE_POINTS - 1];
      const tailWave = Math.sin(time * 5.2 - (SPINE_POINTS - 1) * 0.9 + f.phase + 0.4) * size * 0.55;
      const tailPoints: Point[] = [
        [tail[0], tail[1]],
        [tail[0] - size * 0.32, tail[1] + tailWave * 0.55 - size * 0.3],
        [tail[0] - size * 0.6, tail[1] + tailWave - size * 0.1],
        [tail[0] - size * 0.6, tail[1] + tailWave + size * 0.1],
        [tail[0] - size * 0.32, tail[1] + tailWave * 0.55 + size * 0.3],
      ];
      fillSpline(tailPoints, variant.fin);

      // Pectoral fin — small flap just behind the head.
      const finFlap = Math.sin(time * 7 + f.finPhase) * 0.35 + 0.15;
      ctx!.save();
      ctx!.translate(-size * 0.35, size * 0.28);
      ctx!.rotate(finFlap);
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      ctx!.quadraticCurveTo(-size * 0.2, size * 0.32, -size * 0.28, size * 0.22);
      ctx!.quadraticCurveTo(-size * 0.1, size * 0.1, size * 0.05, size * 0.15);
      ctx!.closePath();
      ctx!.fillStyle = variant.fin;
      ctx!.fill();
      ctx!.restore();

      // Body — one smooth closed spline around the full outline (top edge
      // head-to-tail, then bottom edge tail-to-head).
      const outline: Point[] = [];
      for (let i = 0; i < SPINE_POINTS; i++) {
        const [nx, ny] = normalAt(i);
        const w = (WIDTHS[i] * size) / 2;
        outline.push([spine[i][0] + nx * w, spine[i][1] + ny * w]);
      }
      for (let i = SPINE_POINTS - 1; i >= 0; i--) {
        const [nx, ny] = normalAt(i);
        const w = (WIDTHS[i] * size) / 2;
        outline.push([spine[i][0] - nx * w, spine[i][1] - ny * w]);
      }
      fillSpline(outline, variant.body);

      // Countershading — darker back, lighter belly, both smooth solid bands.
      const back: Point[] = [];
      for (let i = 1; i < SPINE_POINTS - 1; i++) {
        const [nx, ny] = normalAt(i);
        const w = (WIDTHS[i] * size) / 2.3;
        back.push([spine[i][0] + nx * w, spine[i][1] + ny * w]);
      }
      for (let i = SPINE_POINTS - 2; i >= 1; i--) {
        back.push([spine[i][0], spine[i][1]]);
      }
      fillSpline(back, variant.back);

      const belly: Point[] = [];
      for (let i = 1; i < SPINE_POINTS - 1; i++) {
        belly.push([spine[i][0], spine[i][1]]);
      }
      for (let i = SPINE_POINTS - 2; i >= 1; i--) {
        const [nx, ny] = normalAt(i);
        const w = (WIDTHS[i] * size) / 2.3;
        belly.push([spine[i][0] - nx * w, spine[i][1] - ny * w]);
      }
      fillSpline(belly, variant.belly);

      // Eye — small dot with a pupil that occasionally glances around.
      const eyeX = spine[0][0] + size * 0.1;
      const eyeY = spine[0][1] - size * 0.04;
      const eyeR = size * 0.1;
      ctx!.beginPath();
      ctx!.arc(eyeX, eyeY, eyeR, 0, Math.PI * 2);
      ctx!.fillStyle = '#ffffff';
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(eyeX + f.pupil.x * eyeR * 0.4, eyeY + f.pupil.y * eyeR * 0.4, eyeR * 0.55, 0, Math.PI * 2);
      ctx!.fillStyle = variant.accent;
      ctx!.fill();

      ctx!.restore();
    }

    function draw(now: number) {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      time += dt;
      cursor.active += (cursor.target - cursor.active) * 0.08;

      ctx!.clearRect(0, 0, width, height);

      for (const f of fish) {
        // Gentle organic wander.
        f.wanderAngle += (Math.random() - 0.5) * 0.6 * dt;
        let desiredAngle = f.wanderAngle;
        let desiredSpeed = f.baseSpeed;

        // Smoothly steer away from the cursor instead of snapping.
        const dx = f.x - cursor.x;
        const dy = f.y - cursor.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < AVOID_RADIUS && cursor.active > 0.05) {
          const fleeAngle = Math.atan2(dy, dx);
          const weight = (1 - dist / AVOID_RADIUS) * cursor.active;
          let diff = fleeAngle - desiredAngle;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          desiredAngle += diff * weight;
          desiredSpeed = f.baseSpeed * (1 + weight * 1.8);
        }

        // Bias back toward the canvas when drifting near an edge.
        const margin = 60;
        let edgeBiasX = 0;
        let edgeBiasY = 0;
        if (f.x < margin) edgeBiasX = 1;
        else if (f.x > width - margin) edgeBiasX = -1;
        if (f.y < margin) edgeBiasY = 1;
        else if (f.y > height - margin) edgeBiasY = -1;
        if (edgeBiasX || edgeBiasY) {
          const edgeAngle = Math.atan2(edgeBiasY, edgeBiasX);
          let diff = edgeAngle - desiredAngle;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          desiredAngle += diff * 0.06;
        }

        let angleDiff = desiredAngle - f.angle;
        angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
        const maxTurn = 2.4 * dt;
        f.angle += Math.max(-maxTurn, Math.min(maxTurn, angleDiff));
        f.speed += (desiredSpeed - f.speed) * 0.05;

        f.x += Math.cos(f.angle) * f.speed * dt;
        f.y += Math.sin(f.angle) * f.speed * dt;

        // Eye glances around every couple of seconds.
        f.pupil.timer -= dt;
        if (f.pupil.timer <= 0) {
          f.pupil.timer = 1.5 + Math.random() * 2.5;
          f.pupil.targetX = (Math.random() - 0.5) * 2;
          f.pupil.targetY = (Math.random() - 0.5) * 2;
        }
        f.pupil.x += (f.pupil.targetX - f.pupil.x) * 0.05;
        f.pupil.y += (f.pupil.targetY - f.pupil.y) * 0.05;

        drawFish(f);
      }

      frame = requestAnimationFrame(draw);
    }

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
