import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';

const navItems: { id: string; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
];

const workItems = [
  { id: 'work-design', label: 'Graphic Design' },
  { id: 'work-apps', label: 'Mobile App Development' },
  { id: 'work-web', label: 'Web Development' },
  { id: 'work-uiux', label: 'UI/UX Design' },
];

function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={`w-11 h-11 lg:w-9 lg:h-9 rounded-full ${className}`} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-11 h-11 lg:w-9 lg:h-9 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/10 hover:bg-black/[0.08] dark:hover:bg-white/20 text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors ${className}`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (sectionId: string) => {
    if (location.pathname === '/' && activeSection === sectionId) return true;
    if (location.pathname === '/gallery' && sectionId === 'gallery') return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const sections = ['home', 'experience', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerScrolled ? 'py-2' : 'py-3'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`glass-nav relative flex items-center justify-between rounded-full border border-black/[0.06] dark:border-white/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.15)] px-4 sm:px-5 py-2 transition-all duration-500`}
        >
          <Link to="/" aria-label="Go to homepage" className="group flex items-center gap-2.5">
            <span className="h-9 w-9 overflow-hidden rounded-full bg-[#d9eaff] shadow-[0_6px_16px_-8px_rgba(10,132,255,.9)] ring-2 ring-white/80 transition-transform group-hover:scale-105 dark:ring-white/20">
              <img src="/assets/images/optimized/landing/navbar-profile.webp" alt="" className="h-full w-full object-cover object-top" decoding="async" />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-[#3a3a3c] dark:text-[#f5f5f7] sm:block">
              Sanjay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-black/[0.03] dark:bg-white/[0.06] rounded-full p-1">
            {navItems.map((item) => item.id === 'work' ? (
              <div key={item.id} className="group/work relative">
                <button
                  onClick={() => scrollToSection('work')}
                  aria-haspopup="menu"
                  className={`flex items-center gap-1 px-3.5 lg:px-4 py-1.5 rounded-full transition-colors font-medium text-sm ${isActiveLink(item.id) ? 'bg-white dark:bg-[#2c2c2e] text-[#0a84ff] shadow-sm' : 'text-[#3a3a3c] dark:text-[#c7c7cc] hover:text-[#0a84ff]'}`}
                >
                  Work <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/work:rotate-180" />
                </button>
                <div role="menu" className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover/work:visible group-hover/work:opacity-100 group-focus-within/work:visible group-focus-within/work:opacity-100">
                  <div className="rounded-2xl border border-white/70 bg-white/80 p-2 shadow-[0_18px_50px_-20px_rgba(0,0,0,.35)] backdrop-blur-2xl dark:border-white/15 dark:bg-[#1c1c1e]/85">
                    {workItems.map((workItem) => (
                      <button key={workItem.id} role="menuitem" onClick={() => scrollToSection(workItem.id)} className="block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#3a3a3c] transition-colors hover:bg-[#0a84ff]/10 hover:text-[#0a84ff] dark:text-[#e5e5ea] dark:hover:text-[#64b5ff]">
                        {workItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3.5 lg:px-4 py-1.5 rounded-full transition-colors font-medium text-sm ${isActiveLink(item.id) ? 'bg-white dark:bg-[#2c2c2e] text-[#0a84ff] shadow-sm' : 'text-[#3a3a3c] dark:text-[#c7c7cc] hover:text-[#0a84ff]'}`}>
                {item.label}
              </button>
            ))}
            <Link
              to="/gallery"
              className={`px-3.5 lg:px-4 py-1.5 rounded-full transition-colors font-medium text-sm ${isActiveLink('gallery')
                  ? 'bg-white dark:bg-[#2c2c2e] text-[#0a84ff] shadow-sm'
                  : 'text-[#3a3a3c] dark:text-[#c7c7cc] hover:text-[#0a84ff]'
                }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              className={`px-3.5 lg:px-4 py-1.5 rounded-full transition-colors font-medium text-sm ${location.pathname === '/blog'
                  ? 'bg-white dark:bg-[#2c2c2e] text-[#0a84ff] shadow-sm'
                  : 'text-[#3a3a3c] dark:text-[#c7c7cc] hover:text-[#0a84ff]'
                }`}
            >
              Blog
            </Link>
            <Link
              to="/events"
              className={`px-3.5 lg:px-4 py-1.5 rounded-full transition-colors font-medium text-sm ${location.pathname === '/events'
                  ? 'bg-white dark:bg-[#2c2c2e] text-[#0a84ff] shadow-sm'
                  : 'text-[#3a3a3c] dark:text-[#c7c7cc] hover:text-[#0a84ff]'
                }`}
            >
              Events
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 lg:px-5 py-2 bg-[#0a84ff] text-white rounded-full hover:bg-[#0066cc] transition-all text-sm font-medium shadow-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="w-11 h-11 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/10 text-[#1d1d1f] dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden mt-2 glass-nav border border-black/[0.06] dark:border-white/[0.08] rounded-3xl p-2 shadow-xl flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className={`w-full text-left font-medium py-3 px-4 rounded-2xl text-sm transition-colors ${isActiveLink(item.id) ? 'bg-[#0a84ff]/10 text-[#0a84ff]' : 'text-[#3a3a3c] dark:text-[#c7c7cc]'}`}>
                  {item.label}
                </button>
                {item.id === 'work' && (
                  <div className="mb-1 ml-4 border-l border-black/10 pl-2 dark:border-white/10">
                    {workItems.map((workItem) => (
                      <button key={workItem.id} onClick={() => scrollToSection(workItem.id)} className="block w-full rounded-xl px-3 py-2 text-left text-xs font-medium text-[#6e6e73] hover:bg-[#0a84ff]/10 hover:text-[#0a84ff] dark:text-[#98989d]">
                        {workItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left font-medium py-3 px-4 rounded-2xl text-sm ${isActiveLink('gallery') ? 'bg-[#0a84ff]/10 text-[#0a84ff]' : 'text-[#3a3a3c] dark:text-[#c7c7cc]'
                }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left font-medium py-3 px-4 rounded-2xl text-sm ${location.pathname === '/blog' ? 'bg-[#0a84ff]/10 text-[#0a84ff]' : 'text-[#3a3a3c] dark:text-[#c7c7cc]'
                }`}
            >
              Blog
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left font-medium py-3 px-4 rounded-2xl text-sm ${location.pathname === '/events' ? 'bg-[#0a84ff]/10 text-[#0a84ff]' : 'text-[#3a3a3c] dark:text-[#c7c7cc]'
                }`}
            >
              Events
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left font-medium py-3 px-4 rounded-2xl text-sm bg-[#0a84ff] text-white mt-1"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
