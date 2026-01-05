import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';

// Portfolio data for each category
const categoryData: Record<string, { title: string; description: string; works: Array<{ id: number; title: string; image: string; description: string }> }> = {
  graphics: {
    title: 'Graphics Design',
    description: 'Creative graphic design work including posters, flyers, and visual communications.',
    works: [
      { id: 1, title: 'Modern Poster Design', image: '/assets/images/graphics/music.png', description: 'Eye-catching poster for music event' },
      { id: 2, title: 'Creative Flyer', image: '/assets/images/graphics/2.jpg', description: 'Promotional flyer design' },
      { id: 3, title: 'Event Graphics', image: '/assets/images/graphics/Neon Furniture Kukur Tihar 2.jpg', description: 'Complete event branding package' },
      { id: 4, title: 'Typography Design', image: '/assets/images/graphics/python with djyango ad posts.png', description: 'Experimental typography work' },
      { id: 5, title: 'Advertising Post', image: '/assets/images/graphics/Loopix Creative Post Ads 2.jpg', description: 'Modern advertising design' },
      { id: 6, title: 'Consultancy Post', image: '/assets/images/social-media/Oasis Education Promotional Post 2.jpg', description: 'Consultancy Post design for social media' },
    ]
  },
  'social-media': {
    title: 'Social Media Posts',
    description: 'Engaging social media content designs for various platforms.',
    works: [
      { id: 1, title: 'Instagram Campaign', image: '/assets/images/social-media/Neon Furniture post 4.png', description: 'Complete Instagram feed design' },
      { id: 2, title: 'Facebook Cover', image: '/assets/images/social-media/facebook cover & mockup.png', description: 'Professional Facebook cover design' },
      { id: 3, title: 'Story Templates', image: '/assets/images/social-media/Screenshot 2025-04-28 140425.png', description: 'Instagram story template set' },
      { id: 4, title: 'LinkedIn Post', image: '/assets/images/social-media/Boosting Post 3.1.png', description: 'Professional LinkedIn content' },
      { id: 5, title: 'Twitter Graphics', image: '/assets/images/social-media/Oasis Education Promotional Post 1.jpg', description: 'Twitter promotional graphics' },
      { id: 6, title: 'Social Media Designs', image: '/assets/images/social-media/complete.png', description: 'Complete social media Designs' },
    ]
  },
  logo: {
    title: 'Logo Design',
    description: 'Professional logo designs that capture brand essence and identity.',
    works: [
      { id: 1, title: 'Corporate Logo', image: '/assets/images/logo/e.jpg', description: 'Modern corporate identity' },
      { id: 2, title: 'Startup Branding', image: '/assets/images/logo/Loopix Mockup 1.jpg', description: 'Tech startup logo concept' },
      { id: 3, title: 'Restaurant Logo', image: '/assets/images/logo/Shree restaurant.png', description: 'Food & beverage branding' },
      { id: 4, title: 'Mart Logo', image: '/assets/images/logo/Store Sign.png', description: 'Clean Mart design' },
      { id: 5, title: 'Sports Logo', image: '/assets/images/logo/velocity sports.png', description: 'Athletic team branding' },
      { id: 6, title: 'Vintage Badge', image: '/assets/images/logo/Screenshot 2025-01-13 172318.png', description: 'Retro-style logo design' },
    ]
  },
  brochures: {
    title: 'Brochures',
    description: 'Professional brochure designs for marketing and promotional purposes.',
    works: [
      { id: 1, title: 'Business Brochure', image: '/assets/images/brochures/1.jpg', description: 'Corporate brochure layout' },
      { id: 2, title: 'Product Catalog', image: '/assets/images/brochures/2.jpg', description: 'Multi-page product catalog' },
      { id: 3, title: 'Product Brochure', image: '/assets/images/brochures/Screenshot 2025-05-11 172629.png', description: 'Tourism promotional material' },
      { id: 4, title: 'Product Brochure', image: '/assets/images/brochures/AI SMART GLASS DRAFT mockup.png', description: 'Healthcare information design' },
      { id: 5, title: 'Construction Brouchure', image: '/assets/images/brochures/Inside Preview Draft 3.png', description: 'Construction marketing brochure' },
      { id: 6, title: 'Educational Booklet', image: '/assets/images/brochures/educational-booklet-1.jpg', description: 'School information booklet' },
    ]
  },
  banners: {
    title: 'Banners',
    description: 'Eye-catching banner designs for web, print, and events.',
    works: [
      { id: 1, title: 'Web Banner', image: '/assets/images/banners/web-banner-1.jpg', description: 'Digital advertisement banner' },
      { id: 2, title: 'Event Banner', image: '/assets/images/banners/event-banner-1.jpg', description: 'Trade show display' },
      { id: 3, title: 'Retail Banner', image: '/assets/images/banners/retail-banner-1.jpg', description: 'Store promotional banner' },
      { id: 4, title: 'Festival Banner', image: '/assets/images/banners/festival-banner-1.jpg', description: 'Music festival signage' },
      { id: 5, title: 'Sale Banner', image: '/assets/images/banners/sale-banner-1.jpg', description: 'Seasonal sale promotion' },
      { id: 6, title: 'Billboard Design', image: '/assets/images/banners/billboard-design-1.jpg', description: 'Large format outdoor advertising' },
    ]
  },
  menu: {
    title: 'Menu Design',
    description: 'Restaurant and cafe menu designs that enhance dining experience.',
    works: [
      { id: 1, title: 'Restaurant Menu', image: '/assets/images/menu/WhatsApp Image 2025-12-30 at 3.20.00 PM (1).jpeg', description: 'Fine dining menu layout' },
      { id: 2, title: 'Cafe Menu Board', image: '/assets/images/menu/WhatsApp Image 2025-12-30 at 3.20.00 PM.jpeg', description: 'Coffee shop menu design' },
      { id: 3, title: 'Fast Food Menu', image: '/assets/images/menu/Screenshot 2025-05-16 174042.png', description: 'Quick service restaurant menu' },
      { id: 4, title: 'Wine List', image: '/assets/images/menu/wine-list-1.jpg', description: 'Elegant wine menu design' },
      { id: 5, title: 'Dessert Menu', image: '/assets/images/menu/dessert-menu-1.jpg', description: 'Sweet treats menu' },
      { id: 6, title: 'Bar Menu', image: '/assets/images/menu/WhatsApp Image 2025-12-30 at 3.21.15 PM.jpeg', description: 'Cocktail and drinks menu' },
    ]
  },
  branding: {
    title: 'Branding',
    description: 'Complete brand identity systems including guidelines and collateral.',
    works: [
      { id: 1, title: 'Brand Identity', image: '/assets/images/branding/cb9bb9240493697.6940093b56e26.jpg', description: 'Complete brand system' },
      { id: 2, title: 'Brand Guidelines', image: '/assets/images/branding/Screenshot 2026-01-04 174056.png', description: 'Comprehensive brand manual' },
      { id: 3, title: 'Stationery Set', image: '/assets/images/branding/Screenshot 2026-01-04 174144.png', description: 'Business card and letterhead' },
      { id: 4, title: 'Brand Collateral', image: '/assets/images/branding/Screenshot 2026-01-04 174226.png', description: 'Marketing material suite' },
      { id: 5, title: 'Visual Identity', image: '/assets/images/branding/Screenshot 2026-01-04 174312.png', description: 'Brand visual system' },
      { id: 6, title: 'Typography Concept', image: '/assets/images/branding/Screenshot 2026-01-04 174416.png', description: 'Brand Typography styling' },
    ]
  },
  packaging: {
    title: 'Packaging Design',
    description: 'Creative packaging solutions that stand out on shelves.',
    works: [
      { id: 1, title: 'Product Packaging', image: '/assets/images/packaging/MOCKUP 1.png', description: 'Retail product packaging' },
      { id: 2, title: 'Food Packaging', image: '/assets/images/packaging/4.jpg', description: 'Food & beverage packaging' },
      { id: 3, title: 'Cosmetic Packaging', image: '/assets/images/packaging/custom_makeup_boxes_manufacturer_for_manufacturing_and_printing_of_custom_makeup_boxes_kit_at_wholesale_prices__10378.jpg', description: 'Beauty product packaging' },
      { id: 4, title: 'Eco Packaging', image: '/assets/images/packaging/56fd5a51e4ff8eaf8f9a32e88f30b99d.jpg', description: 'Sustainable packaging design' },
      { id: 5, title: 'Luxury Box', image: '/assets/images/packaging/luxury-box-1.jpg', description: 'Premium gift box design' },
      { id: 6, title: 'Label Design', image: '/assets/images/packaging/Book under tree assets.jpg', description: 'Product label collection' },
    ]
  }
};

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (data) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.works.length) % data.works.length);
    }
  };

  const goToNext = () => {
    if (data) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.works.length);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 sm:mb-8 group"
            onClick={(e) => {
              e.preventDefault();
              // Navigate to home first, then scroll to portfolio
              window.location.href = '/';
              setTimeout(() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to Portfolio</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              {data.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xs sm:max-w-md lg:max-w-3xl">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[1000/1080] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {work.title}
                  </h3>
                  <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">
                    {work.description}
                  </p>
                  <div className="flex items-center gap-2 text-white">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm">View Details</span>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-sm sm:text-lg font-bold text-blue-600">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 sm:mt-20 md:mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl sm:shadow-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Like what you see?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto">
                Let's work together to bring your vision to life with stunning {data.title.toLowerCase()} designs.
              </p>
              <Link
                to="/#contact"
                className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-600 rounded-lg sm:rounded-xl hover:shadow-2xl transition-all duration-300 font-medium text-sm sm:text-base"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && data && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center items-center h-full">
              <img
                src={data.works[currentIndex].image}
                alt={data.works[currentIndex].title}
                className="max-h-[80vh] max-w-full object-contain"
                loading="lazy"
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} of {data.works.length} - {data.works[currentIndex].title}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
