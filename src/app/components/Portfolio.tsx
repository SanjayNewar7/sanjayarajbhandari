import { useState } from 'react';
import { Link } from 'react-router-dom';

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: 'assets/images/branding/Loopix Mockup 5.jpg',
  },
  {
    id: 2,
    title: 'Product Packaging Design',
    category: 'Packaging',
    image: 'assets/images/packaging/2.jpg',
  },
  {
    id: 3,
    title: 'Creative Poster Design',
    category: 'Graphics',
    image: 'assets/images/social-media/Oasis Education Promotional Post 2.jpg',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'assets/images/social-media/Neon Furniture post 2.1.png',
  },
  {
    id: 5,
    title: 'Logo Design Collection',
    category: 'Logo',
    image: 'assets/images/logo/Store Sign.png',
  },
  {
    id: 6,
    title: 'Restaurant Menu Design',
    category: 'Menu',
    image: 'assets/images/menu/WhatsApp Image 2025-12-30 at 3.20.00 PM (1).jpeg',
  },
  {
    id: 7,
    title: 'Marketing Brochure',
    category: 'Brochures',
    image: 'assets/images/brochures/1.jpg',
  },
  {
    id: 8,
    title: 'Advertisement Banner',
    category: 'Banners',
    image: 'assets/images/banners/b4939b26-1a50-41a5-b9cc-639ca4a89993.png',
  },
  {
    id: 9,
    title: 'Brand Identity System',
    category: 'Branding',
    image: 'assets/images/branding/app mockup.jpg',
  },
  {
    id: 10,
    title: 'Creative Graphics',
    category: 'Graphics',
    image: 'assets/images/social-media/3.jpg',
  },
  {
    id: 11,
    title: 'Social Media Posts',
    category: 'Social Media',
    image: 'assets/images/social-media/Oasis Education Promotional Post 3.jpg',
  },
  {
    id: 12,
    title: 'Packaging Concept',
    category: 'Packaging',
    image: 'assets/images/packaging/4.jpg',
  },
];

const categories = [
  'All',
  'Graphics',
  'Social Media',
  'Logo',
  'Brochures',
  'Banners',
  'Menu',
  'Branding',
  'Packaging',
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Map categories to URL slugs
  const categorySlugMap: Record<string, string> = {
    'Graphics': 'graphics',
    'Social Media': 'social-media',
    'Logo': 'logo',
    'Brochures': 'brochures',
    'Banners': 'banners',
    'Menu': 'menu',
    'Branding': 'branding',
    'Packaging': 'packaging'
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            My Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Explore my portfolio of creative design work spanning various categories and styles.
          </p>
        </div>
  
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2 rounded-full transition-all text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
  
        {/* Portfolio Grid - Behance-inspired masonry layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/category/${categorySlugMap[item.category]}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer block"
            >
              <div className="aspect-[1000/1080] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
                
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                  <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-blue-300">{item.category}</p>
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1 sm:mt-2">Click to view more</p>
                </div>
              </div>
                
              {/* Category Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                {item.category}
              </div>
            </Link>
          ))}
        </div>
  
        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <p className="text-gray-600 mb-3 sm:mb-4">Want to see more of my work?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="https://www.behance.net/sanjayarajbhan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              View on Behance
            </a>
            <a
              href="https://www.pinterest.com/sanjaynewar007/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              View on Pinterest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}