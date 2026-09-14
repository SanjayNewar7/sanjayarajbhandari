import { useTheme } from 'next-themes';
import { ShootingStars } from './ShootingStars';
import { SwimmingFish } from './SwimmingFish';

export function ExperienceBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: isDark ? '#050914' : '#0a6edc' }}>
      <div
        className={`absolute inset-0 ${isDark ? 'opacity-70' : 'opacity-30'}`}
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle, rgba(255,255,255,.85) 0 1px, transparent 1.4px), radial-gradient(circle, rgba(147,197,253,.7) 0 1px, transparent 1.4px)'
            : 'radial-gradient(circle, rgba(255,255,255,.7) 0 3px, transparent 3.5px), radial-gradient(circle, rgba(125,211,252,.6) 0 5px, transparent 5.5px)',
          backgroundPosition: '0 0, 37px 51px',
          backgroundSize: isDark ? '83px 83px, 127px 127px' : '151px 151px, 223px 223px',
        }}
        aria-hidden="true"
      />
      {!isDark && <SwimmingFish />}
      {isDark && <ShootingStars />}
    </div>
  );
}
