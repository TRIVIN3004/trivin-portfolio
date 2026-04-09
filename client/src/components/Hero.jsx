import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../../../public/img/profile.png';
import resumePdf from '../../../public/resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background blobs are handled in CSS */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Trivin S</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 h-12">
            <span style={{ color: '#45f3ff', fontWeight: 'bold' }}>
              <Typewriter
                words={['AI Engineer', 'Hackathon Winner', 'Problem Solver', 'Data Science Student']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg text-lg">
            Passionate AI and Data Science student skilled in Machine Learning, Computer Vision, and Full Stack Development.
          </p>
          
          <div className="flex gap-4 mb-8">
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold hover:shadow-[0_0_15px_#45f3ff] transition-all duration-300">
              View Projects
            </Link>
            <a href={resumePdf} download="Trivin_S_Resume.pdf" className="px-6 py-3 rounded-full border border-neonPurple text-white font-semibold hover:bg-neonPurple/20 transition-all duration-300">
              Download Resume
            </a>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/TRIVIN3004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/trivin-s-a88944292" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#45f3ff] hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:trivintrivin2005@gmail.com" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-r from-neonBlue to-neonPurple animate-glow">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-darkBg">
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
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
