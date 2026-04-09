import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  { title: "Hackathon Win", text: "Second prize – JIT Data Science Club Hackathon" },
  { title: "Project Expo", text: "Consolation prize – Project Expo, MVIT Pondicherry" },
  { title: "Paper Presentation", text: "Third Prize – National Level Paper Presentation, JIT" },
  { title: "Paper Presentation", text: "First Prize – Paper Presentation, Tagore Engineering College" },
  { title: "Award for Co-Curricular", text: "Award for Co-Curricular Activities at JIT" },
  { title: "Internship & Training", text: "Intel AI/ML training & Lunar A Quest Tech Internship" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & <span className="text-neonPurple">Achievements</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-10">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 md:-left-4 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-darkBg border-2 border-neonBlue flex items-center justify-center text-neonBlue">
                <Trophy size={14} />
              </div>
              
              <div className="glass p-5 rounded-xl hover:shadow-[0_0_15px_rgba(69,243,255,0.3)] transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
