import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; size: number; alpha: number; phase: number; speed: number; color: string };

export function ExperienceStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !parent || !ctx) return;

    let width = 1;
    let height = 1;
    let frame = 0;
    let last = 0;
    let visible = false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -1000, y: -1000, active: false };
    let stars: Star[] = [];
    const colors = ['255,255,255', '196,181,253', '147,197,253', '240,171,252'];

    const makeStars = () => {
      const count = Math.max(65, Math.min(150, Math.round(width * height / 8500)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: .35 + Math.random() * 1.05,
        alpha: .08 + Math.random() * .82,
        phase: Math.random() * Math.PI * 2,
        speed: .45 + Math.random() * 1.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeStars();
      if (reduced) draw(0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const distance = Math.hypot(star.x - pointer.x, star.y - pointer.y);
        const spotlight = pointer.active && distance < 120 ? (1 - distance / 120) * .65 : 0;
        const twinkle = reduced ? .72 : .58 + Math.sin(time * .001 * star.speed + star.phase) * .42;
        const alpha = Math.min(1, star.alpha * twinkle + spotlight);
        const size = star.size + spotlight * 2.1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color},${alpha})`;
        ctx.fill();
      }
    };

    const tick = (time: number) => {
      if (!visible || document.hidden || reduced) return;
      if (!last || time - last >= 1000 / 30) {
        last = time;
        draw(time);
      }
      frame = requestAnimationFrame(tick);
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      last = 0;
      if (visible && !document.hidden && !reduced) frame = requestAnimationFrame(tick);
    };
    const move = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };
    const leave = () => { pointer.active = false; };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; resume(); });
    const resizeObserver = new ResizeObserver(resize);

    resize();
    observer.observe(parent);
    resizeObserver.observe(parent);
    parent.addEventListener('pointermove', move, { passive: true });
    parent.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', resume);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      parent.removeEventListener('pointermove', move);
      parent.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', resume);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
