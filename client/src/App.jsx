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
import { animateScroll as scroll } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

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
      <div className="fixed inset-0 bg-[#0B0C10] flex items-center justify-center z-50">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-t-4 border-neonBlue animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-t-4 border-neonPurple animate-spin animation-delay-150"></div>
          <div className="absolute inset-4 rounded-full border-t-4 border-white animate-spin animation-delay-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0B0C10] text-gray-200 overflow-x-hidden">
      {/* Global simple and attractive ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle dot matrix grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        {/* Top-left soft cyan ambient glow */}
        <div className="ambient-glow w-[500px] h-[500px] -top-32 -left-32 bg-neonBlue/15 animate-float-slow"></div>

        {/* Top-right soft purple ambient glow */}
        <div className="ambient-glow w-[550px] h-[550px] top-[15%] -right-36 bg-neonPurple/15 animate-float-reverse"></div>

        {/* Mid-section subtle indigo glow */}
        <div className="ambient-glow w-[450px] h-[450px] top-[45%] -left-28 bg-[#7928ca]/12 animate-pulse-subtle"></div>

        {/* Lower-section cyan accent */}
        <div className="ambient-glow w-[600px] h-[600px] top-[70%] -right-32 bg-neonBlue/12 animate-float-slow"></div>

        {/* Bottom subtle violet ambient light */}
        <div className="ambient-glow w-[500px] h-[500px] -bottom-36 left-[20%] bg-neonPurple/15 animate-float-reverse"></div>
      </div>

      {/* Main Content */}
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
        
        <footer className="py-8 border-t border-white/10 text-center bg-black/20 backdrop-blur-sm">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trivin S. All rights reserved.
          </p>
        </footer>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white shadow-[0_0_15px_rgba(69,243,255,0.4)] z-40 hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
