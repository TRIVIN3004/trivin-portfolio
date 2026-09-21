import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Sparkles, Cpu, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';
import profileImg from '../../../public/img/profile.png';
import resumePdf from '../../../public/resume.pdf';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section id="home" className="min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-20 pb-8 md:pt-24 md:pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Pill Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 backdrop-blur-md border ${
              isDark 
                ? 'bg-white/5 border-neonBlue/30 text-neonBlue'
                : 'bg-indigo-50 border-indigo-200 text-indigo-600 shadow-sm'
            }`}
          >
            <Sparkles size={13} className="text-neonBlue" />
            <span>AI & Machine Learning Engineer</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Hi, I'm{' '}
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-indigo-400 to-neonPurple">
              Trivin S
            </span>
          </h1>

          <div className="h-10 sm:h-12 mb-4 flex items-center justify-center md:justify-start">
            <span className={`text-lg sm:text-2xl md:text-3xl font-bold ${isDark ? 'text-neonBlue' : 'text-indigo-600'}`}>
              <Typewriter
                words={['AI & ML Engineer', 'Computer Vision Developer', 'Hackathon Winner', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </div>

          <p className={`mb-8 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
            Passionate AI and Data Science engineer specializing in Machine Learning, Computer Vision, industrial automation, and scalable full-stack applications.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 w-full sm:w-auto max-w-sm sm:max-w-none">
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer text-center px-6 py-3.5 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md"
            >
              Explore Projects
            </Link>
            <a 
              href={resumePdf} 
              download="Trivin_S_Resume.pdf" 
              className={`text-center px-6 py-3.5 rounded-full text-sm font-semibold border transition-all active:scale-95 ${
                isDark
                  ? 'border-neonPurple text-white hover:bg-neonPurple/20'
                  : 'border-indigo-500 text-indigo-600 hover:bg-indigo-50 shadow-sm'
              }`}
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3.5">
            <a 
              href="https://github.com/TRIVIN3004" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isDark 
                  ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10' 
                  : 'bg-white text-slate-700 hover:text-indigo-600 shadow-sm border border-slate-200'
              }`}
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/trivin-s-a88944292" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isDark 
                  ? 'bg-white/5 text-gray-300 hover:text-neonBlue hover:bg-white/10' 
                  : 'bg-white text-slate-700 hover:text-sky-600 shadow-sm border border-slate-200'
              }`}
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:trivintrivin2005@gmail.com" 
              aria-label="Email"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isDark 
                  ? 'bg-white/5 text-gray-300 hover:text-neonPurple hover:bg-white/10' 
                  : 'bg-white text-slate-700 hover:text-indigo-600 shadow-sm border border-slate-200'
              }`}
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex flex-col items-center justify-center relative"
        >
          <div className="relative flex items-center justify-center">
            {/* Avatar Circle with gradient ring */}
            <Card3D maxTilt={10} depth={20} className="flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-neonBlue via-indigo-500 to-neonPurple shadow-xl">
                <div className={`w-full h-full rounded-full overflow-hidden border-4 ${isDark ? 'border-darkBg' : 'border-white'}`}>
                  <img 
                    src={profileImg} 
                    alt="Trivin S" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x400/1a1a2e/45f3ff?text=TS";
                    }}
                  />
                </div>
              </div>
            </Card3D>
          </div>

          {/* Mobile-Friendly Feature Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-xs">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${
              isDark ? 'bg-white/5 border-neonBlue/30 text-neonBlue' : 'bg-white border-sky-200 text-sky-700 shadow-sm'
            }`}>
              <Cpu size={13} />
              <span>AI & Computer Vision</span>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${
              isDark ? 'bg-white/5 border-neonPurple/30 text-neonPurple' : 'bg-white border-purple-200 text-purple-700 shadow-sm'
            }`}>
              <Layers size={13} />
              <span>JK Tyre & AI R&D</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
