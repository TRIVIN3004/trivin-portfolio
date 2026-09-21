import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';

const achievements = [
  { 
    title: "Hackathon 2nd Prize Winner", 
    text: "Awarded Second Prize in JIT Data Science Club 24-Hour Hackathon for AI innovation.",
    icon: Trophy,
    color: "text-amber-400"
  },
  { 
    title: "1st Prize – Technical Paper Presentation", 
    text: "Won 1st Prize for research paper presentation at Tagore Engineering College.",
    icon: Medal,
    color: "text-neonBlue"
  },
  { 
    title: "3rd Prize – National Level Paper Presentation", 
    text: "Secured 3rd Prize at National Level Technical Symposium at JIT.",
    icon: Award,
    color: "text-neonPurple"
  },
  { 
    title: "Project Expo Consolation Award", 
    text: "Received Consolation Prize at Inter-College Project Expo, MVIT Pondicherry.",
    icon: Trophy,
    color: "text-cyan-400"
  },
  { 
    title: "Special Award for Co-Curricular Excellence", 
    text: "Honored with the Co-Curricular Excellence Award at Jeppiaar Institute of Technology.",
    icon: Award,
    color: "text-emerald-400"
  },
  { 
    title: "International Bootcamp Recognition", 
    text: "Represented university at USIM Malaysia International AI & IoT Bootcamp.",
    icon: Globe,
    color: "text-pink-400"
  }
];

const Achievements = () => {
  const { isDark } = useTheme();

  return (
    <section id="achievements" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card3D maxTilt={10} depth={20} className="h-full">
                  <div className="glass p-6 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden group">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                          isDark ? 'bg-white/10' : 'bg-slate-100'
                        } ${item.color} shadow-sm group-hover:scale-110 transition-transform`}>
                          <Icon size={20} />
                        </div>
                        <h3 className={`text-base font-bold ${
                          isDark ? 'text-white group-hover:text-neonBlue' : 'text-slate-900 group-hover:text-indigo-600'
                        } transition-colors`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
