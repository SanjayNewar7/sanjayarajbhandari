import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Lightbulb, Palette, Monitor, Rocket } from 'lucide-react';

export function GalleryPage() {
  const workflowSteps = [
    {
      icon: Lightbulb,
      title: "Concept & Research",
      description: "Understanding your brand vision and conducting market research to create designs that resonate with your audience.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Palette,
      title: "Design Creation",
      description: "Transforming ideas into stunning visual concepts using industry-leading design tools and creative techniques.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Monitor,
      title: "Digital Implementation",
      description: "Bringing designs to life across digital platforms with responsive layouts and interactive elements.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Launch & Delivery",
      description: "Final delivery of polished designs ready for implementation across all your marketing channels.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const galleryImages = [
    { id: 1, category: "Branding", src: "/assets/images/work/branding/brand1.jpg" },
    { id: 2, category: "Logo Design", src: "/assets/images/work/logo/logo1.jpg" },
    { id: 3, category: "UI/UX", src: "/assets/images/work/ui-ux/ui1.jpg" },
    { id: 4, category: "Packaging", src: "/assets/images/work/packaging/package1.jpg" }
  ];

  const processImages = [
    [
      { id: 1, title: "Initial Sketches", src: "/assets/images/work/process/sketch1.jpg" },
      { id: 2, title: "Color Exploration", src: "/assets/images/work/process/color1.jpg" },
      { id: 3, title: "Typography Study", src: "/assets/images/work/process/typo1.jpg" },
      { id: 4, title: "Layout Draft", src: "/assets/images/work/process/layout1.jpg" }
    ],
    [
      { id: 5, title: "Digital Mockup", src: "/assets/images/work/process/mockup1.jpg" },
      { id: 6, title: "Style Guide", src: "/assets/images/work/process/guide1.jpg" },
      { id: 7, title: "Prototype", src: "/assets/images/work/process/proto1.jpg" },
      { id: 8, title: "Final Render", src: "/assets/images/work/process/render1.jpg" }
    ],
    [
      { id: 9, title: "Brand Application", src: "/assets/images/work/process/apply1.jpg" },
      { id: 10, title: "Web Integration", src: "/assets/images/work/process/web1.jpg" },
      { id: 11, title: "Print Proof", src: "/assets/images/work/process/print1.jpg" },
      { id: 12, title: "Delivery Package", src: "/assets/images/work/process/delivery1.jpg" }
    ],
    [
      { id: 13, title: "Client Review", src: "/assets/images/work/process/review1.jpg" },
      { id: 14, title: "Revisions", src: "/assets/images/work/process/revision1.jpg" },
      { id: 15, title: "Approval", src: "/assets/images/work/process/approval1.jpg" },
      { id: 16, title: "Final Output", src: "/assets/images/work/process/final1.jpg" }
    ]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Creative <span className="text-yellow-300">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Explore my design journey through concept to completion
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Branding</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">UI/UX</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Logo Design</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Packaging</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of recent design work spanning various creative disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Project Image {image.id}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{image.category}</h3>
                  <p className="text-sm opacity-80">View Project Details</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Workflow</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My systematic approach to transforming ideas into impactful visual solutions
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}></div>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Gallery */}
          <div className="space-y-16">
            {processImages.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: rowIndex * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold">{rowIndex + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {rowIndex === 0 && "Discovery Phase"}
                    {rowIndex === 1 && "Development Phase"}
                    {rowIndex === 2 && "Production Phase"}
                    {rowIndex === 3 && "Delivery Phase"}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {row.map((image, imageIndex) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: imageIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Process Image {image.id}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {image.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Let's collaborate to create something extraordinary that represents your brand perfectly.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}