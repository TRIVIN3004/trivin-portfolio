import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? isDark
            ? 'bg-[#0B0C10]/90 backdrop-blur-xl border-b border-white/10 shadow-lg py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-md py-2.5 sm:py-3'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-xl sm:text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple"
            >
              TRIVIN S.
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isDark
                    ? 'text-gray-300 hover:text-neonBlue hover:bg-white/5'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <div className="pl-3 border-l border-slate-700/30">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`inline-flex items-center justify-center p-2 rounded-xl focus:outline-none transition-colors ${
                isDark
                  ? 'text-gray-300 hover:text-white bg-white/5'
                  : 'text-slate-700 hover:text-slate-900 bg-slate-100'
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`lg:hidden border-t px-4 pt-3 pb-5 space-y-1 shadow-2xl transition-all ${
          isDark ? 'bg-[#0B0C10]/95 border-white/10' : 'bg-white/95 border-slate-200'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isDark
                  ? 'text-gray-200 hover:text-neonBlue hover:bg-white/10'
                  : 'text-slate-800 hover:text-indigo-600 hover:bg-slate-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
