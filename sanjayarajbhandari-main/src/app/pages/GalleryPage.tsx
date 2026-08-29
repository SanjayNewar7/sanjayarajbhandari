import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';

export function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeLightboxImages, setActiveLightboxImages] = useState<Array<{ id: number; src: string }>>([]);

  const workflowSteps = [
    {
      number: "01",
      title: "Inquiry & Evaluation",
      description: "Upon receiving a project inquiry, I evaluate the requirements to ensure they align with my expertise. If they do, we proceed to schedule a call for further discussion."
    },
    {
      number: "02",
      title: "Discovery Meeting",
      description: "In our initial meeting, we'll explore project goals and requirements in detail. After this, we'll outline the next steps for the project."
    },
    {
      number: "03",
      title: "Proposal & Planning",
      description: "Once I have a thorough understanding of the project, you will receive a detailed proposal, including all project specifics."
    },
    {
      number: "04",
      title: "Project Execution",
      description: "Upon finalizing details, I initiate the project. You will receive regular updates through communication channels like Slack, WhatsApp, or any preferred channel."
    },
    {
      number: "05",
      title: "Review & Feedback",
      description: "Upon project completion, we'll discuss feedback, reflecting on the collaboration, identifying successes, and exploring areas for improvement."
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

  const latestDesignImages = [
    { id: 1, src: "/assets/images/latest-designs/CommunityandcareEasterEg.jpeg" },
    { id: 2, src: "/assets/images/latest-designs/CommunityandcarePromotionalPostDesign0 (3).jpeg" },
    { id: 3, src: "/assets/images/latest-designs/CommunityandcarePromotionalPostDesign0 (4).jpeg" },
    { id: 4, src: "/assets/images/latest-designs/CommunityandcarePromotionalPostDesign0.jpeg" },
    { id: 5, src: "/assets/images/latest-designs/DreamCare post.jpg" },
    { id: 6, src: "/assets/images/latest-designs/DreamCare.png" },
    { id: 7, src: "/assets/images/latest-designs/DreamCareBoosting Post 1 corrected.jpg" },
    { id: 8, src: "/assets/images/latest-designs/DreamCareNewYearpos.jpeg" },
    { id: 9, src: "/assets/images/latest-designs/LoopixBalenshahCongtulation.jpeg" },
    { id: 10, src: "/assets/images/latest-designs/LoopixBuddhaJyanti.jpg" },
    { id: 11, src: "/assets/images/latest-designs/LoopixPromotionalPost.jpeg" },
    { id: 12, src: "/assets/images/latest-designs/LoopixSahidDiwa.jpeg" },
    { id: 13, src: "/assets/images/latest-designs/NeonFurniture.jpg" },
    { id: 14, src: "/assets/images/latest-designs/NeonFurniturepost1.jpeg" },
    { id: 15, src: "/assets/images/latest-designs/NeonFurniturepost2.jpeg" },
    { id: 16, src: "/assets/images/latest-designs/NeonFurniturepost4..jpeg" }
  ];

  const packagingImages = [
    { id: 1, src: "/assets/images/packaging/MOCKUP 1.png" },
    { id: 2, src: "/assets/images/packaging/4.jpg" },
    { id: 3, src: "/assets/images/packaging/custom_makeup_boxes_manufacturer_for_manufacturing_and_printing_of_custom_makeup_boxes_kit_at_wholesale_prices__10378.jpg" },
    { id: 4, src: "/assets/images/packaging/56fd5a51e4ff8eaf8f9a32e88f30b99d.jpg" },
    { id: 5, src: "/assets/images/packaging/Book under tree assets.jpg" },
    { id: 6, src: "/assets/images/packaging/Cake Box Design (1).jpg" },
    { id: 7, src: "/assets/images/packaging/Cake Box design.jpg" },
    { id: 8, src: "/assets/images/packaging/Pastry Box Design.jpg" },
    { id: 9, src: "/assets/images/packaging/1.png" },
    { id: 10, src: "/assets/images/packaging/2.jpg" },
    { id: 11, src: "/assets/images/packaging/3.jpg" }
  ];

  const housePreviewImages = [
    { id: 1, src: "/assets/images/housepreview/Glossy Paints Falgun 05  01.jpg" },
    { id: 2, src: "/assets/images/housepreview/Glossy Paints Falgun 05  02.jpg" },
    { id: 3, src: "/assets/images/housepreview/Glossy Paints Falgun 05  03.jpg" },
    { id: 4, src: "/assets/images/housepreview/Glossy Paints Falgun 05  05.jpg" },
    { id: 5, src: "/assets/images/housepreview/Glossy Paints Falgun 07 01.jpg" },
    { id: 6, src: "/assets/images/housepreview/Glossy Paints Falgun 07 02.jpg" },
    { id: 7, src: "/assets/images/housepreview/Glossy Paints Falgun 07 03.jpg" },
    { id: 8, src: "/assets/images/housepreview/Glossy Paints Falgun 07 07.jpg" },
    { id: 9, src: "/assets/images/housepreview/Glossy Paints Falgun 20 03 01.jpg" },
    { id: 10, src: "/assets/images/housepreview/Glossy Paints Falgun 20 03 02.jpg" },
    { id: 11, src: "/assets/images/housepreview/Glossy Paints Falgun 20 03 04.jpg" },
    { id: 12, src: "/assets/images/housepreview/Glossy Paints Falgun 20 03 05.jpg" },
    { id: 13, src: "/assets/images/housepreview/Glossy Paints Sep 20 1.png" },
    { id: 14, src: "/assets/images/housepreview/Glossy Paints Sep 20 4.png" },
    { id: 15, src: "/assets/images/housepreview/Glossy Paints Sep 20 6.png" },
    { id: 16, src: "/assets/images/housepreview/Glossy Paints Sep 20 7.png" }
  ];

  const logoDesignImages = [
    { id: 1, src: "/assets/images/logo/e.jpg", title: "Corporate Identity" },
    { id: 2, src: "/assets/images/logo/Loopix Mockup 1.jpg", title: "Tech Startup" },
    { id: 3, src: "/assets/images/logo/Shree restaurant.png", title: "Restaurant Brand" },
    { id: 4, src: "/assets/images/logo/Store Sign.png", title: "Retail Logo" },
    { id: 5, src: "/assets/images/logo/velocity sports.png", title: "Sports Brand" },
    { id: 6, src: "/assets/images/logo/Screenshot 2025-01-13 172318.png", title: "Vintage Badge" }
  ];

  const flyersImages = [
    { id: 1, src: "/assets/images/graphics/music.png", title: "Music Event Flyer" },
    { id: 2, src: "/assets/images/graphics/2.jpg", title: "Promotional Flyer" },
    { id: 3, src: "/assets/images/graphics/Neon Furniture Kukur Tihar 2.jpg", title: "Festival Flyer" },
    { id: 4, src: "/assets/images/graphics/python with djyango ad posts.png", title: "Educational Flyer" },
    { id: 5, src: "/assets/images/graphics/Loopix Creative Post Ads 2.jpg", title: "Business Flyer" },
    { id: 6, src: "/assets/images/social-media/Oasis Education Promotional Post 2.jpg", title: "Consultancy Flyer" }
  ];


  const processImages = [
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#0a84ff] text-white">
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

          {/* Static 4x4 Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => {
                  setActiveLightboxImages(galleryImages);
                  setLightboxOpen(true);
                  setLightboxIndex(index);
                }}
              >
                <div className="aspect-square bg-gray-200 dark:bg-white/10 flex items-center justify-center overflow-hidden">
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
                <div className="absolute inset-x-0 bottom-0 h-1/2 glass-scrim opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm opacity-80">View Design</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Designs Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Designs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh concepts and recent additions to my creative portfolio
            </p>
          </motion.div>

          {/* Static 4x4 Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {latestDesignImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => {
                  setActiveLightboxImages(latestDesignImages);
                  setLightboxOpen(true);
                  setLightboxIndex(index);
                }}
              >
                <div className="aspect-square bg-gray-200 dark:bg-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={image.src}
                    alt={`Latest Design ${image.id}`}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '1000/1100' }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      img.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                    }}
                  />
                  <span className="text-gray-500 absolute fallback-text hidden">Latest Design {image.id}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 glass-scrim opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm opacity-80">View Design</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process - Enhanced Design */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to transforming ideas into impactful visual solutions
            </p>
          </motion.div>

          {/* Enhanced Workflow Steps - Vertical Timeline Style */}
          <div className="max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative flex items-start gap-6 mb-16 last:mb-0 group"
              >
                {/* Connecting Line */}
                {index !== workflowSteps.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-full bg-[#0a84ff] opacity-30"></div>
                )}

                {/* Number Badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 bg-[#0a84ff] rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    <span className="text-3xl font-black text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow ml-4">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Section - Slideshow */}
      <PackagingSection packagingImages={packagingImages} />

      {/* House Preview Section */}
      <HousePreviewSection housePreviewImages={housePreviewImages} />

      {/* Logo Design Section */}
      <LogoDesignSection logoDesignImages={logoDesignImages} />

      {/* Flyers Section */}
      <FlyersSection flyersImages={flyersImages} />

      {/* CTA Section */}
      <section className="py-20 bg-[#0a84ff] text-white">
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
                {activeLightboxImages.map((image, index) => (
                  <div key={image.id} className="flex-shrink-0 w-full">
                    <div className="aspect-video bg-gray-200 dark:bg-white/10 flex items-center justify-center overflow-hidden">
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
                setLightboxIndex((prev) => (prev - 1 + activeLightboxImages.length) % activeLightboxImages.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % activeLightboxImages.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Lightbox Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {activeLightboxImages.map((_, index) => (
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

// Packaging Section Component
function PackagingSection({ packagingImages }: { packagingImages: Array<{ id: number; src: string }> }) {
  const [currentPackagingSlide, setCurrentPackagingSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPackagingSlide((prev) => (prev + 1) % Math.ceil(packagingImages.length / 4));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Packaging Designs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creative packaging solutions that stand out on shelves and captivate customers
          </p>
        </motion.div>

        {/* Sliding Gallery */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPackagingSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(packagingImages.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packagingImages.slice(slideIndex * 4, (slideIndex + 1) * 4).map((image, index) => {
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
                        >
                          <div className="aspect-[1000/1100] overflow-hidden">
                            <img
                              src={image.src}
                              alt={`Packaging Design ${image.id}`}
                              className="w-full h-full object-cover"
                              style={{ aspectRatio: '1000/1100' }}
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-1/2 glass-scrim opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            onClick={() => setCurrentPackagingSlide((prev) => (prev - 1 + Math.ceil(packagingImages.length / 4)) % Math.ceil(packagingImages.length / 4))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentPackagingSlide((prev) => (prev + 1) % Math.ceil(packagingImages.length / 4))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(packagingImages.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPackagingSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentPackagingSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// House Preview Section Component
function HousePreviewSection({ housePreviewImages }: { housePreviewImages: Array<{ id: number; src: string }> }) {
  const [currentHouseSlide, setCurrentHouseSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHouseSlide((prev) => (prev + 1) % Math.ceil(housePreviewImages.length / 4));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">House Preview</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Architectural design previews and property showcases
          </p>
        </motion.div>

        {/* Sliding Gallery */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentHouseSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(housePreviewImages.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {housePreviewImages.slice(slideIndex * 4, (slideIndex + 1) * 4).map((image, index) => {
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
                        >
                          <div className="aspect-[1000/1100] overflow-hidden">
                            <img
                              src={image.src}
                              alt={`House Preview ${image.id}`}
                              className="w-full h-full object-cover"
                              style={{ aspectRatio: '1000/1100' }}
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                              }}
                            />
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
            onClick={() => setCurrentHouseSlide((prev) => (prev - 1 + Math.ceil(housePreviewImages.length / 4)) % Math.ceil(housePreviewImages.length / 4))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentHouseSlide((prev) => (prev + 1) % Math.ceil(housePreviewImages.length / 4))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(housePreviewImages.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHouseSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentHouseSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Logo Design Section Component
function LogoDesignSection({ logoDesignImages }: { logoDesignImages: Array<{ id: number; src: string; title: string }> }) {
  return (
    <section className="py-20 bg-cyan-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Logo Designs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Memorable brand identities crafted with precision and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoDesignImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
            >
              <div className="aspect-square overflow-hidden p-6">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 glass-scrim opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Flyers Section Component
function FlyersSection({ flyersImages }: { flyersImages: Array<{ id: number; src: string; title: string }> }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flyers & Promotional Materials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Eye-catching promotional designs that effectively communicate your message
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flyersImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <div className="aspect-[1000/1100] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '1000/1100' }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 glass-scrim opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}