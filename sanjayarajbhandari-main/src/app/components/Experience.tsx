import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExperienceBackground } from './ExperienceBackground';

const experiences = [
  { title: 'Graphic Designer', company: 'Bihani Tech', period: '2023–2025', description: 'Branding and marketing design for a range of clients.', duties: ['Designed multi-channel brand systems', 'Created social and marketing content', 'Prepared production-ready packaging'], logo: '/assets/previous works/BihaniTech.png' },
  { title: 'Project Manager', company: 'Brothers Production', period: '2024–2026', description: 'Managed creative projects from concept through delivery.', duties: ['Coordinated cross-functional teams', 'Managed budgets and delivery schedules', 'Resolved production bottlenecks'], logo: '/assets/previous works/Brothers Production.png' },
  { title: 'Co-Founder & Graphic Designer', company: 'Loopix Creations', period: '2025–Present', description: 'Co-founded a design studio and lead creative direction for clients across Nepal.', duties: ['Set creative direction for client work', 'Lead a multidisciplinary design team', 'Manage client relationships and timelines'], logo: '/assets/previous works/Loopix final.png' },
  { title: 'Roof Geometry Data Analyst', company: 'CloudFactory', period: 'Mar 2026–Present', description: 'Annotating roof-geometry data for machine-learning and remote-sensing pipelines.', duties: ['Annotate roof geometry for ML training', 'Maintain accuracy across large datasets', 'Perform QA on remote-sensing imagery'], logo: '/assets/previous works/cloudfactory.jpg' },
];

// SVG and HTML share coordinates, with clearance for adjacent detail panels.
const nodes = [{ x: 125, y: 27 }, { x: 375, y: 73 }, { x: 625, y: 27 }, { x: 875, y: 73 }];
const wavePath = `M 0 50 C 60 50, 65 27, 125 27 ${nodes.slice(1).map((node, index) => {
  const previous = nodes[index];
  const midpoint = (previous.x + node.x) / 2;
  return `C ${midpoint} ${previous.y}, ${midpoint} ${node.y}, ${node.x} ${node.y}`;
}).join(' ')} C 935 73, 940 50, 1000 50`;

function DetailCard({ index }: { index: number }) {
  const item = experiences[index];
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="experience-detail rounded-2xl border border-white/25 bg-[#0759b4]/95 p-4 text-left shadow-2xl backdrop-blur-2xl">
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">{item.period}</p>
      <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
      <p className="mt-1 text-sm font-semibold text-cyan-200">{item.company}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{item.description}</p>
      <ul className="mt-4 space-y-2 border-t border-white/15 pt-4 text-sm text-white/80">
        {item.duties.map(duty => <li key={duty} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />{duty}</li>)}
      </ul>
    </motion.div>
  );
}

export function Experience() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="experience" className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-0">
      <ExperienceBackground />
      <div className="experience-content container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="experience-heading mx-auto mb-10 w-full text-center lg:mb-0">
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3.7vw, 3.25rem)', lineHeight: 1.15, whiteSpace: 'nowrap' }}>Professional experience</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">A multidisciplinary path across design, product, and data—balancing creative practice with analytical work.</p>
        </motion.div>

        <div className="experience-wave relative mx-auto hidden w-full max-w-7xl lg:block" onMouseLeave={() => setActive(null)} onKeyDown={event => { if (event.key === 'Escape') setActive(null); }}>
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            <defs><linearGradient id="journey-line" x1="0" x2="1"><stop stopColor="#67e8f9" /><stop offset=".5" stopColor="#e879f9" /><stop offset="1" stopColor="#a5b4fc" /></linearGradient></defs>
            <path d={wavePath} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path d={wavePath} fill="none" stroke="url(#journey-line)" strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>

          {experiences.map((item, index) => {
            const node = nodes[index];
            const topLabel = index % 2 === 0;
            return <div key={item.company} className={`absolute h-0 w-0 ${active === index ? 'z-30' : 'z-10'}`} style={{ left: `${node.x / 10}%`, top: `${node.y}%` }} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(null); }}>
              <div className={`experience-label absolute left-0 w-44 -translate-x-1/2 text-center ${topLabel ? 'bottom-[44px]' : 'top-[44px]'}`}>
                <h3 className="text-base font-bold leading-tight text-white">{item.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-cyan-200">{item.company}</p>
                <p className="mt-1 text-xs text-white/65">{item.period}</p>
              </div>
              <div className="absolute -left-7 -top-7 h-14 w-14">
              <motion.button type="button" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} onFocus={() => setActive(index)} onClick={() => setActive(index)} aria-label={`View ${item.title} at ${item.company}`} aria-controls={`experience-detail-${index}`} aria-expanded={active === index} className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-cyan-300 bg-white p-2 shadow-[0_0_0_7px_rgba(103,232,249,.12),0_12px_30px_rgba(0,0,0,.22)]">
                <img src={item.logo} alt="" className="h-full w-full rounded-full object-contain" />
              </motion.button>
              </div>
              <AnimatePresence>{active === index && (
                <motion.div key={index} id={`experience-detail-${index}`} role="region" aria-label={`${item.company} experience details`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .15 }} className={`absolute left-0 w-[272px] -translate-x-1/2 ${topLabel ? 'top-8 pt-4' : 'bottom-8 pb-4'}`}>
                  <span aria-hidden="true" className={`absolute left-1/2 h-4 w-px bg-cyan-200 ${topLabel ? 'top-0' : 'bottom-0'}`} />
                  <DetailCard index={index} />
                </motion.div>
              )}</AnimatePresence>
            </div>;
          })}

        </div>

        <ol className="relative space-y-6 lg:hidden">
          <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute bottom-8 left-2 top-8 h-[calc(100%-4rem)] w-16 opacity-70" aria-hidden="true"><path d="M 22 0 C 92 110, 92 225, 24 330 S 4 540, 76 660 S 88 875, 20 1000" fill="none" stroke="#a5f3fc" strokeWidth="4" strokeLinecap="round" /></svg>
          {experiences.map((item, index) => <motion.li key={item.company} initial={{ opacity: 0, x: index % 2 ? 18 : -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} className="relative ml-12 sm:ml-16"><DetailCard index={index} /></motion.li>)}
        </ol>
      </div>
    </section>
  );
}
