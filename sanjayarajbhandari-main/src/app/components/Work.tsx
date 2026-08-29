import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Film, Wallet, Paintbrush, Trophy, type LucideIcon } from 'lucide-react';

// ---------- Graphic Design ----------
const portfolioItems = [
  { id: 1, title: 'Modern Brand Identity', category: 'Branding', image: 'assets/images/branding/Loopix Mockup 5.jpg' },
  { id: 2, title: 'Product Packaging Design', category: 'Packaging', image: 'assets/images/packaging/2.jpg' },
  { id: 3, title: 'Creative Poster Design', category: 'Graphics', image: 'assets/images/social-media/Oasis Education Promotional Post 2.jpg' },
  { id: 4, title: 'Social Media Campaign', category: 'Social Media', image: 'assets/images/social-media/Neon Furniture post 2.1.png' },
  { id: 5, title: 'Logo Design Collection', category: 'Logo', image: 'assets/images/logo/Store Sign.png' },
  { id: 6, title: 'Restaurant Menu Design', category: 'Menu', image: 'assets/images/menu/WhatsApp Image 2025-12-30 at 3.20.00 PM (1).jpeg' },
  { id: 7, title: 'Marketing Brochure', category: 'Brochures', image: 'assets/images/brochures/1.jpg' },
  { id: 8, title: 'Advertisement Banner', category: 'Banners', image: 'assets/images/banners/b4939b26-1a50-41a5-b9cc-639ca4a89993.png' },
  { id: 9, title: 'Brand Identity System', category: 'Branding', image: 'assets/images/branding/app mockup.jpg' },
  { id: 10, title: 'Creative Graphics', category: 'Graphics', image: 'assets/images/social-media/3.jpg' },
  { id: 11, title: 'Social Media Posts', category: 'Social Media', image: 'assets/images/social-media/Oasis Education Promotional Post 3.jpg' },
  { id: 12, title: 'Packaging Concept', category: 'Packaging', image: 'assets/images/packaging/4.jpg' },
];

const categories = ['All', 'Graphics', 'Social Media', 'Logo', 'Brochures', 'Banners', 'Menu', 'Branding', 'Packaging'];

const categorySlugMap: Record<string, string> = {
  Graphics: 'graphics',
  'Social Media': 'social-media',
  Logo: 'logo',
  Brochures: 'brochures',
  Banners: 'banners',
  Menu: 'menu',
  Branding: 'branding',
  Packaging: 'packaging',
};

// ---------- Mobile Apps ----------
type MobileApp = {
  name: string;
  category: string;
  tagline: string;
  accent: string;
  icon: LucideIcon;
  /** Real Play Store screenshot, dropped into the phone mockup once available. */
  screenshot?: string;
  url: string;
};

const mobileApps: MobileApp[] = [
  {
    name: 'Movie Hub',
    category: 'Entertainment',
    tagline: 'Discover, track, and explore movies & shows',
    accent: '#1b4332',
    icon: Film,
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.moviehub',
  },
  {
    name: 'Monio',
    category: 'Finance',
    tagline: 'Smart money manager — budget smarter, spend wiser',
    accent: '#0a84ff',
    icon: Wallet,
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.monivo',
  },
  {
    name: 'Aakriti',
    category: 'Creativity',
    tagline: 'Your drawing canvas for sketches and ideas',
    accent: '#ff375f',
    icon: Paintbrush,
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.aakriti',
  },
  {
    name: 'Livegoal',
    category: 'Sports',
    tagline: 'Live football scores, stats & news',
    accent: '#248a3d',
    icon: Trophy,
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.livegoal',
  },
];

// ---------- Web Projects ----------
const webProjects = [
  {
    name: 'Calsie',
    domain: 'calsie.com.au',
    tagline: 'Modern web platform built for Calsie',
    image: '/assets/images/branding/Loopix Mockup 3.jpg',
    url: 'https://calsie.com.au',
  },
  {
    name: 'Loopix Creations',
    domain: 'loopixcreations.com.np',
    tagline: 'Studio website for Loopix Creations',
    image: '/assets/images/branding/Loopix Mockup 6.jpg',
    url: 'https://www.loopixcreations.com.np/',
  },
  {
    name: 'Loopix Kaam',
    domain: 'work.loopix.com.np',
    tagline: 'Internal workspace & task platform for Loopix',
    image: '/assets/images/branding/Screenshot 2026-01-04 174056.png',
    url: 'https://work.loopix.com.np',
  },
];

