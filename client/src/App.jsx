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
    <div className="relative">
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
      
      <footer className="py-8 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Trivin S. All rights reserved.
        </p>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white shadow-[0_0_15px_rgba(69,243,255,0.5)] z-40 hover:scale-110 transition-transform duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
