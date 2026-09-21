import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { animateScroll as scroll } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

function PortfolioContent() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    // Quick, clean initial loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  if (loading) {
    return (
      <div className={`fixed inset-0 ${isDark ? 'bg-[#0B0C10]' : 'bg-[#F8FAFC]'} flex items-center justify-center z-50 transition-colors duration-300`}>
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-t-3 border-neonBlue animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-t-3 border-neonPurple animate-spin animation-delay-150"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen ${isDark ? 'bg-[#0B0C10] text-gray-200' : 'bg-[#F8FAFC] text-slate-800'} overflow-x-hidden transition-colors duration-300 selection:bg-neonBlue/30 selection:text-white`}>
      {/* Clean, Subtle, Non-distracting Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>

        {/* Soft static ambient glow orbs */}
        <div className={`ambient-glow w-[350px] md:w-[600px] h-[350px] md:h-[600px] -top-32 -left-32 ${isDark ? 'bg-cyan-500/10' : 'bg-sky-400/15'}`}></div>
        <div className={`ambient-glow w-[350px] md:w-[600px] h-[350px] md:h-[600px] top-[25%] -right-32 ${isDark ? 'bg-purple-600/10' : 'bg-indigo-400/15'}`}></div>
        <div className={`ambient-glow w-[350px] md:w-[600px] h-[350px] md:h-[600px] top-[60%] -left-32 ${isDark ? 'bg-cyan-500/10' : 'bg-sky-400/15'}`}></div>
        <div className={`ambient-glow w-[350px] md:w-[600px] h-[350px] md:h-[600px] -bottom-32 right-10 ${isDark ? 'bg-purple-600/10' : 'bg-purple-400/15'}`}></div>
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
        
        <footer className={`py-8 border-t ${isDark ? 'border-white/10 bg-black/20' : 'border-slate-200 bg-white/50'} text-center backdrop-blur-md`}>
          <p className={`${isDark ? 'text-gray-400' : 'text-slate-500'} text-xs sm:text-sm px-4`}>
            © {new Date().getFullYear()} Trivin S. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white shadow-lg z-40 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm"
        >
          <ArrowUp size={20} className="stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
