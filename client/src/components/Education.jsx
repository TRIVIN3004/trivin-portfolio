import { motion } from 'framer-motion';
import { GraduationCap, School, FileText } from 'lucide-react';
import resumePdf from '../../../public/resume.pdf';

const educationList = [
  {
    title: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science",
    institution: "Jeppiaar Institute of Technology, Sriperumbudur, Chennai",
    duration: "2023 – 2027",
    scoreLabel: "CGPA",
    scoreValue: "8.56",
    icon: <GraduationCap size={24} />,
    color: "from-neonBlue to-neonPurple",
    shadow: "shadow-[0_0_15px_#45f3ff]",
    points: [
      "Specialized in Artificial Intelligence, Machine Learning, and Data Science",
      "Actively participated in hackathons, project expos, and technical events",
      "Built multiple AI-based real-world projects"
    ]
  },
  {
    title: "Higher Secondary (12th Grade)",
    institution: "Mary Immaculate Heart Matric Higher Secondary School",
    duration: "Completed",
    scoreLabel: "Score",
    scoreValue: "78%",
    icon: <School size={24} />,
    color: "from-[#b026ff] to-[#ff3366]",
    shadow: "shadow-[0_0_15px_#b026ff]",
    points: [
      "Completed higher secondary education with focus on science stream",
      "Developed strong analytical and problem-solving skills"
    ]
  },
  {
    title: "Secondary (10th Grade)",
    institution: "Mary Immaculate Heart Matric Higher Secondary School",
    duration: "Completed",
    scoreLabel: "Result",
    scoreValue: "All Pass",
    icon: <School size={24} />,
    color: "from-gray-400 to-gray-600",
    shadow: "shadow-[0_0_10px_#9ca3af]",
    points: [
      "Completed foundational education with good academic performance",
      "Built strong base in mathematics and logical reasoning"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-neonPurple">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neonPurple before:via-neonBlue before:to-transparent w-full">
          {educationList.map((edu, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline Icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-gradient-to-br ${edu.color} text-white ${edu.shadow} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110`}>
                  {edu.icon}
                </div>
                
                {/* Card content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:shadow-[0_0_20px_rgba(176,38,255,0.15)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start flex-col sm:flex-row mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-neonPurple transition-colors leading-tight mb-2 sm:mb-0 sm:pr-4">{edu.title}</h3>
                      <div className="flex flex-col items-start sm:items-end shrink-0">
                        <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{edu.scoreLabel}</span>
                        <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">{edu.scoreValue}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-md text-gray-300 font-medium mb-1">{edu.institution}</h4>
                    <p className="text-sm text-neonPurple mb-4 font-mono bg-white/5 inline-block px-2 py-0.5 rounded">{edu.duration}</p>
                    
                    <ul className="space-y-2">
                      {edu.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-neonBlue mr-2 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-16"
        >
          <a 
            href={resumePdf} 
            download="Trivin_S_Resume.pdf" 
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold hover:shadow-[0_0_20px_#45f3ff] transition-all duration-300"
          >
            <FileText size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
