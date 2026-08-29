import { useMemo } from 'react';

type StarConfig = { top: string; left: string; delay: number; duration: number; angle: number; distance: number; scale: number };

// Positive angles so translateX (after rotation) points down-and-across —
// real shooting stars read as falling, not rising.
const STARS: StarConfig[] = [
  { top: '2%', left: '10%', delay: 0, duration: 3.2, angle: 28, distance: 260, scale: 1 },
  { top: '0%', left: '45%', delay: 1.8, duration: 3.6, angle: 40, distance: 300, scale: 1.2 },
  { top: '4%', left: '75%', delay: 3.6, duration: 2.8, angle: 20, distance: 200, scale: 0.85 },
  { top: '1%', left: '25%', delay: 5.4, duration: 3.4, angle: 34, distance: 260, scale: 1.05 },
  { top: '0%', left: '88%', delay: 2.6, duration: 3, angle: 50, distance: 220, scale: 0.9 },
  { top: '5%', left: '5%', delay: 4.8, duration: 3.8, angle: 16, distance: 280, scale: 1.15 },
];

// Each star gets its own named @keyframes translating along a local x-axis;
// the outer wrapper applies the (static) rotation via transform-origin, so
// the animated property is a single plain translateX — no CSS custom
// property interpolation involved, which is the most broadly reliable way
// to get this working everywhere.
export function ShootingStars() {
  const css = useMemo(
    () =>
      STARS.map(
        (s, i) => `
      @keyframes shoot-move-${i} {
        0% { transform: translateX(0); opacity: 0; }
        4% { opacity: 1; }
        22% { transform: translateX(${s.distance}px); opacity: 0; }
        100% { transform: translateX(${s.distance}px); opacity: 0; }
      }`
      ).join('\n'),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{css}</style>
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: s.top, left: s.left, transform: `rotate(${s.angle}deg) scale(${s.scale})`, transformOrigin: 'left center' }}
        >
          <div
            className="relative opacity-0"
            style={{
              animationName: `shoot-move-${i}`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in',
            }}
          >
            {/* Discrete fading dots stand in for a comet trail — no blur/gradient */}
            <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/20" />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/35" />
            <span className="absolute right-9 top-1/2 -translate-y-1/2 w-0.5 h-0.5 rounded-full bg-white/50" />
            <span className="block w-12 h-px bg-white/60" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </div>
      ))}
    </div>
  );
}
