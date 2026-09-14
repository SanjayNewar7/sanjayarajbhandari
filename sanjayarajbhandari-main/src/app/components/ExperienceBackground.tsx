import { useTheme } from 'next-themes';
import { ShootingStars } from './ShootingStars';
import { SwimmingFish } from './SwimmingFish';
import { ExperienceStarfield } from './ExperienceStarfield';

export function ExperienceBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: isDark ? '#050914' : '#0a6edc' }}>
      {isDark ? <ExperienceStarfield /> : <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,255,255,.75)_0_3px,transparent_3.5px)] [background-size:151px_151px]" aria-hidden="true" />}
      {!isDark && <SwimmingFish />}
      {isDark && <ShootingStars />}
    </div>
  );
}
