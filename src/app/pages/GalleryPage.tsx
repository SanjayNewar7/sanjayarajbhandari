import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle, Lightbulb, Palette, Monitor, Rocket, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';

export function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const navigate = useNavigate();
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
      title: "Review & Refinement",
      description: "Thorough review process with client feedback integration and iterative refinements for perfection.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Delivery & Launch",
      description: "Final delivery of polished designs ready for implementation across all your marketing channels.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const galleryImages = [
    { id: 1, src: "assets/images/gallery/Cookery Promotional Post 1.jpg" },
    { id: 2, src: "assets/images/gallery/Oasis Education Promotional Post 3.jpg" },
    { id: 3, src: "assets/images/gallery/Oasis Education Promotional Post 2.jpg" },
    { id: 4, src: "assets/images/gallery/admission Open.jpg" },
    { id: 5, src: "assets/images/gallery/digital promo 78 1.jpg" },
    { id: 6, src: "assets/images/gallery/digital promo 88 02.jpg" },
    { id: 7, src: "assets/images/gallery/Glossy Promo 33.jpg" },
    { id: 8, src: "assets/images/gallery/Glossy Promo 80.jpg" },
    { id: 9, src: "assets/images/gallery/Glossy Promo 58.jpg" },
    { id: 10, src: "assets/images/gallery/Glossy Promo 35.jpg" },
    { id: 11, src: "assets/images/gallery/ishm promo 9 01.jpg" },
    { id: 12, src: "assets/images/gallery/ishm ADMISSION open.jpg" },
    { id: 13, src: "assets/images/gallery/testimonial-01.jpg" },
    { id: 14, src: "assets/images/gallery/1 Year Anniversary Celebration 2.jpg" },
    { id: 15, src: "assets/images/gallery/Luckin Coffee post 2.png" },
    { id: 16, src: "assets/images/gallery/chapter Itenary post 1.jpg" }
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(galleryImages.length / 4));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const processImages = [
    { id: 1, src: "assets/images/gallery/Cookery Promotional Post 1.jpg" },
    { id: 2, src: "assets/images/gallery/Oasis Education Promotional Post 3.jpg" },
    { id: 3, src: "assets/images/gallery/Oasis Education Promotional Post 2.jpg" },
    { id: 4, src: "assets/images/gallery/admission Open.jpg" },
    { id: 5, src: "public/assets/images/gallery/digital promo 78 1.jpg" },
    { id: 6, src: "assets/images/gallery/digital promo 88 02.jpg" },
    { id: 7, src: "assets/images/gallery/Glossy Promo 33.jpg" },
    { id: 8, src: "assets/images/gallery/Glossy Promo 80.jpg" },
    { id: 9, src: "assets/images/gallery/Glossy Promo 58.jpg" },
    { id: 10, src: "assets/images/gallery/Glossy Promo 35.jpg" },
    { id: 11, src: "assets/images/gallery/ishm promo 9 01.jpg" },
    { id: 12, src: "assets/images/gallery/ishm ADMISSION open.jpg" },
    { id: 13, src: "assets/images/gallery/testimonial-01.jpg" },
    { id: 14, src: "assets/images/gallery/1 Year Anniversary Celebration 2.jpg" },
    { id: 15, src: "assets/images/gallery/Luckin Coffee post 2.png" },
    { id: 16, src: "assets/images/gallery/chapter Itenary post 1.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${headerScrolled ? 'bg-white/20 backdrop-blur-2xl bg-opacity-30 border-white/30 shadow-lg py-2' : 'bg-white border-gray-200 shadow-sm py-3'}`}>
        <nav className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Sanjaya Rajbhandari
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base">
                Home
              </Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base">
                Experience
              </Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base">
                Skills
              </Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm sm:text-base">
                Work
              </Link>
              <Link to="/gallery" className="text-blue-600 font-medium text-sm sm:text-base">
                Gallery
              </Link>
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  // Navigate to home first, then scroll to contact
                  window.location.href = '/';
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-center min-h-[30vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Creative <span className="text-white">Gallery</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-6">
                Explore my design journey through concept to completion
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Designs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of recent design work spanning various creative disciplines
            </p>
          </motion.div>

          {/* Sliding Gallery */}
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(galleryImages.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex-shrink-0 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {galleryImages.slice(slideIndex * 4, (slideIndex + 1) * 4).map((image, index) => {
                        const globalIndex = slideIndex * 4 + index;
                        return (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                            onClick={() => {
                              setLightboxOpen(true);
                              setLightboxIndex(globalIndex);
                            }}
                          >
                            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                              <img 
                                src={image.src} 
                                alt={`Design ${image.id}`} 
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: '1000/1100' }}
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.style.display = 'none';
                                  img.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                                }}
                              />
                              <span className="text-gray-500 absolute fallback-text hidden">Design {image.id}</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-sm opacity-80">View Design</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + Math.ceil(galleryImages.length / 4)) % Math.ceil(galleryImages.length / 4))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % Math.ceil(galleryImages.length / 4))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(galleryImages.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
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

          {/* Process Gallery - 4-4-4-4 Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {processImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[1000/1100] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden flex items-center justify-center">
                    <img 
                      src={image.src} 
                      alt={`Process Design ${image.id}`} 
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: '1000/1100' }}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        img.parentElement?.querySelector('.process-fallback-text')?.classList.remove('hidden');
                      }}
                    />
                    <span className="text-gray-500 text-xs sm:text-sm absolute process-fallback-text hidden">Design {image.id}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
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
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 p-2"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${lightboxIndex * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="flex-shrink-0 w-full">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={`Design ${image.id} - Full Screen Preview`} 
                        className="w-full h-full object-contain max-h-[90vh]"
                        style={{ aspectRatio: '1000/1100' }}
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          img.parentElement?.querySelector('.lightbox-fallback-text')?.classList.remove('hidden');
                        }}
                      />
                      <span className="text-gray-500 text-2xl absolute lightbox-fallback-text hidden">Design {image.id} - Full Screen Preview</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Lightbox Navigation Arrows */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {/* Lightbox Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${lightboxIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}