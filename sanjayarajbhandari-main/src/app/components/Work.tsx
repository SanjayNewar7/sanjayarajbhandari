import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Film, Wallet, Paintbrush, Trophy, X, type LucideIcon } from 'lucide-react';
import { InteractiveGridBackground } from './InteractiveGridBackground';

// ---------- Graphic Design ----------
const portfolioItems = [
  { id: 1, title: 'Modern Brand Identity', category: 'Branding', image: 'assets/images/branding/Loopix Mockup 5.jpg' },
  { id: 2, title: 'Product Packaging Design', category: 'Packaging', image: 'assets/images/packaging/2.jpg' },
  { id: 3, title: 'Creative Poster Design', category: 'Social Media', image: 'assets/images/social-media/Oasis Education Promotional Post 2.jpg' },
  { id: 4, title: 'Social Media Campaign', category: 'Social Media', image: 'assets/images/social-media/Neon Furniture post 2.1.png' },
  { id: 5, title: 'Logo Design Collection', category: 'Logo', image: 'assets/images/logo/Store Sign.png' },
  { id: 6, title: 'Restaurant Menu Design', category: 'Menu', image: 'assets/images/menu/WhatsApp Image 2025-12-30 at 3.20.00 PM (1).jpeg' },
  { id: 7, title: 'Marketing Brochure', category: 'Brochures', image: 'assets/images/brochures/1.jpg' },
  { id: 8, title: 'Advertisement Banner', category: 'Banners', image: 'assets/images/banners/b4939b26-1a50-41a5-b9cc-639ca4a89993.png' },
  { id: 9, title: 'Brand Identity System', category: 'Branding', image: 'assets/images/branding/app mockup.jpg' },
  { id: 10, title: 'Creative Graphics', category: 'Social Media', image: 'assets/images/social-media/3.jpg' },
  { id: 11, title: 'Social Media Posts', category: 'Social Media', image: 'assets/images/social-media/Oasis Education Promotional Post 3.jpg' },
  { id: 12, title: 'Packaging Concept', category: 'Packaging', image: 'assets/images/packaging/4.jpg' },
  { id: 13, title: 'Creative Photo Manipulation', category: 'Manipulation', image: '/assets/images/graphics/music.png' },
  { id: 14, title: 'Campaign Visual', category: 'Social Media', image: '/assets/images/optimized/boosting-post-3-1.webp' },
  { id: 15, title: 'Identity Exploration', category: 'Logo', image: '/assets/images/logo/Livegoal.png' },
  { id: 16, title: 'Editorial Packaging', category: 'Packaging', image: '/assets/images/packaging/Cake Box design.jpg' },
];

const categories = ['All', 'Social Media', 'Manipulation', 'Logo', 'Brochures', 'Banners', 'Menu', 'Branding', 'Packaging'];