// ---------- UI/UX Design (Figma) ----------
const uiuxProjects = [
  {
    name: 'Taj Mahal Masala',
    tagline: 'Packaging & brand identity concept for a spice brand',
    image: '/assets/images/packaging/4.jpg',
    url: 'https://www.figma.com/design/UwvlclBV8UccKeCZDrBlIN/Taj-Mahal-Masala?node-id=0-1&p=f&t=RHkfWlHtQ4SoM9kv-0',
  },
  {
    name: 'KK ADS',
    tagline: 'Advertising agency brand & web concept',
    image: '/assets/images/social-media/3.jpg',
    url: 'https://www.figma.com/design/XL4E4KBpS99ICH8ZkBYklV/KK-ADS?node-id=0-1&p=f&t=gSyYPzajWhmN8Nf6-0',
  },
  {
    name: 'Hotel Website',
    tagline: 'Booking-focused hotel website concept',
    image: '/assets/images/branding/Screenshot 2026-01-04 174144.png',
    url: 'https://www.figma.com/design/3OV9gvnFZV4xW8PBY2dT7o/Hotel-Website?node-id=0-1&p=f&t=UBglXWkEsovaSU7w-0',
  },
  {
    name: 'EduVerse',
    tagline: 'Learning platform UI concept',
    image: 'assets/images/gallery/ishm promo 9 01.jpg',
    url: 'https://www.figma.com/design/OpCfAtiP5Fx085yDRVoztI/EduVerse?node-id=0-1&p=f&t=OMMGJ3UGTxQ6WNde-0',
  },
  {
    name: 'Hisab Kitab',
    tagline: 'Personal finance & bookkeeping app UI concept',
    image: '/assets/images/branding/Screenshot 2026-01-04 174226.png',
    url: 'https://www.figma.com/design/tfwgza8bYLdme1kqEjGZfg/Hisab-kitab?node-id=0-1&p=f&t=sPvd4ecQyUL78bR2-0',
  },
  {
    name: 'Awaz',
    tagline: 'Community voice & awareness platform concept',
    image: '/assets/images/branding/Screenshot 2026-01-04 174312.png',
    url: 'https://www.figma.com/design/xVfERIjSVIvf3Ze0v9Lark/Awaz-Figma?t=2VhLcKtF1xk3XEF7-0',
  },
];

const tabs = [
  { id: 'design', label: 'Graphic Design' },
  { id: 'apps', label: 'Mobile Apps' },
  { id: 'web', label: 'Web Projects' },
  { id: 'uiux', label: 'UI/UX Design' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export function Work() {
  const [activeTab, setActiveTab] = useState<TabId>('design');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="py-20 sm:py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-3 sm:mb-4">
            My Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto">
            Four disciplines, one continuous process — from a brand mark to a published app.
          </p>
        </div>

        {/* Segmented control */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1 glass-panel rounded-full p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-[#0a84ff]' : 'text-[#3a3a3c] dark:text-[#c7c7cc] hover:text-[#0a84ff]'
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="work-tab-pill"
                    className="absolute inset-0 bg-white dark:bg-[#2c2c2e] rounded-full shadow-sm"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'design' && (
            <motion.div key="design" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all text-sm ${activeCategory === category
                        ? 'bg-[#0a84ff] text-white shadow-md'
                        : 'macos-card text-[#3a3a3c] dark:text-[#c7c7cc]'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/category/${categorySlugMap[item.category]}`}
                    className="group relative overflow-hidden rounded-2xl macos-card cursor-pointer block"
                  >
                    <div className="aspect-[1000/1080] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 glass-scrim p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs sm:text-sm mb-1 text-[#7dd3ff]">{item.category}</p>
                      <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#0a84ff] text-white px-2.5 py-1 rounded-full text-xs">
                      {item.category}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-12 sm:mt-14">
                <p className="text-[#6e6e73] dark:text-[#98989d] mb-4">Want to see more of my work?</p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <a
                    href="https://www.behance.net/sanjayarajbhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0a84ff] text-white px-6 py-3 rounded-full hover:bg-[#0066cc] transition-colors text-sm sm:text-base"
                  >
                    View on Behance
                  </a>
                  <a
                    href="https://www.pinterest.com/sanjaynewar007/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="macos-card text-[#0a84ff] px-6 py-3 rounded-full hover:bg-white dark:hover:bg-white/10 transition-colors text-sm sm:text-base"
                  >
                    View on Pinterest
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'apps' && (
            <motion.div
              key="apps"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto"
            >
              {mobileApps.map((app) => (
                <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                  {/* Phone mockup — drop a real screenshot into app.screenshot when ready */}
                  <div className="relative w-full aspect-[9/19] mx-auto rounded-[1.6rem] bg-black ring-1 ring-black/10 dark:ring-white/15 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-full z-10" />
                    {app.screenshot ? (
                      <img
                        src={app.screenshot}
                        alt={app.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: app.accent }}>
                        <app.icon className="w-8 h-8 text-white/60" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  {/* App info */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="font-semibold text-sm text-[#1d1d1f] dark:text-white">{app.name}</span>
                    <span className="px-3 py-1 rounded-full bg-[#0a84ff]/10 text-[#0a84ff] text-xs font-semibold group-hover:bg-[#0a84ff] group-hover:text-white transition-colors">
                      GET
                    </span>
                  </div>
                  <p className="text-xs text-[#6e6e73] dark:text-[#98989d] text-center leading-snug line-clamp-2 mt-1 px-2">
                    {app.tagline}
                  </p>
                </a>
              ))}
            </motion.div>
          )}

          {activeTab === 'web' && (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {webProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group macos-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="macos-window-bar px-4 py-2.5 border-b border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03]">
                    <span className="macos-dot bg-[#ff5f57]" />
                    <span className="macos-dot bg-[#febc2e]" />
                    <span className="macos-dot bg-[#28c840]" />
                    <span className="ml-2 flex-1 text-center text-[11px] font-medium text-[#6e6e73] dark:text-[#98989d] truncate pr-6">
                      {project.domain}
                    </span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#1d1d1f] dark:text-white mb-1">{project.name}</h3>
                    <p className="text-sm text-[#6e6e73] dark:text-[#98989d] mb-3">{project.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#0a84ff]">
                      Visit Website <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>
          )}

          {activeTab === 'uiux' && (
            <motion.div
              key="uiux"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {uiuxProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl macos-card cursor-pointer block"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 glass-scrim p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                    <p className="text-sm text-white/80 mb-2">{project.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium">
                      View in Figma <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/figma/figma-original.svg"
                      alt="Figma"
                      className="w-4 h-4"
                    />
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
