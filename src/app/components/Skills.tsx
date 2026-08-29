import { motion } from 'motion/react';
import { Type, Palette, Layout, Printer, Megaphone, Target, MonitorSmartphone, Film } from 'lucide-react';

const skills = [
  {
    name: 'Photoshop',
    level: 95,
    icon: 'photoshop',
    color: '#31A8FF'
  },
  {
    name: 'Illustrator',
    level: 90,
    icon: 'illustrator',
    color: '#FF9A00'
  },
  {
    name: 'Figma',
    level: 70,
    icon: 'figma',
    color: '#F24E1E'
  },
  {
    name: 'InDesign',
    level: 66,
    icon: 'indesign',
    color: '#FF3366'
  },
  {
    name: 'Premiere Pro',
    level: 65,
    icon: 'premiere',
    color: '#9999FF'
  },
  {
    name: 'CorelDRAW',
    level: 40,
    icon: 'coreldraw',
    color: '#00A300'
  }
];

const creativeExpertise = [
  {
    name: "Typography",
    desc: "Mastery of fonts, scale, and visual hierarchy",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    bg: "bg-[#111]",
    textColor: "text-white",
    visual: (
       <div className="relative w-full h-full min-h-[160px] flex items-center justify-center overflow-hidden">
          <span className="text-[140px] font-serif leading-none opacity-10 absolute -right-4 -bottom-10 text-white">Aa</span>
          <span className="text-[90px] font-sans font-black italic tracking-tighter absolute -left-4 top-0 text-blue-500">Tt</span>
       </div>
    )
  },
  {
    name: "Color Theory",
    desc: "Evoking emotion through palette selection",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    bg: "bg-white border border-gray-200",
    textColor: "text-gray-900",
    visual: (
       <div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full bg-cyan-400 mix-blend-multiply blur-[2px] -translate-x-4 translate-y-4 animate-pulse"></div>
          <div className="absolute w-24 h-24 rounded-full bg-magenta-400 mix-blend-multiply blur-[2px] translate-x-4 translate-y-4 animate-pulse" style={{backgroundColor: '#FF00FF'}}></div>
          <div className="absolute w-24 h-24 rounded-full bg-yellow-400 mix-blend-multiply blur-[2px] -translate-y-6 animate-pulse"></div>
       </div>
    )
  },
  {
    name: "Layout Design",
    desc: "Structuring content for optimal flow",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    bg: "bg-blue-50",
    textColor: "text-blue-900",
    visual: (
       <div className="relative w-full h-full min-h-[160px] flex flex-col gap-3 p-6 pt-10">
          <div className="w-full h-10 bg-blue-200/50 rounded-lg"></div>
          <div className="flex gap-3 h-full">
            <div className="w-1/3 h-full bg-blue-300/60 rounded-lg"></div>
            <div className="w-2/3 h-full bg-blue-400/70 rounded-lg"></div>
          </div>
       </div>
    )
  },
  {
     name: "UI / UX",
     desc: "Designing intuitive digital experiences",
     colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
     bg: "bg-gradient-to-r from-cyan-500 to-blue-600",
     textColor: "text-white",
     visual: (
        <div className="relative w-full h-full min-h-[160px] flex items-center justify-center">
           <div className="w-48 h-20 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center p-2 relative overflow-hidden">
              <motion.div 
                animate={{ x: [0, 110, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </motion.div>
           </div>
        </div>
     )
  },
  {
    name: "Print Design",
    desc: "High-quality assets for physical media",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    bg: "bg-gray-100",
    textColor: "text-gray-800",
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
    )
  },
  {
    name: "Motion Graphics",
    desc: "Bringing static elements to life",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    bg: "bg-purple-900",
    textColor: "text-white",
    visual: (
       <div className="relative w-full h-full min-h-[160px] flex items-center justify-center overflow-hidden">
           <motion.div
             animate={{ 
               scale: [1, 1.4, 1],
               rotate: [0, 180, 360],
               borderRadius: ["20%", "50%", "20%"]
             }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="w-20 h-20 border-4 border-purple-400 border-t-purple-200 border-l-purple-300"
           />
       </div>
    )
  },
  {
    name: "Brand Strategy",
    desc: "Aligning visual identity with business goals",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    bg: "bg-gradient-to-br from-orange-400 to-amber-500",
    textColor: "text-white",
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
    )
  },
  {
    name: "Digital Marketing",
    desc: "Creating visual assets that drive engagement",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    bg: "bg-gradient-to-r from-rose-400 to-red-500",
    textColor: "text-white",
    visual: (
       <div className="relative w-full h-full min-h-[160px] flex items-end justify-center gap-2 md:gap-4 px-6 pb-6">
          {[40, 70, 50, 100, 140].map((h, i) => (
             <motion.div 
               key={i}
               initial={{ height: 20 }}
               whileInView={{ height: h }}
               transition={{ duration: 1, delay: i * 0.1, type: "spring", bounce: 0.5 }}
               className="w-8 md:w-12 bg-white/90 rounded-t-lg shadow-[0_0_15px_rgba(255,255,255,0.4)]"
               style={{ transformOrigin: "bottom" }}
             />
          ))}
       </div>
    )
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use to bring creative visions to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <img
                    src={`/assets/images/icons/${skill.icon}.png`}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500">{skill.level}% Proficiency</p>
                </div>
              </div>

              <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills / Expertise Redesign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Expertise
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Core design principles and specialized domains I excel in</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4 auto-rows-min">
            {creativeExpertise.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={`${skill.colSpan} ${skill.bg} ${skill.textColor} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col`}
              >
                {/* Visual Area */}
                <div className="flex-grow flex items-center justify-center p-6 pb-0">
                  {skill.visual}
                </div>
                
                {/* Text Area */}
                <div className="p-6 md:p-8 pt-4 relative z-10 w-full text-left">
                  <h4 className="text-2xl font-bold mb-2">{skill.name}</h4>
                  <p className={`text-sm md:text-base opacity-80 leading-relaxed font-medium`}>{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
