import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import 'flag-icons/css/flag-icons.min.css';
import { Globe3D, type GlobeMarker } from './Globe3D';

const HOME: [number, number] = [27.7172, 85.324]; // Kathmandu, Nepal — home base

const servedCountries: { code: string; name: string; location: [number, number] }[] = [
  { code: 'NP', name: 'Nepal', location: HOME },
  { code: 'AU', name: 'Australia', location: [-33.8688, 151.2093] },
  { code: 'AE', name: 'UAE', location: [25.2048, 55.2708] },
  { code: 'GB', name: 'United Kingdom', location: [51.5072, -0.1276] },
  { code: 'US', name: 'USA', location: [40.7128, -74.006] },
  { code: 'IN', name: 'India', location: [28.6139, 77.209] },
  { code: 'JP', name: 'Japan', location: [35.6762, 139.6503] },
];

const markers: GlobeMarker[] = servedCountries.map((c) => ({
  id: c.code,
  location: c.location,
  name: c.name,
  home: c.code === 'NP',
}));

export function GlobalReach() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!inView) return;
    const target = servedCountries.length;
    const duration = 700;
    const start = performance.now();
    let frame: number;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setCount(Math.round(target * t));
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <section id="global-reach" className="min-h-screen flex flex-col justify-center py-[clamp(2.5rem,8vh,5rem)] bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[clamp(1.5rem,4vh,3rem)]"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-4">Global Reach</h2>
          <div className="w-16 h-1 bg-[#0a84ff] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto mb-2">
            Work delivered for clients across continents, remotely and on-site
          </p>
          <p className="font-mono text-sm text-[#0a84ff]">
            <span className="text-2xl font-bold align-middle">{count}</span>{' '}
            <span className="uppercase tracking-wider align-middle">countries served</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="macos-card rounded-[2rem] p-[clamp(1rem,2.5vh,2rem)] flex flex-col items-center justify-center"
          >
            <Globe3D markers={markers} selected={selected} onAutoDeselect={() => setSelected(null)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="macos-card rounded-[2rem] p-6 sm:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6e6e73] dark:text-[#98989d]">
                Countries Served
              </h3>
              <span className="text-xs font-mono text-[#0a84ff]">{servedCountries.length}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 flex-1 content-center">
              {servedCountries.map((c) => {
                const isActive = selected === c.code;
                return (
                  <motion.button
                    key={c.code}
                    type="button"
                    onClick={() => setSelected(isActive ? null : c.code)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative flex flex-col items-center gap-2 py-3.5 rounded-2xl border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#0a84ff]/10 border-[#0a84ff]'
                        : 'bg-[#f5f5f7] dark:bg-white/[0.06] border-black/[0.05] dark:border-white/10 hover:border-[#0a84ff]/40'
                    }`}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#0a84ff] flex items-center justify-center"
                        >
                          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span
                      className={`fi fi-${c.code.toLowerCase()} rounded shadow-[0_1px_3px_rgba(0,0,0,0.25)] ring-1 ring-black/10 dark:ring-white/10`}
                      style={{ fontSize: 22 }}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-medium text-[#1d1d1f] dark:text-white text-center leading-tight">
                      {c.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
