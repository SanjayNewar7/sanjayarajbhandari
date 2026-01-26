import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Determine if a navigation link should be active
  const isActiveLink = (sectionId: string) => {
    if (location.pathname === '/' && activeSection === sectionId) {
      return true;
    }
    if (location.pathname === '/gallery' && sectionId === 'gallery') {
      return true;
    }
    return false;
  };

  // Track scroll position to determine active section
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;
      
      const sections = ['home', 'experience', 'skills', 'portfolio', 'contact'];
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
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
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
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${headerScrolled ? 'bg-white/20 backdrop-blur-2xl bg-opacity-30 border-white/30 shadow-lg py-2' : 'bg-white border-gray-200 shadow-sm py-3'}`}>
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Sanjaya Rajbhandari
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`${isActiveLink('home') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors font-medium text-sm sm:text-base`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className={`${isActiveLink('experience') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors font-medium text-sm sm:text-base`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`${isActiveLink('skills') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors font-medium text-sm sm:text-base`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`${isActiveLink('portfolio') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors font-medium text-sm sm:text-base`}
            >
              Work
            </button>
            <Link 
              to="/gallery" 
              className={`${isActiveLink('gallery') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors font-medium text-sm sm:text-base`}
            >
              Gallery
            </Link>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all text-sm sm:text-base">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 flex flex-col gap-3 sm:gap-4 bg-${headerScrolled ? 'white/20' : 'white'}/95 rounded-lg p-3 sm:p-4 shadow-lg`}>
            <button 
              onClick={() => scrollToSection('home')} 
              className={`${isActiveLink('home') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors text-left font-medium py-2 sm:py-3 text-sm sm:text-base`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className={`${isActiveLink('experience') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors text-left font-medium py-2 sm:py-3 text-sm sm:text-base`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`${isActiveLink('skills') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors text-left font-medium py-2 sm:py-3 text-sm sm:text-base`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`${isActiveLink('portfolio') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors text-left font-medium py-2 sm:py-3 text-sm sm:text-base`}
            >
              Work
            </button>
            <Link 
              to="/gallery" 
              className={`${isActiveLink('gallery') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors text-left font-medium py-2 sm:py-3 text-sm sm:text-base`}
            >
              Gallery
            </Link>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium py-2 sm:py-3 text-sm sm:text-base">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}