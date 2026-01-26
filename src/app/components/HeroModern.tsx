import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Palette, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroModern() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-4 sm:pt-8 md:pt-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-64 h-64 sm:top-20 sm:right-20 sm:w-80 sm:h-80 md:w-96 md:h-96 md:top-20 md:right-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-64 h-64 sm:bottom-20 sm:left-20 sm:w-80 sm:h-80 md:w-96 md:h-96 md:bottom-20 md:left-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-100"
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700 mt-2">Professional Graphics Designer</span>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="text-blue-600">
                  Sanjaya
                </span>
                <br />
                <span className="text-gray-900">Rajbhandari</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 mt-6"
              >
                <img src="/assets/images/icons/pen-tool.png" alt="Pen Tool" className="w-6 h-6" />
                <p className="text-2xl md:text-3xl font-medium text-gray-700">
                  Crafting Visual Excellence
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Transforming brands through innovative design solutions. 
              Specializing in <span className="font-semibold text-blue-600">branding</span>, 
              <span className="font-semibold text-cyan-600"> packaging</span>, and 
              <span className="font-semibold text-blue-600"> digital design</span> with 
              3+ years of creative excellence.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 py-6"
            >
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '72+', label: 'Projects Done' },
                { number: '6', label: 'Active Clients' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <span className="font-medium">View My Work</span>
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 font-medium"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              {[
                { name: 'Behance', url: 'https://www.behance.net/sanjayarajbhan', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/behance.svg' },
                { name: 'Pinterest', url: 'https://www.pinterest.com/sanjaynewar007/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/sanjay_newar7/', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg' },
                { name: 'Twitter', url: 'https://twitter.com/sanjay_newar7', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
                  <span className="font-medium">{social.name}</span>
                  <div className="h-px w-0 group-hover:w-full bg-blue-600 transition-all duration-300"></div>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] border-2 border-dashed border-blue-300/50 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] border-2 border-dashed border-cyan-300/50 rounded-full"
              />
            </div>

            {/* Main Image */}
            <div className="relative z-10">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <ImageWithFallback
                src="/assets/images/profile/Sanjaya Rajbhandari.jpg"
                alt="Sanjaya Rajbhandari"
                className="relative w-96 h-96 object-cover rounded-full border-8 border-white shadow-2xl ring-4 ring-blue-100"
                loading="lazy"
              />
              
              {/* Floating Elements - Official Software Icons orbiting around the profile image */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-[400px] h-[400px] rounded-full"
                >
                  {/* Photoshop Icon */}
                  <motion.div
                    animate={{
                      x: [0, 100, 0, -100, 0],
                      y: [-100, 0, 100, 0, -100],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-xl border border-blue-100">
                      <img src="/assets/images/icons/photoshop.png" alt="Photoshop" className="w-8 h-8" />
                    </div>
                  </motion.div>
                  
                  {/* Figma Icon */}
                  <motion.div
                    animate={{
                      x: [0, -70, -70, 0, 70, 70, 0],
                      y: [-70, 0, 70, 70, 0, -70, -70],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                    className="absolute top-0 left-0 transform translate-x-0 translate-y-0"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-xl border border-purple-100">
                      <img src="/assets/images/icons/figma.png" alt="Figma" className="w-8 h-8 object-contain" />
                    </div>
                  </motion.div>
                  
                  {/* Premiere Pro Icon */}
                  <motion.div
                    animate={{
                      x: [0, 90, 45, -45, -90, -45, 45, 0],
                      y: [90, 45, -45, -90, -45, 45, 90, 90],
                    }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-xl border border-green-100">
                      <img src="/assets/images/icons/premiere.png" alt="Premiere Pro" className="w-8 h-8 object-contain" />
                    </div>
                  </motion.div>
                  
                  {/* Illustrator Icon */}
                  <motion.div
                    animate={{
                      x: [45, 0, -45, 0, 45],
                      y: [0, 45, 0, -45, 0],
                    }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6
                    }}
                    className="absolute top-1/4 left-0 transform -translate-x-0 translate-y-0"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-xl border border-orange-100">
                      <img src="/assets/images/icons/illustrator.png" alt="Illustrator" className="w-8 h-8 object-contain" />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