const categoryImagePools: Partial<Record<string, string[]>> = {
  'Social Media': [
    '/assets/images/gallery/Cookery Promotional Post 1.jpg',
    '/assets/images/gallery/Oasis Education Promotional Post 3.jpg',
    '/assets/images/gallery/Oasis Education Promotional Post 2.jpg',
    '/assets/images/gallery/admission Open.jpg',
      '/assets/images/optimized/boosting-post-3-1.webp',
      '/assets/images/optimized/boosting-post-8.webp',
      '/assets/images/optimized/neon-furniture-post-2.webp',
      '/assets/images/optimized/neon-furniture.webp',
    '/assets/images/gallery/Glossy Promo 58.jpg',
    '/assets/images/gallery/Glossy Promo 35.jpg',
    '/assets/images/gallery/ishm promo 9 01.jpg',
    '/assets/images/gallery/ishm ADMISSION open.jpg',
    '/assets/images/gallery/testimonial-01.jpg',
    '/assets/images/gallery/1 Year Anniversary Celebration 2.jpg',
    '/assets/images/gallery/Luckin Coffee post 2.png',
    '/assets/images/gallery/chapter Itenary post 1.jpg',
  ],
  Logo: [
    '/assets/images/logo/e.jpg',
    '/assets/images/logo/Loopix Mockup 1.jpg',
    '/assets/images/logo/Shree restaurant.png',
    '/assets/images/logo/Store Sign.png',
      '/assets/images/logo/velocity sports.png',
      '/assets/images/logo/Screenshot 2025-01-13 172318.png',
      '/assets/images/logo/Livegoal.png',
      '/assets/images/logo/Moviehub.png',
  ],
  Packaging: [
    '/assets/images/packaging/MOCKUP 1.png',
    '/assets/images/packaging/4.jpg',
    '/assets/images/packaging/custom_makeup_boxes_manufacturer_for_manufacturing_and_printing_of_custom_makeup_boxes_kit_at_wholesale_prices__10378.jpg',
    '/assets/images/packaging/56fd5a51e4ff8eaf8f9a32e88f30b99d.jpg',
    '/assets/images/packaging/Book under tree assets.jpg',
    '/assets/images/packaging/Cake Box Design (1).jpg',
    '/assets/images/packaging/Cake Box design.jpg',
      '/assets/images/packaging/Pastry Box Design.jpg',
    ],
  Manipulation: Array.from(
    { length: 12 },
    (_, index) => `/assets/images/optimized/manipulation/manipulation-${index + 1}.webp`,
  ),
};

const categoryGridCounts: Record<string, number> = {
  'Social Media': 16,
  Logo: 8,
  Brochures: 8,
  Banners: 8,
  Menu: 8,
  Branding: 8,
  Packaging: 8,
  Manipulation: 12,
};

const categorySlugMap: Record<string, string> = {
  'Social Media': 'social-media',
  Logo: 'logo',
  Brochures: 'brochures',
  Banners: 'banners',
  Menu: 'menu',
  Branding: 'branding',
  Packaging: 'packaging',
  Manipulation: 'manipulation',
};

// ---------- Mobile Apps ----------
type MobileApp = {
  name: string;
  category: string;
  tagline: string;
  accent: string;
  icon: LucideIcon;
  screenshots: string[];
  interval: number;
  url: string;
};

