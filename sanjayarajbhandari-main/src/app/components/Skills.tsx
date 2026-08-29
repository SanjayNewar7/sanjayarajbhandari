import { useState } from 'react';
import { motion } from 'motion/react';
import { Gauge } from 'lucide-react';
import { RadarChart, type SkillPoint } from './RadarChart';

const DEVICON = 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons';
const SIMPLE_ICONS = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons';

const radarSections: {
  title: string;
  subtitle: string;
  color: string;
  panelSide: 'left' | 'right';
  points: SkillPoint[];
}[] = [
    {
      title: 'App Development',
      subtitle: 'Cross-platform mobile apps, shipped to the Play Store',
      color: '#30d158',
      panelSide: 'right',
      points: [
        { label: 'Flutter', value: 80, icon: `${DEVICON}/flutter/flutter-original.svg` },
        { label: 'React Native', value: 75, icon: `${DEVICON}/react/react-original.svg` },
        { label: 'Firebase', value: 70, icon: `${DEVICON}/firebase/firebase-plain.svg` },
        { label: 'UI/UX', value: 85, icon: `${DEVICON}/figma/figma-original.svg` },
        { label: 'Deployment', value: 78, icon: `${SIMPLE_ICONS}/googleplay.svg`, mono: true },
      ],
    },
    {
      title: 'Graphic Design',
      subtitle: 'The core discipline — branding to print-ready output',
      color: '#0a84ff',
      panelSide: 'right',
      points: [
        { label: 'Photoshop', value: 95, icon: '/assets/images/icons/photoshop.png' },
        { label: 'Illustrator', value: 90, icon: '/assets/images/icons/illustrator.png' },
        { label: 'Figma', value: 92, icon: '/assets/images/icons/figma.png' },
        { label: 'InDesign', value: 66, icon: '/assets/images/icons/indesign.png' },
        { label: 'Premiere Pro', value: 65, icon: '/assets/images/icons/premiere.png' },
        { label: 'CorelDRAW', value: 40, icon: '/assets/images/icons/coreldraw.png' },
      ],
    },
    {
      title: 'Web Development',
      subtitle: 'React & Next.js products, prototype to production',
      color: '#bf5af2',
      panelSide: 'left',
      points: [
        { label: 'Next.js', value: 78, icon: `${SIMPLE_ICONS}/nextdotjs.svg`, mono: true },
        { label: 'React', value: 80, icon: `${DEVICON}/react/react-original.svg` },
        { label: 'TypeScript', value: 75, icon: `${DEVICON}/typescript/typescript-original.svg` },
        { label: 'Tailwind CSS', value: 85, icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
        { label: 'Performance', value: 75, icon: Gauge },
      ],
    },
  ];

const creativeExpertise = [
  {
    name: 'UI / UX Design',
    desc: 'Designing intuitive, native-feeling digital experiences end to end',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    bg: 'bg-[#0a84ff]',
    textColor: 'text-white',
    visual: (
      <div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
        <div className="w-48 h-20 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center p-2 relative overflow-hidden">
          <motion.div
            animate={{ x: [0, 110, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          >
            <div className="w-4 h-4 bg-[#0a84ff] rounded-full"></div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    name: 'Mobile App Development',
    desc: 'Shipping cross-platform apps to the Google Play Store',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bg: 'bg-[#111] dark:bg-[#1c1c1e]',
    textColor: 'text-white',
    visual: (
      <div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
        <div className="w-20 h-36 rounded-2xl border-2 border-white/20 p-2 grid grid-cols-3 gap-1.5 content-start bg-white/[0.03]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square rounded-md opacity-80"
              style={{ backgroundColor: i % 2 === 0 ? '#0a84ff' : '#32ade6' }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    name: 'Web Development',
    desc: 'React & Next.js products from prototype to production',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bg: 'bg-blue-50 dark:bg-white/5',
    textColor: 'text-blue-900 dark:text-white',
    visual: (
      <div className="relative w-full h-full min-h-[160px] flex flex-col gap-2 p-6 pt-8">
        <div className="macos-window-bar mb-1">
          <span className="macos-dot bg-[#ff5f57]" />
          <span className="macos-dot bg-[#febc2e]" />
          <span className="macos-dot bg-[#28c840]" />
        </div>
        <div className="w-full h-8 bg-blue-200/50 dark:bg-white/10 rounded-lg"></div>
        <div className="flex gap-3 h-full">
          <div className="w-1/3 h-full bg-blue-300/60 dark:bg-white/10 rounded-lg"></div>
          <div className="w-2/3 h-full bg-blue-400/70 dark:bg-white/20 rounded-lg"></div>
        </div>
      </div>
    ),
  },
  {
    name: 'Typography',
    desc: 'Mastery of fonts, scale, and visual hierarchy',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bg: 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10',
    textColor: 'text-gray-900 dark:text-white',
    visual: (
      <div className="relative w-full h-full min-h-[160px] flex items-center justify-center overflow-hidden">
        <span className="text-[100px] font-serif leading-none opacity-10 absolute -right-2 -bottom-6 text-current">Aa</span>
        <span className="text-[64px] font-sans font-black italic tracking-tighter absolute -left-2 top-2 text-[#0a84ff]">Tt</span>
      </div>
    ),
  },
  {
    name: 'Brand Strategy',
    desc: 'Aligning visual identity with business goals',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    bg: 'bg-[#ff375f]',
    textColor: 'text-white',
    visual: (
      <div className="relative w-full h-full min-h-[160px] flex items-center justify-center overflow-hidden">
        <svg className="w-40 h-40 opacity-20 absolute -right-6 -bottom-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
        <div className="text-5xl md:text-6xl font-black italic text-white/90 transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
          VISION
        </div>
      </div>
    ),
  },
  {
    name: 'Motion Graphics',
    desc: 'Bringing static elements to life',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    bg: 'bg-purple-900',
    textColor: 'text-white',
    visual: (
      <div className="relative w-full h-full min-h-[160px] flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            borderRadius: ['20%', '50%', '20%'],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 border-4 border-purple-400 border-t-purple-200 border-l-purple-300"
        />
      </div>
    ),
  },
  {
    name: 'Print & Packaging',
    desc: 'High-quality assets for physical media and shelf-ready packaging',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    bg: 'bg-gray-100 dark:bg-white/5',
    textColor: 'text-gray-800 dark:text-white',
    visual: (
      <div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
        <div className="w-28 h-36 bg-white shadow-xl shadow-gray-300/50 -rotate-6 transform origin-bottom-left transition-transform duration-500 group-hover:rotate-6">
          <div className="w-full h-full border-4 border-dashed border-gray-200 p-3">
            <div className="w-full h-1/2 bg-gray-100 mb-3"></div>
            <div className="w-full h-2 bg-gray-200 mb-2"></div>
            <div className="w-3/4 h-2 bg-gray-200"></div>
          </div>
        </div>
      </div>
    ),
  },
];

export function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#f5f5f7] dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-4">Skills</h2>
          <div className="w-16 h-1 bg-[#0a84ff] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto">
            One toolkit spanning design software and a modern development stack
          </p>
        </motion.div>

        {/* Skill radar — App Development / Graphic Design (raised, center) / Web Development */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-14 lg:gap-32 max-w-7xl mx-auto">
          {radarSections.map((sec, idx) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col items-center ${idx === 1 ? 'lg:-translate-y-6' : ''}`}
              style={{ zIndex: hoveredIdx === idx ? 30 : 0 }}
            >
              <h3 className="text-base sm:text-lg font-bold text-[#1d1d1f] dark:text-white mb-1 text-center">{sec.title}</h3>
              <p className="text-xs text-[#6e6e73] dark:text-[#98989d] text-center mb-5 max-w-[200px]">{sec.subtitle}</p>
              <RadarChart
                points={sec.points}
                color={sec.color}
                panelSide={sec.panelSide}
                onHoverChange={(h) => setHoveredIdx(h ? idx : null)}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills / Expertise Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 sm:mt-24 text-center"
        >
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-white mb-4">Additional Expertise</h3>
            <p className="text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto">
              Core principles and specialized domains across every discipline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4 auto-rows-min">
            {creativeExpertise.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * idx }}
                className={`${skill.colSpan} ${skill.bg} ${skill.textColor} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col`}
              >
                <div className="flex-grow flex items-center justify-center p-6 pb-0">{skill.visual}</div>

                <div className="p-6 md:p-8 pt-4 relative z-10 w-full text-left">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">{skill.name}</h4>
                  <p className="text-sm md:text-base opacity-80 leading-relaxed font-medium">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
