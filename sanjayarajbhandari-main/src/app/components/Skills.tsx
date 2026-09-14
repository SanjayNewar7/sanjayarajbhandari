import { useEffect, useRef, useState, type ElementType } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AppShortcutRounded from '@mui/icons-material/AppShortcutRounded';
import DrawRounded from '@mui/icons-material/DrawRounded';
import LanguageRounded from '@mui/icons-material/LanguageRounded';
import HubRounded from '@mui/icons-material/HubRounded';
import { RadarChart, type SkillPoint } from './RadarChart';

const DEVICON = 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons';
const SIMPLE_ICONS = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons';

type Skill = {
  title: string;
  subtitle: string;
  score: number;
  accent: string;
  Icon: ElementType;
  points: SkillPoint[];
};

const skills: Skill[] = [
  {
    title: 'App Development', subtitle: 'Cross-platform mobile apps, shipped to the Play Store', score: 78, accent: '#30d158', Icon: AppShortcutRounded,
    points: [
      { label: 'Flutter', value: 80, icon: `${DEVICON}/flutter/flutter-original.svg` },
      { label: 'React Native', value: 75, icon: `${DEVICON}/react/react-original.svg` },
      { label: 'Firebase', value: 70, icon: `${DEVICON}/firebase/firebase-plain.svg` },
      { label: 'UI/UX', value: 85, icon: `${DEVICON}/figma/figma-original.svg` },
      { label: 'Deployment', value: 78, icon: `${SIMPLE_ICONS}/googleplay.svg`, mono: true },
    ],
  },
  {
    title: 'Graphic Design', subtitle: 'The core discipline—from branding to print-ready output', score: 85, accent: '#0a84ff', Icon: DrawRounded,
    points: [
      { label: 'Photoshop', value: 87, icon: '/assets/images/icons/photoshop.png' },
      { label: 'Illustrator', value: 86, icon: '/assets/images/icons/illustrator.png' },
      { label: 'Figma', value: 87, icon: '/assets/images/icons/figma.png' },
      { label: 'InDesign', value: 84, icon: '/assets/images/icons/indesign.png' },
      { label: 'Premiere Pro', value: 82, icon: '/assets/images/icons/premiere.png' },
      { label: 'CorelDRAW', value: 80, icon: '/assets/images/icons/coreldraw.png' },
    ],
  },
  {
    title: 'Web Development', subtitle: 'React and Next.js products, from prototype to production', score: 79, accent: '#bf5af2', Icon: LanguageRounded,
    points: [
      { label: 'Next.js', value: 78, icon: `${SIMPLE_ICONS}/nextdotjs.svg`, mono: true },
      { label: 'React', value: 80, icon: `${DEVICON}/react/react-original.svg` },
      { label: 'TypeScript', value: 75, icon: `${DEVICON}/typescript/typescript-original.svg` },
      { label: 'Tailwind CSS', value: 85, icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { label: 'Performance', value: 75, icon: `${SIMPLE_ICONS}/lighthouse.svg` },
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState(0);
  const userSelected = useRef(false);
  const skill = skills[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!userSelected.current) setActive(current => (current + 1) % skills.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const selectSkill = (index: number) => {
    userSelected.current = true;
    setActive(index);
  };

  return (
    <section id="skills" className="overflow-hidden bg-[#f5f5f7] py-20 dark:bg-black sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-9 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0a84ff]">Capabilities</p>
          <h2 className="text-4xl font-bold text-[#1d1d1f] dark:text-white sm:text-5xl">Skills</h2>
          <p className="mt-4 text-lg text-[#6e6e73] dark:text-[#98989d]">One toolkit spanning design software and a modern development stack</p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div role="tablist" aria-label="Skill disciplines" className="grid gap-2 rounded-[1.65rem] border border-white/70 bg-white/45 p-2 shadow-[0_18px_55px_-28px_rgba(31,38,62,.38),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-white/[0.08] sm:grid-cols-3">
            {skills.map((item, index) => {
              const selected = active === index;
              return (
                <button key={item.title} role="tab" aria-selected={selected} aria-controls="skill-console" onClick={() => selectSkill(index)} className={`group flex min-h-16 items-center gap-3 rounded-[1.2rem] border px-4 py-3 text-left transition-all duration-500 ${selected ? 'border-white/90 bg-white/65 shadow-[0_10px_30px_-16px_rgba(31,38,62,.5),inset_0_1px_0_white] dark:border-white/20 dark:bg-white/15' : 'border-transparent hover:border-white/60 hover:bg-white/35 dark:hover:bg-white/[0.08]'}`}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,.75)]" style={{ color: item.accent, background: `linear-gradient(145deg, ${item.accent}22, ${item.accent}0d)` }}><item.Icon className="!h-5 !w-5" /></span>
                  <span className="min-w-0 flex-1"><strong className="block truncate text-sm text-[#1d1d1f] dark:text-white sm:text-base">{item.title}</strong><span className="text-[10px] font-bold uppercase tracking-wider text-[#8e8e93]">Level {item.score}</span></span>
                  <span className={`h-2 w-2 rounded-full transition-shadow ${selected ? 'shadow-[0_0_0_5px_color-mix(in_srgb,currentColor_16%,transparent)]' : 'opacity-25'}`} style={{ color: item.accent, backgroundColor: item.accent }} />
                </button>
              );
            })}
          </div>

          <div id="skill-console" role="tabpanel" className="relative mt-4 overflow-hidden rounded-[2rem] border border-white/75 bg-white/55 shadow-[0_28px_75px_-38px_rgba(31,38,62,.48),inset_0_1px_0_rgba(255,255,255,.95)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-[#111113]/70">
            <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: skill.accent }} />
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            <AnimatePresence mode="wait">
              <motion.div key={skill.title} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.22 }} className="relative grid gap-8 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-9">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex items-center gap-2 rounded-full border border-black/[0.07] bg-black/[0.025] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6e6e73] dark:border-white/10 dark:bg-white/5 dark:text-[#98989d]"><HubRounded className="!h-4 !w-4" style={{ color: skill.accent }} />Skill map</div>
                  <RadarChart points={skill.points} color={skill.accent} size={270} showPanel={false} />
                  <div className="mt-5 flex items-end gap-3"><strong className="text-5xl leading-none tabular-nums" style={{ color: skill.accent }}>{skill.score}</strong><span className="pb-1 text-left"><b className="block text-sm uppercase tracking-wider text-[#1d1d1f] dark:text-white">Advanced</b><small className="text-[#8e8e93]">overall level</small></span></div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: skill.accent }}>Selected discipline</p>
                  <h3 className="mt-2 text-3xl font-bold text-[#1d1d1f] dark:text-white">{skill.title}</h3>
                  <p className="mt-2 max-w-lg text-[#6e6e73] dark:text-[#98989d]">{skill.subtitle}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {skill.points.map((point, index) => (
                      <motion.div key={point.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="rounded-2xl border border-black/[0.07] bg-[#f7f7f9] p-3.5 dark:border-white/10 dark:bg-white/[0.05]">
                        <div className="flex items-center gap-3"><img src={typeof point.icon === 'string' ? point.icon : ''} alt="" className={`h-6 w-6 object-contain ${point.mono ? 'dark:invert' : ''}`} /><span className="flex-1 text-sm font-semibold text-[#1d1d1f] dark:text-white">{point.label}</span><strong className="font-mono text-sm" style={{ color: skill.accent }}>{point.value}%</strong></div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/[0.07] dark:bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: `${point.value}%` }} transition={{ duration: .65, delay: index * .06 }} className="h-full rounded-full" style={{ backgroundColor: skill.accent }} /></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
