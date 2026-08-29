import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

type Point = [number, number];

export type SkillPoint = {
  label: string;
  value: number;
  icon: string | LucideIcon;
  mono?: boolean;
};

export function RadarChart({
  points,
  color = '#0a84ff',
  size = 220,
  panelSide = 'right',
  onHoverChange,
}: {
  points: SkillPoint[];
  color?: string;
  size?: number;
  panelSide?: 'left' | 'right';
  onHoverChange?: (hovered: boolean) => void;
}) {
  const [hovered, setHovered] = useState(false);

  function setHoverState(next: boolean) {
    setHovered(next);
    onHoverChange?.(next);
  }

  const labels = points.map((p) => p.label);
  const values = points.map((p) => p.value);

  const center = size / 2;
  const maxRadius = size / 2 - 30;
  const rings = 4;
  const angleStep = (Math.PI * 2) / labels.length;

  function pointFor(index: number, radius: number): Point {
    const angle = index * angleStep - Math.PI / 2;
    return [center + radius * Math.cos(angle), center + radius * Math.sin(angle)];
  }

  const gridPolygons = Array.from({ length: rings }, (_, r) => {
    const radius = (maxRadius * (r + 1)) / rings;
    return labels.map((_, i) => pointFor(i, radius).join(',')).join(' ');
  });

  const spokes = labels.map((_, i) => pointFor(i, maxRadius));

  const dataPoints = values.map((v, i) => pointFor(i, (Math.max(0, Math.min(100, v)) / 100) * maxRadius));
  const dataPolygon = dataPoints.map((p) => p.join(',')).join(' ');

  return (
    <div
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      className="relative"
    >
      <div
        className="relative transition-transform duration-300"
        style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
      >
        {/* HUD corner brackets */}
        <span className="absolute -top-2 -left-2 w-3.5 h-3.5 border-t-2 border-l-2 rounded-tl-sm transition-colors" style={{ borderColor: hovered ? color : 'rgba(128,128,128,0.35)' }} />
        <span className="absolute -top-2 -right-2 w-3.5 h-3.5 border-t-2 border-r-2 rounded-tr-sm transition-colors" style={{ borderColor: hovered ? color : 'rgba(128,128,128,0.35)' }} />
        <span className="absolute -bottom-2 -left-2 w-3.5 h-3.5 border-b-2 border-l-2 rounded-bl-sm transition-colors" style={{ borderColor: hovered ? color : 'rgba(128,128,128,0.35)' }} />
        <span className="absolute -bottom-2 -right-2 w-3.5 h-3.5 border-b-2 border-r-2 rounded-br-sm transition-colors" style={{ borderColor: hovered ? color : 'rgba(128,128,128,0.35)' }} />

        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto max-w-[220px] text-black/15 dark:text-white/15">
          {gridPolygons.map((pts, i) => (
            <polygon key={i} points={pts} fill="none" stroke="currentColor" strokeWidth={1} />
          ))}
          {spokes.map(([x, y], i) => (
            <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="currentColor" strokeWidth={1} />
          ))}

          <polygon
            points={dataPolygon}
            fill={color}
            fillOpacity={hovered ? 0.42 : 0.26}
            stroke={color}
            strokeWidth={hovered ? 2.5 : 2}
            strokeLinejoin="round"
            style={{ transition: 'fill-opacity 0.3s, stroke-width 0.3s' }}
          />
          {dataPoints.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={hovered ? 4 : 3} fill={color} style={{ transition: 'r 0.3s' }} />
          ))}

          {labels.map((label, i) => {
            const [x, y] = pointFor(i, maxRadius + 18);
            return (
              <text
                key={label}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-current text-[#3a3a3c] dark:text-[#c7c7cc]"
                fontSize={8.5}
                fontFamily="ui-monospace, monospace"
                letterSpacing={0.3}
              >
                {label.toUpperCase()}
              </text>
            );
          })}

          {hovered &&
            dataPoints.map(([x, y], i) => (
              <text
                key={`val-${i}`}
                x={x}
                y={y - 9}
                textAnchor="middle"
                fontSize={9}
                fontWeight={700}
                fontFamily="ui-monospace, monospace"
                fill={color}
              >
                {values[i]}
              </text>
            ))}
        </svg>
      </div>

      {/* Hover sidebar — full stat breakdown with tool logos */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 8, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`absolute z-20 w-60 rounded-2xl bg-white/85 dark:bg-[#1c1c1e]/85 backdrop-blur-2xl border border-black/[0.06] dark:border-white/10 shadow-xl divide-y divide-black/[0.06] dark:divide-white/10 overflow-hidden
              top-full mt-3 left-1/2 -translate-x-1/2
              ${panelSide === 'right' ? 'lg:top-1/2 lg:mt-0 lg:left-full lg:ml-4 lg:translate-x-0 lg:-translate-y-1/2' : ''}
              ${panelSide === 'left' ? 'lg:top-1/2 lg:mt-0 lg:right-full lg:left-auto lg:mr-4 lg:translate-x-0 lg:-translate-y-1/2' : ''}
            `}
          >
            {points.map((p) => (
              <div key={p.label} className="flex items-center gap-3 px-3.5 py-2.5">
                {typeof p.icon === 'string' ? (
                  <img
                    src={p.icon}
                    alt=""
                    className={`w-5 h-5 object-contain shrink-0 ${p.mono ? 'dark:invert' : ''}`}
                  />
                ) : (
                  <p.icon className="w-5 h-5 shrink-0" style={{ color }} strokeWidth={2} />
                )}
                <span className="flex-1 text-sm font-medium text-[#1d1d1f] dark:text-white truncate">
                  {p.label}
                </span>
                <span className="text-sm font-semibold" style={{ color }}>
                  {p.value}%
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
