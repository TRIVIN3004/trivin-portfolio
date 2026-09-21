import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';

const educationList = [
  {
    title: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science",
    institution: "Jeppiaar Institute of Technology, Sriperumbudur, Chennai",
    duration: "2023 – 2027",
    scoreLabel: "CGPA",
    scoreValue: "8.56",
    icon: <GraduationCap size={18} className="md:w-5 md:h-5" />,
    color: "from-neonBlue to-neonPurple",
    shadow: "shadow-md",
    points: [
      "Specialized in Artificial Intelligence, Machine Learning, Deep Learning, and Data Science",
      "Actively participated in hackathons, project expos, and national-level paper presentations",
      "Built industrial AI & Computer Vision projects including JK Tyre safety scanner & telemetry dashboards"
    ]
  },
  {
    title: "Higher Secondary (12th Grade)",
    institution: "Mary Immaculate Heart Matric Higher Secondary School",
    duration: "Completed",
    scoreLabel: "Score",
    scoreValue: "78%",
    icon: <School size={18} className="md:w-5 md:h-5" />,
    color: "from-[#b026ff] to-[#ff3366]",
    shadow: "shadow-md",
    points: [
      "Completed higher secondary education focusing on Mathematics and Science stream",
      "Developed strong analytical problem-solving and algorithmic thinking foundations"
    ]
  },
  {
    title: "Secondary (10th Grade)",
    institution: "Mary Immaculate Heart Matric Higher Secondary School",
    duration: "Completed",
    scoreLabel: "Result",
    scoreValue: "All Pass",
    icon: <School size={18} className="md:w-5 md:h-5" />,
    color: "from-gray-400 to-gray-600",
    shadow: "shadow-md",
    points: [
      "Completed foundational school education with distinction in academic performance",
      "Active participant in science exhibitions and co-curricular activities"
    ]
  }
];

const Education = () => {
  const { isDark } = useTheme();

  return (
    <section id="education" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8 w-full"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Education</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* Responsive Timeline */}
        <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neonPurple before:via-neonBlue before:to-transparent w-full">
          {educationList.map((edu, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative flex items-start md:items-center md:justify-between md:odd:flex-row-reverse group">
                {/* Timeline Icon Node */}
                <div className={`absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-4 md:top-auto flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 ${
                  isDark ? 'border-darkBg' : 'border-slate-100'
                } bg-gradient-to-br ${edu.color} text-white ${edu.shadow} z-10 transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                  {edu.icon}
                </div>
                
                {/* Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="ml-10 sm:ml-12 md:ml-0 w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)]"
                >
                  <Card3D maxTilt={6} depth={15}>
                    <div className="glass p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex justify-between items-start flex-col sm:flex-row mb-2">
                          <h3 className={`text-base md:text-lg font-bold ${isDark ? 'text-white group-hover:text-neonPurple' : 'text-slate-900 group-hover:text-indigo-600'} transition-colors leading-tight mb-2 sm:mb-0 sm:pr-4`}>
                            {edu.title}
                          </h3>
                          <div className={`flex flex-row sm:flex-col items-center sm:items-end gap-1 sm:gap-0 shrink-0 px-2.5 py-1 rounded-lg ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                            <span className={`text-[10px] uppercase tracking-widest font-semibold ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>{edu.scoreLabel}:</span>
                            <span className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">{edu.scoreValue}</span>
                          </div>
                        </div>
                        
                        <h4 className={`text-xs md:text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>{edu.institution}</h4>
                        <p className={`text-[11px] md:text-xs font-mono inline-block px-2 py-0.5 rounded mb-3 ${
                          isDark ? 'text-neonPurple bg-white/5' : 'text-purple-700 bg-purple-50'
                        }`}>
                          {edu.duration}
                        </p>
                        
                        <ul className="space-y-2">
                          {edu.points.map((point, i) => (
                            <li key={i} className={`text-xs md:text-sm flex items-start ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                              <span className="text-neonBlue mr-1.5 mt-0.5 font-bold shrink-0">▹</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
