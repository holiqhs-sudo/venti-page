
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Globe } from 'lucide-react';

interface NavbarProps {
  t: {
    features: string;
    testimonials: string;
    pricing: string;
    login: string;
    signUp: string;
  };
  onLanguageChange: (lang: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ t, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    setCurrentLanguage(lang);
  };

  const navLinks = [
    { name: t.features, href: '#features' },
    { name: t.testimonials, href: '#testimonials' },
    { name: 'Partners', href: '#partners' }, // No translation provided for this
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, '#')}>
              <div className="bg-brand-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                Venti<span className="text-brand-500">.id</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  value={currentLanguage}
                  className={`appearance-none bg-transparent border rounded-full py-2 pl-4 pr-8 text-sm font-medium transition-colors hover:text-brand-500 ${
                    isScrolled ? 'border-slate-300 text-slate-600' : 'border-slate-400 text-slate-200'
                  }`}
                >
                  <option value="en" className="text-slate-800">EN</option>
                  <option value="id" className="text-slate-800">ID</option>
                </select>
                <Globe className={`w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`} />
              </div>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, '#pricing')}
                className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-500/30"
              >
                {t.signUp}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-slate-100 py-4 px-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 font-medium hover:text-brand-600 block"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-brand-600 text-white px-5 py-3 rounded-lg text-center font-semibold block"
              onClick={(e) => handleNavClick(e, '#pricing')}
            >
              {t.signUp}
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
             <label htmlFor="language-select-mobile" className="block text-sm font-medium text-slate-500 mb-2">Language</label>
             <div className="relative">
                <select
                  id="language-select-mobile"
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  value={currentLanguage}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-md py-2 px-3 text-slate-800"
                >
                  <option value="en">English</option>
                  <option value="id">Indonesian</option>
                </select>
                <Globe className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
              </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
