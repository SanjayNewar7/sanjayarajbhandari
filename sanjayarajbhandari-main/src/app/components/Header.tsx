import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';

const navItems: { id: string; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
];

function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={`w-9 h-9 rounded-full ${className}`} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-9 h-9 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/10 hover:bg-black/[0.08] dark:hover:bg-white/20 text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors ${className}`}
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
          className={`glass-nav flex items-center justify-between rounded-full border border-black/[0.06] dark:border-white/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.15)] px-4 sm:px-5 py-2 transition-all duration-500`}
        >
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-base sm:text-lg font-bold text-[#1d1d1f] dark:text-white tracking-tight">
              Sanjaya Rajbhandari
            </span>
            <span className="hidden sm:block text-[11px] font-medium text-[#6e6e73] dark:text-[#98989d] tracking-tight">
              Designer &middot; Developer &middot; Creator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-black/[0.03] dark:bg-white/[0.06] rounded-full p-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 lg:px-4 py-1.5 rounded-full transition-colors font-medium text-sm ${isActiveLink(item.id)
                    ? 'bg-white dark:bg-[#2c2c2e] text-[#0a84ff] shadow-sm'
                    : 'text-[#3a3a3c] dark:text-[#c7c7cc] hover:text-[#0a84ff]'
                  }`}
              >
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
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 lg:px-5 py-2 bg-[#0a84ff] text-white rounded-full hover:bg-[#0066cc] transition-all text-sm font-medium shadow-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/10 text-[#1d1d1f] dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 glass-nav border border-black/[0.06] dark:border-white/[0.08] rounded-3xl p-2 shadow-xl flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-medium py-2.5 px-4 rounded-2xl text-sm transition-colors ${isActiveLink(item.id)
                    ? 'bg-[#0a84ff]/10 text-[#0a84ff]'
                    : 'text-[#3a3a3c] dark:text-[#c7c7cc]'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left font-medium py-2.5 px-4 rounded-2xl text-sm ${isActiveLink('gallery') ? 'bg-[#0a84ff]/10 text-[#0a84ff]' : 'text-[#3a3a3c] dark:text-[#c7c7cc]'
                }`}
            >
              Gallery
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left font-medium py-2.5 px-4 rounded-2xl text-sm ${location.pathname === '/blog' ? 'bg-[#0a84ff]/10 text-[#0a84ff]' : 'text-[#3a3a3c] dark:text-[#c7c7cc]'
                }`}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left font-medium py-2.5 px-4 rounded-2xl text-sm bg-[#0a84ff] text-white mt-1"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
