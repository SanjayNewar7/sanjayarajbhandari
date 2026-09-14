import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import createGlobe from 'cobe';

const ACCENT: [number, number, number] = [0.039, 0.518, 1]; // #0a84ff
const HIGHLIGHT: [number, number, number] = [1, 1, 1];

// How long a focused country stays highlighted before the globe eases back
// into its normal auto-rotating state.
const FOCUS_HOLD_MS = 11000;
const BASE_THETA = 0.3;
const FOCUS_SCALE = 1.35;

export type GlobeMarker = {
  id: string;
  location: [number, number];
  name: string;
  home?: boolean;
};

function shortestPhiTarget(current: number, targetRaw: number) {
  const twoPi = Math.PI * 2;
  const targetNorm = ((targetRaw % twoPi) + twoPi) % twoPi;
  const currentNorm = ((current % twoPi) + twoPi) % twoPi;
  let delta = targetNorm - currentNorm;
  if (delta > Math.PI) delta -= twoPi;
  if (delta < -Math.PI) delta += twoPi;
  return current + delta;
}

export function Globe3D({
  markers,
  selected,
  onAutoDeselect,
}: {
  markers: GlobeMarker[];
  selected: string | null;
  onAutoDeselect: () => void;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  const phiRef = useRef(0);
  const scaleRef = useRef(1);
  const targetPhiRef = useRef<number | null>(null);
  const targetScaleRef = useRef(1);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const dragPhi = useRef(0);

  // Focus the globe on the selected marker: rotate to face it, zoom in
  // slightly, then automatically release back to free rotation.
  useEffect(() => {
    if (!selected) {
      targetPhiRef.current = null;
      targetScaleRef.current = 1;
      return;
    }
    const marker = markers.find((m) => m.id === selected);
    if (!marker) return;

    const [, lng] = marker.location;
    targetPhiRef.current = shortestPhiTarget(phiRef.current, (-lng * Math.PI) / 180);
    targetScaleRef.current = FOCUS_SCALE;

    const timer = setTimeout(onAutoDeselect, FOCUS_HOLD_MS);
    return () => clearTimeout(timer);
  }, [selected, markers, onAutoDeselect]);

  useEffect(() => {
    let destroyed = false;
    let width = 0;

    const onResize = () => {
      if (wrapRef.current) width = wrapRef.current.offsetWidth;
      globe?.resize?.();
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const markerColor = isDark ? ([0.3, 0.55, 1] as [number, number, number]) : ACCENT;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: dpr,
      width: 600,
      height: 600,
      phi: phiRef.current,
      theta: BASE_THETA,
      dark: 1,
      diffuse: 1.2,
      scale: scaleRef.current,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.35,
      baseColor: isDark ? [0.16, 0.2, 0.32] : [0.4, 0.6509, 1],
      markerColor,
      glowColor: isDark ? [0.15, 0.32, 0.62] : [0.2745, 0.5765, 0.898],
      markers: markers.map((m) => ({
        location: m.location,
        size: m.id === selected ? 0.14 : m.home ? 0.08 : 0.05,
        color: m.id === selected ? HIGHLIGHT : markerColor,
      })),
      onRender: (state) => {
        if (destroyed) return;

        if (targetPhiRef.current !== null) {
          const delta = targetPhiRef.current - phiRef.current;
          phiRef.current += delta * 0.06;
        } else if (!pointerInteracting.current) {
          phiRef.current += 0.0045;
        }

        scaleRef.current += (targetScaleRef.current - scaleRef.current) * 0.06;

        state.phi = phiRef.current + dragPhi.current;
        state.theta = BASE_THETA;
        state.scale = scaleRef.current;
        state.width = width * dpr;
        state.height = width * dpr;
      },
    });

    onResize();
    window.addEventListener('resize', onResize);
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(wrapRef.current!);

    const io = new IntersectionObserver(([entry]) => globe.toggle(entry.isIntersecting), { threshold: 0.05 });
    io.observe(wrapRef.current!);

    requestAnimationFrame(() => !destroyed && setReady(true));

    return () => {
      destroyed = true;
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
      io.disconnect();
      globe.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark, selected]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto"
      style={{
        width: 'clamp(300px, 52vh, 540px)',
        height: 'clamp(300px, 52vh, 540px)',
        maxWidth: '100%',
        aspectRatio: '1 / 1',
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full select-none"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.7s ease', cursor: 'grab', contain: 'layout paint size' }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerMovement.current;
          e.currentTarget.style.cursor = 'grabbing';
        }}
        onPointerUp={(e) => {
          pointerInteracting.current = null;
          e.currentTarget.style.cursor = 'grab';
        }}
        onPointerOut={(e) => {
          pointerInteracting.current = null;
          e.currentTarget.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerMovement.current = delta;
            dragPhi.current = delta / 200;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerMovement.current = delta;
            dragPhi.current = delta / 100;
          }
        }}
      />
    </div>
  );
}
