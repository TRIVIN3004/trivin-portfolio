import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';
import { Brain, Database, Globe } from 'lucide-react';

const skillCategories = [
  {
    category: "AI, ML & Computer Vision",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Python", level: 92 },
      { name: "AI/ML (Deep Learning)", level: 88 },
      { name: "OpenCV & Computer Vision", level: 85 },
      { name: "NLP & LLM Prompting", level: 82 },
      { name: "MediaPipe & Gesture AI", level: 80 },
    ]
  },
  {
    category: "Full Stack & Web Development",
    icon: Globe,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "React.js & Vite", level: 85 },
      { name: "Node.js & Express", level: 80 },
      { name: "Tailwind CSS & CSS3", level: 90 },
      { name: "REST APIs & WebSockets", level: 82 },
      { name: "HTML5 / JavaScript (ES6+)", level: 90 },
    ]
  },
  {
    category: "Cloud, Databases & Enterprise",
    icon: Database,
    color: "from-indigo-500 to-cyan-500",
    skills: [
      { name: "SAP BTP (Cloud Platform)", level: 80 },
      { name: "AWS Cloud Fundamentals", level: 78 },
      { name: "SQL & Relational DBs", level: 85 },
      { name: "MongoDB & NoSQL", level: 80 },
      { name: "Git, GitHub & CI/CD", level: 88 },
    ]
  }
];

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Skills</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={groupIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              >
                <Card3D maxTilt={6} depth={15} className="h-full">
                  <div className="glass p-5 sm:p-6 rounded-2xl md:rounded-3xl h-full flex flex-col justify-between relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-white/10">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr ${group.color} text-white flex items-center justify-center shadow-md shrink-0`}>
                        <Icon size={18} />
                      </div>
                      <h3 className={`text-sm sm:text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {group.category}
                      </h3>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-4 flex-grow">
                      {group.skills.map((skill, index) => (
                        <div key={index} className="w-full">
                          <div className="flex justify-between mb-1 text-xs font-semibold">
                            <span className={isDark ? 'text-gray-300' : 'text-slate-700'}>{skill.name}</span>
                            <span className="text-neonBlue font-mono">{skill.level}%</span>
                          </div>
                          <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.05 }}
                              className="bg-gradient-to-r from-neonBlue to-neonPurple h-2 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
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

export default Skills;
