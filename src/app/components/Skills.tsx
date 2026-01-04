import { motion } from 'motion/react';

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
    level: 45,
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

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Typography', 'Color Theory', 'Layout Design', 'Print Design', 'Digital Marketing', 'Brand Strategy', 'UI/UX', 'Motion Graphics'].map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 + idx * 0.05 }}
                whileHover={{ scale: 1.5, y: -8 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-md transition-all duration-300 cursor-default relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{item}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
