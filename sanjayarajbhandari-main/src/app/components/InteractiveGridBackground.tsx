import { useEffect, useRef } from 'react';

const GRID_SIZE = 44;
const LINE_RGB = '10, 132, 255';
const WAVE_AMOUNT = 4;
const CURSOR_RADIUS = 220;
const CURSOR_PUSH = 26;

export function InteractiveGridBackground() {
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

    const mouse = { x: -9999, y: -9999, active: 0, target: 0 };

    function resize() {
      width = parent!.clientWidth;
      height = parent!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = parent!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        mouse.target = 0;
        return;
      }
      mouse.x = x;
      mouse.y = y;
      mouse.target = 1;
    }

    function handlePointerLeave() {
      mouse.target = 0;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    // Displaces a grid point: a gentle ambient wave plus a smooth push away from the cursor.
    function warpPoint(baseX: number, baseY: number, waveIndexA: number, waveIndexB: number, waveAxis: 'x' | 'y'): [number, number] {
      const wave = Math.sin(time + waveIndexA * 0.5 + waveIndexB * 0.25) * WAVE_AMOUNT;
      const dx = baseX - mouse.x;
      const dy = baseY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const falloff = Math.max(0, 1 - dist / CURSOR_RADIUS);
      const eased = falloff * falloff * (3 - 2 * falloff); // smootherstep falloff
      const push = eased * mouse.active * CURSOR_PUSH;
      let x = baseX + (dx / dist) * push;
      let y = baseY + (dy / dist) * push;
      if (waveAxis === 'x') x += wave;
      else y += wave;
      return [x, y];
    }

    // Draws a smooth curve through a series of points using quadratic bezier
    // segments between midpoints, so any bend reads as a flowing curve rather
    // than a jagged polyline.
    function strokeSmoothPath(points: [number, number][]) {
      if (points.length < 2) return;
      ctx!.beginPath();
      ctx!.moveTo(points[0][0], points[0][1]);
      for (let k = 1; k < points.length - 1; k++) {
        const [cx, cy] = points[k];
        const [nx, ny] = points[k + 1];
        ctx!.quadraticCurveTo(cx, cy, (cx + nx) / 2, (cy + ny) / 2);
      }
      const last = points[points.length - 1];
      ctx!.lineTo(last[0], last[1]);
      ctx!.stroke();
    }

    function draw() {
      time += 0.006;
      mouse.active += (mouse.target - mouse.active) * 0.09;

      ctx!.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / GRID_SIZE) + 1;
      const rows = Math.ceil(height / GRID_SIZE) + 1;

      ctx!.lineWidth = 1;
      ctx!.strokeStyle = `rgba(${LINE_RGB}, 0.06)`;
      ctx!.lineJoin = 'round';
      ctx!.lineCap = 'round';

      // Vertical traces, each flowing like a live line-graph line
      for (let i = 0; i <= cols; i++) {
        const baseX = i * GRID_SIZE;
        const points: [number, number][] = [];
        for (let j = 0; j <= rows; j++) {
          points.push(warpPoint(baseX, j * GRID_SIZE, i, j, 'x'));
        }
        strokeSmoothPath(points);
      }

      // Horizontal traces
      for (let j = 0; j <= rows; j++) {
        const baseY = j * GRID_SIZE;
        const points: [number, number][] = [];
        for (let i = 0; i <= cols; i++) {
          points.push(warpPoint(i * GRID_SIZE, baseY, j, i, 'y'));
        }
        strokeSmoothPath(points);
      }

      // Brighten intersections near the cursor (opacity only — no blur/glow)
      if (mouse.active > 0.01) {
        for (let i = 0; i <= cols; i++) {
          const baseX = i * GRID_SIZE;
          if (Math.abs(baseX - mouse.x) > CURSOR_RADIUS) continue;
          for (let j = 0; j <= rows; j++) {
            const baseY = j * GRID_SIZE;
            const dx = baseX - mouse.x;
            const dy = baseY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CURSOR_RADIUS) {
              const alpha = (1 - dist / CURSOR_RADIUS) * 0.6 * mouse.active;
              ctx!.beginPath();
              ctx!.arc(baseX, baseY, 1.5, 0, Math.PI * 2);
              ctx!.fillStyle = `rgba(${LINE_RGB}, ${alpha})`;
              ctx!.fill();
            }
          }
        }
      }

      frame = requestAnimationFrame(draw);
    }

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
