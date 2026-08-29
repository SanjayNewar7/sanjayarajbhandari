import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExperienceBackground } from './ExperienceBackground';

// Ordered chronologically, oldest first, so the wave reads left to right.
const experiences = [
  {
    title: 'Graphics Designer',
    company: 'Bihani Tech',
    period: '2023 - 2025',
    duration: '2.5 yrs',
    current: false,
    description: 'Branding and marketing design for a range of clients.',
    duties: [
      'Designed branding for multiple clients',
      'Created social & marketing content',
      'Built print-ready packaging designs',
    ],
    logo: '/assets/previous works/BihaniTech.png',
  },
  {
    title: 'Project Manager',
    company: 'Brothers Production',
    period: '2024 - 2026',
    duration: '2 yrs',
    current: false,
    description: 'Managed creative projects from concept to delivery.',
    duties: [
      'Coordinated cross-functional creative teams',
      'Managed budgets and delivery schedules',
      'Resolved production bottlenecks',
    ],
    logo: '/assets/previous works/Brothers Production.png',
  },
  {
    title: 'Co-Founder & Graphics Designer',
    company: 'Loopix Creations',
    period: '2025 - Present',
    duration: 'Current',
    current: true,
    description: 'Co-founded a design studio, leading creative direction for clients across Nepal.',
    duties: [
      'Set creative direction for client projects',
      'Led a small design team',
      'Managed client relationships & timelines',
    ],
    logo: '/assets/previous works/Loopix final.png',
  },
  {
    title: 'Roof Geometry Data Analyst',
    company: 'CloudFactory',
    period: 'Mar 2026 - Present',
    duration: 'Current',
    current: true,
    description: 'Annotating roof geometry data for ML and remote-sensing pipelines.',
    duties: [
      'Annotated roof geometry for ML training',
      'Ensured accuracy across large datasets',
      'Performed QA on remote-sensing imagery',
    ],
    logo: '/assets/previous works/cloudfactory.jpg',
  },
];

const PEAK_Y = 26; // % from top — even-index nodes sit here, labels above
const TROUGH_Y = 74; // % from top — odd-index nodes sit here, labels below

// x positions spread evenly across a 1000-unit-wide coordinate space, with a
// short lead-in/trail-out stub so the curve reads as continuing off-screen,
// matching the reference.
const N = experiences.length;
const nodeX = experiences.map((_, i) => 90 + (i / (N - 1)) * 820);
const nodeY = experiences.map((_, i) => (i % 2 === 0 ? PEAK_Y : TROUGH_Y));

function buildWavePath() {
  let d = `M ${nodeX[0] - 70} ${nodeY[0] + (nodeY[0] < 50 ? 22 : -22)}`;
  d += ` Q ${nodeX[0] - 30} ${nodeY[0]}, ${nodeX[0]} ${nodeY[0]}`;
  for (let i = 0; i < N - 1; i++) {
    const midX = (nodeX[i] + nodeX[i + 1]) / 2;
    d += ` C ${midX} ${nodeY[i]}, ${midX} ${nodeY[i + 1]}, ${nodeX[i + 1]} ${nodeY[i + 1]}`;
  }
  d += ` L ${nodeX[N - 1] + 70} ${nodeY[N - 1]}`;
  return d;
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathD = buildWavePath();

  return (
    <section id="experience" className="relative py-20 sm:py-24 overflow-hidden">
      <ExperienceBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
            A multi-disciplinary path across design, product, and data — currently balancing
            a creative practice with a full-time analyst role.
          </p>
        </motion.div>

        {/* Horizontal wave timeline — hover a node for details; the panel
            stays open while the cursor is anywhere in this wrapper (node or
            panel) and closes only when it leaves the whole area. */}
        <div className="overflow-x-auto pb-2" onMouseLeave={() => setActiveIndex(null)}>
          <div className="relative h-[420px] sm:h-[460px] min-w-[760px] max-w-5xl mx-auto">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
              <path d={pathD} fill="none" stroke="#7dd3ff" strokeOpacity={0.4} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
            </svg>

            {experiences.map((exp, i) => {
              const isPeak = i % 2 === 0;
              const xPct = (nodeX[i] / 1000) * 100;
              const isActive = activeIndex === i;
              const flipLeft = xPct > 62;

              return (
                <div key={exp.company} className="contents">
                  <div
                    className={`absolute -translate-x-1/2 w-40 sm:w-48 text-center ${isPeak ? 'top-0' : 'bottom-0'}`}
                    style={{ left: `${xPct}%` }}
                  >
                    <h3 className="text-[13px] sm:text-sm font-bold text-white leading-tight">{exp.title}</h3>
                    <p className="text-[11px] sm:text-xs text-[#7dd3ff] font-semibold uppercase tracking-wide mt-1">
                      {exp.company}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-white/60 mt-0.5">{exp.period}</p>
                  </div>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.08 }}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-shadow z-10"
                    style={{
                      left: `${xPct}%`,
                      top: `${nodeY[i]}%`,
                      boxShadow: isActive ? '0 0 0 3px #0a84ff' : `0 0 0 2px ${exp.current ? '#0a84ff' : 'rgba(255,255,255,0.35)'}`,
                    }}
                    aria-label={`${exp.title} at ${exp.company}`}
                  >
                    <img src={exp.logo} alt="" className="w-9 h-9 sm:w-11 sm:h-11 object-contain" />
                  </motion.button>

                  {/* Detail panel — pinned beside its node, glass blur, flips
                      to the left near the right edge so it never runs off-screen. */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: flipLeft ? 8 : -8 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-20 w-64 sm:w-72 rounded-2xl bg-white/[0.16] backdrop-blur-3xl border border-white/25 shadow-xl p-4 sm:p-5 -translate-y-1/2"
                        style={
                          flipLeft
                            ? { right: `${100 - xPct}%`, marginRight: 46, top: `${nodeY[i]}%` }
                            : { left: `${xPct}%`, marginLeft: 46, top: `${nodeY[i]}%` }
                        }
                      >
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0a84ff]/30 text-white font-medium">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-white leading-tight">{exp.title}</h3>
                        <p className="text-[#7dd3ff] text-sm font-semibold mb-2">{exp.company}</p>
                        <p className="text-white/85 text-xs mb-3">{exp.description}</p>
                        <ul className="text-white/80 text-xs space-y-1 pt-3 border-t border-white/15 list-disc list-inside">
                          {exp.duties.map((duty) => (
                            <li key={duty}>{duty}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