const mobileApps: MobileApp[] = [
  {
    name: 'Movie Hub',
    category: 'Entertainment',
    tagline: 'Discover, track, and explore movies & shows',
    accent: '#1b4332',
    icon: Film,
    interval: 3100,
    screenshots: [
      '/assets/images/app development/Movie Hub/WhatsApp Image 2026-09-13 at 9.58.11 AM.jpeg',
      '/assets/images/app development/Movie Hub/WhatsApp Image 2026-09-13 at 9.58.11 AM (1).jpeg',
      '/assets/images/app development/Movie Hub/WhatsApp Image 2026-09-13 at 9.58.11 AM (2).jpeg',
      '/assets/images/app development/Movie Hub/WhatsApp Image 2026-09-13 at 9.58.11 AM (3).jpeg',
      '/assets/images/app development/Movie Hub/WhatsApp Image 2026-09-13 at 9.58.23 AM.jpeg',
      '/assets/images/app development/Movie Hub/WhatsApp Image 2026-09-13 at 9.58.43 AM.jpeg',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.moviehub',
  },
  {
    name: 'Monio',
    category: 'Finance',
    tagline: 'Smart money manager — budget smarter, spend wiser',
    accent: '#0a84ff',
    icon: Wallet,
    interval: 3350,
    screenshots: [
      '/assets/images/app development/Monivo/Screenshot_20260315-102901.png',
      '/assets/images/app development/Monivo/Screenshot_20260315-111432.png',
      '/assets/images/app development/Monivo/Screenshot_20260315-111445.png',
      '/assets/images/app development/Monivo/Screenshot_20260315-111514.png',
      '/assets/images/app development/Monivo/Screenshot_20260315-235054.png',
      '/assets/images/app development/Monivo/Screenshot_20260315-235113.png',
      '/assets/images/app development/Monivo/Screenshot_20260315-235130.png',
      '/assets/images/app development/Monivo/Screenshot_20260315-235144.png',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.monivo',
  },
  {
    name: 'Aakriti',
    category: 'Creativity',
    tagline: 'Your drawing canvas for sketches and ideas',
    accent: '#ff375f',
    icon: Paintbrush,
    interval: 3650,
    screenshots: [
      '/assets/images/app development/Aakriti/WhatsApp Image 2026-09-13 at 9.51.09 AM.jpeg',
      '/assets/images/app development/Aakriti/WhatsApp Image 2026-09-13 at 9.51.09 AM (1).jpeg',
      '/assets/images/app development/Aakriti/WhatsApp Image 2026-09-13 at 9.51.09 AM (2).jpeg',
      '/assets/images/app development/Aakriti/WhatsApp Image 2026-09-13 at 9.51.09 AM (3).jpeg',
      '/assets/images/app development/Aakriti/WhatsApp Image 2026-09-13 at 9.51.09 AM (4).jpeg',
      '/assets/images/app development/Aakriti/WhatsApp Image 2026-09-13 at 9.51.09 AM (5).jpeg',
      '/assets/images/app development/Aakriti/WhatsApp Image 2026-09-13 at 9.51.09 AM (6).jpeg',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.aakriti',
  },
  {
    name: 'Livegoal',
    category: 'Sports',
    tagline: 'Live football scores, stats & news',
    accent: '#248a3d',
    icon: Trophy,
    interval: 3950,
    screenshots: [
      '/assets/images/app development/LiveGoal/WhatsApp Image 2026-09-13 at 9.54.52 AM.jpeg',
      ...Array.from({ length: 14 }, (_, index) => `/assets/images/app development/LiveGoal/WhatsApp Image 2026-09-13 at 9.54.52 AM (${index + 1}).jpeg`),
    ],
    url: 'https://play.google.com/store/apps/details?id=com.sanjaya.livegoal',
  },
];

function AppPhoneSlideshow({ app, order }: { app: MobileApp; order: number }) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);
  const inView = useInView(phoneRef, { amount: 0.15 });

  useEffect(() => {
    if (!inView || paused || app.screenshots.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let intervalId = 0;
    const startId = window.setTimeout(() => {
      setSlide(current => (current + 1) % app.screenshots.length);
      intervalId = window.setInterval(() => setSlide(current => (current + 1) % app.screenshots.length), app.interval);
    }, order * 420 + app.interval);
    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [app.interval, app.screenshots.length, inView, order, paused]);

  return (
    <div
      ref={phoneRef}
      className="relative mx-auto aspect-[9/19] w-full max-w-[112px] overflow-hidden rounded-[1.25rem] bg-black shadow-lg ring-1 ring-black/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl dark:ring-white/15 sm:max-w-[150px] sm:rounded-[1.45rem] lg:max-w-[190px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-label={`${app.name} screenshot ${slide + 1} of ${app.screenshots.length}`}
    >
      <div className="absolute left-1/2 top-2 z-20 h-2.5 w-10 -translate-x-1/2 rounded-full bg-black" />
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={app.screenshots[slide]}
          src={app.screenshots[slide]}
          alt={`${app.name} app screen ${slide + 1}`}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover"
          loading={slide === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </AnimatePresence>
      <div className="absolute inset-x-3 bottom-3 z-20 flex justify-center gap-1" aria-hidden="true">
        {app.screenshots.map((_, index) => (
          <span key={index} className={`h-1 rounded-full bg-white shadow-sm transition-all ${index === slide ? 'w-4 opacity-95' : 'w-1 opacity-45'}`} />
        ))}
      </div>
    </div>
  );
}

// ---------- Web Projects ----------
const webProjects = [
  {
    name: 'Calsie',
    domain: 'calsie.com.au',
    tagline: 'Modern web platform built for Calsie',
    image: '/assets/images/app development/web development/Calsie/calsie.png',
    url: 'https://calsie.com.au',
  },
  {
    name: 'Loopix Creations',
    domain: 'loopixcreations.com.np',
    tagline: 'Studio website for Loopix Creations',
    image: '/assets/images/app development/web development/Loopix Creations/image.png',
    url: 'https://www.loopixcreations.com.np/',
  },
  {
    name: 'Loopix Kaam',
    domain: 'work.loopix.com.np',
    tagline: 'Internal workspace & task platform for Loopix',
    image: '/assets/images/app development/web development/Loopix Kaam/image.png',
    url: 'https://work.loopix.com.np',
  },
];

// ---------- UI/UX Design (Figma) ----------
const uiuxProjects = [
  {
    name: 'Taj Mahal Masala',
    tagline: 'Packaging & brand identity concept for a spice brand',
    image: '/assets/images/UI/UX/TajMahal.png',
    url: 'https://www.figma.com/design/UwvlclBV8UccKeCZDrBlIN/Taj-Mahal-Masala?node-id=0-1&p=f&t=vb3GdWbZKqZqlWjk-0',
  },
  {
    name: 'KK ADS',
    tagline: 'Advertising agency brand & web concept',
    image: '/assets/images/UI/UX/KKADS.png',
    url: 'https://www.figma.com/design/XL4E4KBpS99ICH8ZkBYklV/KK-ADS?node-id=0-1&p=f&t=gSyYPzajWhmN8Nf6-0',
  },
  {
    name: 'Miki Hotel',
    tagline: 'Booking-focused hotel website concept',
    image: '/assets/images/UI/UX/Mikki Hotel website.png',
    url: 'https://www.figma.com/design/3OV9gvnFZV4xW8PBY2dT7o/Hotel-Website?node-id=0-1&p=f&t=AvJUXBvDIj5t2Rhj-0',
  },
  {
    name: 'EduVerse',
    tagline: 'Learning platform UI concept',
    image: '/assets/images/UI/UX/EDUVERSE.png',
    url: 'https://www.figma.com/design/OpCfAtiP5Fx085yDRVoztI/EduVerse?node-id=0-1&p=f&t=OMMGJ3UGTxQ6WNde-0',
  },
  {
    name: 'Hisab Kitab',
    tagline: 'Personal finance & bookkeeping app UI concept',
    image: '/assets/images/UI/UX/HisabKitab.png',
    url: 'https://www.figma.com/design/tfwgza8bYLdme1kqEjGZfg/Hisab-kitab?node-id=0-1',
  },
  {
    name: 'Awaz',
    tagline: 'Community voice & awareness platform concept',
    image: '/assets/images/UI/UX/Awaz.png',
    url: 'https://www.figma.com/design/xVfERIjSVIvf3Ze0v9Lark/Awaz-Figma?node-id=0-1&p=f&t=VUOriWsPxo2fGmZq-0',
  },
];

export function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [manipulationLightbox, setManipulationLightbox] = useState<number | null>(null);
  const manipulationImages = categoryImagePools.Manipulation ?? [];

  const moveManipulationLightbox = (step: number) => {
    setManipulationLightbox((current) => current === null
      ? null
      : (current + step + manipulationImages.length) % manipulationImages.length);
  };

  useEffect(() => {
    if (manipulationLightbox === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setManipulationLightbox(null);
      if (event.key === 'ArrowLeft') moveManipulationLightbox(-1);
      if (event.key === 'ArrowRight') moveManipulationLightbox(1);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [manipulationLightbox, manipulationImages.length]);

  const sourceItems = activeCategory === 'All' ? portfolioItems.slice(0, 16) : portfolioItems.filter((item) => item.category === activeCategory);
  const filteredItems = activeCategory === 'All'
    ? sourceItems
    : Array.from({ length: categoryGridCounts[activeCategory] ?? sourceItems.length }, (_, index) => {
        const source = sourceItems[index % sourceItems.length];
        const imagePool = categoryImagePools[activeCategory];
        return {
          ...source,
          id: `${activeCategory}-${index}`,
          image: imagePool?.[index % imagePool.length] ?? source.image,
          title: index < sourceItems.length ? source.title : `${activeCategory} Project ${index + 1}`,
        };
      });

  return (
    <section id="work" className="relative overflow-clip bg-[#f5f5f7] py-20 dark:bg-black sm:py-24">
      <div className="pointer-events-none sticky top-0 z-0 -mb-[100svh] h-[100svh] overflow-hidden" aria-hidden="true">
        <InteractiveGridBackground />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(10,132,255,.11),transparent_25%),radial-gradient(circle_at_88%_46%,rgba(191,90,242,.09),transparent_28%),radial-gradient(circle_at_35%_82%,rgba(48,209,88,.07),transparent_24%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(10,132,255,.16),transparent_25%),radial-gradient(circle_at_88%_46%,rgba(191,90,242,.13),transparent_28%),radial-gradient(circle_at_35%_82%,rgba(48,209,88,.09),transparent_24%)]" aria-hidden="true" />
      <motion.div
        className="pointer-events-none absolute left-[8%] top-[9%] h-52 w-52 rounded-full bg-[#0a84ff]/10 blur-3xl dark:bg-[#0a84ff]/15"
        animate={{ x: [0, 70, -15, 0], y: [0, 35, 90, 0], scale: [1, 1.18, .94, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-[6%] top-[48%] h-64 w-64 rounded-full bg-[#bf5af2]/10 blur-3xl dark:bg-[#bf5af2]/15"
        animate={{ x: [0, -65, 20, 0], y: [0, 85, -30, 0], scale: [1, .9, 1.16, 1] }}
        transition={{ duration: 29, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-[8%] left-[30%] h-48 w-48 rounded-full bg-[#30d158]/[0.08] blur-3xl dark:bg-[#30d158]/10"
        animate={{ x: [0, 100, 25, 0], y: [0, -55, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-white mb-3 sm:mb-4">
            My Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#6e6e73] dark:text-[#98989d] max-w-2xl mx-auto">
            Four disciplines, one continuous process — from a brand mark to a published app.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-28">
          {true && (
            <motion.div id="work-design" key="design" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="scroll-mt-28">
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0a84ff]">My work for</p>
                <h3 className="mt-2 text-3xl font-bold text-[#1d1d1f] dark:text-white sm:text-4xl">Graphic Design</h3>
              </div>
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

              <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                {filteredItems.map((item, index) => (
                  <Link
                    key={item.id}
                    to={`/category/${categorySlugMap[item.category]}`}
                    onClick={(event) => {
                      if (activeCategory === 'Manipulation') {
                        event.preventDefault();
                        setManipulationLightbox(index);
                      }
                    }}
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

          {true && (
            <motion.div
              id="work-apps"
              key="apps"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="mx-auto grid min-h-[100svh] max-w-[1180px] scroll-mt-0 grid-cols-2 content-center gap-x-4 gap-y-5 py-16 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-4 lg:py-20"
            >
              <div className="col-span-full mb-1 text-center sm:mb-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0a84ff]">My work for</p>
                <h3 className="mt-1.5 text-3xl font-bold text-[#1d1d1f] dark:text-white sm:mt-2 sm:text-4xl">Mobile Apps</h3>
              </div>
              {mobileApps.map((app, index) => (
                <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                  {/* Phone mockup — drop a real screenshot into app.screenshot when ready */}
                  <AppPhoneSlideshow app={app} order={index} />

                  {/* App info */}
                  <div className="mt-2 flex items-center justify-center gap-1.5 sm:mt-3 sm:gap-2">
                    <span className="font-semibold text-sm text-[#1d1d1f] dark:text-white">{app.name}</span>
                    <span className="px-3 py-1 rounded-full bg-[#0a84ff]/10 text-[#0a84ff] text-xs font-semibold group-hover:bg-[#0a84ff] group-hover:text-white transition-colors">
                      GET
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 px-1 text-center text-[10px] leading-snug text-[#6e6e73] dark:text-[#98989d] sm:px-2 sm:text-xs">
                    {app.tagline}
                  </p>
                </a>
              ))}
            </motion.div>
          )}

          {true && (
            <motion.div
              id="work-web"
              key="web"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative isolate mx-auto grid max-w-[1180px] scroll-mt-28 grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
            >
              <div className="pointer-events-none absolute -inset-x-24 -inset-y-20 -z-10 bg-[radial-gradient(circle_at_18%_38%,rgba(10,132,255,.14),transparent_35%),radial-gradient(circle_at_82%_62%,rgba(191,90,242,.11),transparent_38%)] blur-2xl dark:bg-[radial-gradient(circle_at_18%_38%,rgba(10,132,255,.22),transparent_35%),radial-gradient(circle_at_82%_62%,rgba(191,90,242,.18),transparent_38%)]" aria-hidden="true" />
              <div className="md:col-span-3 mb-2 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0a84ff]">My work for</p>
                <h3 className="mt-2 text-3xl font-bold text-[#1d1d1f] dark:text-white sm:text-4xl">Web Projects</h3>
              </div>
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

          {true && (
            <motion.div
              id="work-uiux"
              key="uiux"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative isolate mx-auto grid max-w-[1180px] scroll-mt-28 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            >
              <div className="pointer-events-none absolute -inset-x-24 -inset-y-20 -z-10 bg-[radial-gradient(circle_at_22%_30%,rgba(48,209,88,.12),transparent_34%),radial-gradient(circle_at_76%_64%,rgba(10,132,255,.12),transparent_38%),radial-gradient(circle_at_50%_92%,rgba(191,90,242,.08),transparent_32%)] blur-2xl dark:bg-[radial-gradient(circle_at_22%_30%,rgba(48,209,88,.19),transparent_34%),radial-gradient(circle_at_76%_64%,rgba(10,132,255,.2),transparent_38%),radial-gradient(circle_at_50%_92%,rgba(191,90,242,.14),transparent_32%)]" aria-hidden="true" />
              <div className="sm:col-span-2 lg:col-span-3 mb-2 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0a84ff]">My work for</p>
                <h3 className="mt-2 text-3xl font-bold text-[#1d1d1f] dark:text-white sm:text-4xl">UI/UX Design</h3>
              </div>
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
        </div>
      </div>

      <AnimatePresence>
        {manipulationLightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Manipulation artwork viewer"
            onClick={() => setManipulationLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:top-7"
              aria-label="Close fullscreen viewer"
              onClick={() => setManipulationLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-7 sm:h-14 sm:w-14"
              aria-label="Previous artwork"
              onClick={(event) => {
                event.stopPropagation();
                moveManipulationLightbox(-1);
              }}
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <motion.img
              key={manipulationLightbox}
              src={manipulationImages[manipulationLightbox]}
              alt={`Manipulation artwork ${manipulationLightbox + 1}`}
              className="max-h-[calc(100svh-5rem)] max-w-[calc(100vw-3rem)] select-none object-contain sm:max-w-[calc(100vw-8rem)]"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-7 sm:h-14 sm:w-14"
              aria-label="Next artwork"
              onClick={(event) => {
                event.stopPropagation();
                moveManipulationLightbox(1);
              }}
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="absolute bottom-4 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md sm:bottom-6">
              {manipulationLightbox + 1} / {manipulationImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
