import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Particles, ParticlesProvider, type ParticlesPluginRegistrar } from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import type { ISourceOptions } from '@tsparticles/engine';
import { ShootingStars } from './ShootingStars';
import { SwimmingFish } from './SwimmingFish';

const registerParticlesEngine: ParticlesPluginRegistrar = async (engine) => {
  await loadAll(engine);
};

export function ExperienceBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const darkOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      // A hover-expanding card resizes this section; without an immediate
      // resize, tsparticles keeps its old canvas buffer for its default
      // 500ms debounce while the CSS box already grew, so the browser
      // stretches the stale raster to fit — the "stretching" glitch.
      resize: { enable: true, delay: 0 },
      background: { color: { value: 'transparent' } },
      particles: {
        number: { value: 160 },
        color: { value: ['#ffffff', '#c4b5fd', '#93c5fd', '#f0abfc'] },
        shape: { type: 'circle' },
        // Real stars are pinpoints — keep them tiny and let opacity alone
        // carry the twinkle, rather than animating size (which read as
        // "growing circles" instead of distant points of light).
        opacity: {
          value: { min: 0.05, max: 1 },
          animation: { enable: true, speed: { min: 0.5, max: 1.6 }, sync: false, startValue: 'random' },
        },
        size: { value: { min: 0.3, max: 1.3 } },
        move: {
          enable: true,
          speed: { min: 0.05, max: 0.2 },
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        links: { enable: false },
      },
      interactivity: {
        // A "spotlight" that brightens nearby stars reads far better for a
        // night sky than particles fleeing the cursor.
        events: { onHover: { enable: true, mode: 'bubble' } },
        modes: { bubble: { distance: 110, size: 3.5, opacity: 1, duration: 0.4 } },
      },
    }),
    []
  );

  const lightOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      resize: { enable: true, delay: 0 },
      background: { color: { value: 'transparent' } },
      particles: {
        number: { value: 40 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.12, max: 0.4 },
          animation: { enable: true, speed: 0.25, sync: false },
        },
        size: { value: { min: 4, max: 16 } },
        move: {
          enable: true,
          speed: { min: 0.3, max: 1 },
          direction: 'top',
          straight: false,
          random: true,
          outModes: { default: 'out', bottom: 'none' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'bubble' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          bubble: { distance: 140, size: 26, duration: 0.6, opacity: 0.7 },
          push: { quantity: 3 },
        },
      },
    }),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: isDark ? '#050914' : '#0a6edc' }}>
      <ParticlesProvider init={registerParticlesEngine}>
        <Particles id="experience-particles" options={isDark ? darkOptions : lightOptions} className="absolute inset-0" />
      </ParticlesProvider>
      {!isDark && <SwimmingFish />}
      {isDark && <ShootingStars />}
    </div>
  );
}
