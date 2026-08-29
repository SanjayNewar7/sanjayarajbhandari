import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Layers, Briefcase, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { InteractiveGridBackground } from './InteractiveGridBackground';

const roles = ['Graphic Designer', 'Web Developer', 'Mobile App Developer', 'UI/UX Designer'];

const stats = [
  { value: 4, suffix: '+', label: 'Disciplines', icon: Layers, href: '#skills' },
  { value: 80, suffix: '+', label: 'Projects Shipped', icon: Briefcase, href: '#work' },
  { value: 4, suffix: '', label: 'Apps on Play Store', icon: Smartphone, href: '#work' },
];

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf: number;
    const duration = 1300;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

const socialLinks = [
  { name: 'Behance', url: 'https://www.behance.net/sanjayarajbhan', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg' },
  { name: 'Figma', url: 'https://www.figma.com/@sanjaya', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg' },
  { name: 'Instagram', url: 'https://www.instagram.com/sanjay_newar7/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sanjayarajbhandari/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg' },
];

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="inline-block text-[#0a84ff]"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function HeroModern() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f5f7] dark:bg-black pt-24 sm:pt-28"
    >
      <InteractiveGridBackground />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-7"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-sm sm:text-[15px] font-medium text-[#6e6e73] dark:text-[#98989d]"
            >
              Co-Founder,{' '}
              <a
                href="https://www.loopixcreations.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1d1d1f] dark:text-white hover:text-[#0a84ff] dark:hover:text-[#0a84ff] underline decoration-black/20 dark:decoration-white/20 underline-offset-2 transition-colors"
              >
                Loopix Creations
              </a>
              <span className="text-black/25 dark:text-white/25 mx-2">—</span>
              Chitwan, Nepal
            </motion.p>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#1d1d1f] dark:text-white"
              >
                Sanjaya
                <br />
                Rajbhandari
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 text-2xl sm:text-3xl font-semibold text-[#3a3a3c] dark:text-[#e5e5ea]"
              >
                <RoleRotator />
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-base sm:text-lg text-[#6e6e73] dark:text-[#98989d] leading-relaxed max-w-xl"
            >
              I design brands, build the apps and websites that carry them, and
              craft the interfaces in between — from a Figma canvas to a
              published product on the App Store and the open web.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="rounded-3xl glass-panel grid grid-cols-3 divide-x divide-black/[0.06] dark:divide-white/[0.08] py-1"
            >
              {stats.map((stat, i) => (
                <motion.a
                  key={stat.label}
                  href={stat.href}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center gap-1.5 px-2 py-4 sm:py-5 text-center hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors"
                >
                  <stat.icon className="w-4 h-4 text-[#0a84ff]" strokeWidth={2} />
                  <div className="text-2xl sm:text-3xl font-bold text-[#0a84ff] tabular-nums">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <CountUpNumber value={stat.value} suffix={stat.suffix} />
                    </motion.span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#6e6e73] dark:text-[#98989d]">{stat.label}</div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="group px-6 sm:px-7 py-3.5 backdrop-blur-xl border border-white/10 text-white rounded-full flex items-center gap-2 shadow-sm hover:shadow-lg font-medium text-sm sm:text-base"
                style={{ backgroundColor: '#0a84ffe6' }}
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-6 sm:px-7 py-3.5 glass-panel text-[#1d1d1f] dark:text-white rounded-full hover:shadow-lg hover:border-[#0a84ff]/30 transition-[box-shadow,border-color] duration-300 font-medium text-sm sm:text-base"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-5 sm:gap-6 pt-2"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[#6e6e73] dark:text-[#98989d] hover:text-[#0a84ff] dark:hover:text-[#0a84ff] transition-colors"
                >
                  <img src={social.icon} alt={social.name} className="w-4 h-4 sm:w-5 sm:h-5 dark:invert" />
                  <span className="font-medium text-sm hidden sm:inline">{social.name}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - macOS window frame around profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] bg-[#0a84ff] rotate-3 -z-10" />
              <div className="macos-card rounded-3xl overflow-hidden">
                <div className="macos-window-bar px-4 py-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <span className="macos-dot bg-[#ff5f57]" />
                  <span className="macos-dot bg-[#febc2e]" />
                  <span className="macos-dot bg-[#28c840]" />
                  <span className="ml-auto text-[11px] font-medium text-[#6e6e73] dark:text-[#98989d]">
                    sanjaya.design
                  </span>
                </div>
                <div className="relative aspect-[4/5]">
                  <ImageWithFallback
                    src="/assets/images/profile/Sanjayaprofile.jpg"
                    alt="Sanjaya Rajbhandari"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating discipline chips, dock-style */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] macos-card rounded-2xl px-3 py-2.5 flex items-center justify-between gap-1"
              >
                {[
                  { icon: '/assets/images/icons/figma.png', label: 'Figma', mono: false },
                  { icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg', label: 'React', mono: true },
                  { icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg', label: 'Flutter', mono: true },
                  { icon: '/assets/images/icons/photoshop.png', label: 'Photoshop', mono: false },
                ].map((tool) => (
                  <div key={tool.label} className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/[0.03] dark:bg-white/10 flex items-center justify-center p-1.5">
                      <img
                        src={tool.icon}
                        alt={tool.label}
                        className={`w-full h-full object-contain ${tool.mono ? 'dark:invert' : ''}`}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#skills"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-panel items-center justify-center text-[#6e6e73] dark:text-[#98989d] hover:text-[#0a84ff] transition-colors z-10"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
