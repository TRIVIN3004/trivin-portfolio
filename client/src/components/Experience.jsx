import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Globe, Code } from 'lucide-react';

const experiences = [
  {
    type: "bootcamp",
    title: "International Bootcamp on AI, ML, IoT & Power BI",
    organization: "Universiti Sains Islam Malaysia (USIM), Malaysia",
    duration: "June 2025",
    icon: <Globe size={24} />,
    badge: "International Experience 🌍",
    points: [
      "Participated in an international-level bootcamp",
      "Gained exposure to global technologies in AI, ML, IoT, and Power BI",
      "Collaborated with international participants and experts",
      "Enhanced technical and communication skills"
    ]
  },
  {
    type: "internship",
    title: "Artificial Intelligence Engineer Intern",
    organization: "Lunar A Quest Technology",
    duration: "2025",
    icon: <Briefcase size={24} />,
    points: [
      "Worked on AI-based projects including virtual try-on systems",
      "Implemented image processing and deep learning models",
      "Developed real-time applications using Python and AI frameworks"
    ]
  },
  {
    type: "internship",
    title: "Python Programmer Intern",
    organization: "Cipherbyte Technologies",
    duration: "August 2024 (1 Month)",
    icon: <Code size={24} />,
    points: [
      "Developed Python-based applications and scripts",
      "Strengthened problem-solving and programming skills",
      "Worked on real-time coding tasks and mini projects"
    ]
  },
  {
    type: "internship",
    title: "Artificial Intelligence Intern",
    organization: "Corizo",
    duration: "August–September 2024 (2 Months)",
    icon: <Briefcase size={24} />,
    points: [
      "Learned and implemented AI/ML concepts in practical projects",
      "Worked on data analysis and machine learning models",
      "Gained hands-on experience in real-world AI applications"
    ]
  },
  {
    type: "training",
    title: "AI & ML Training Program",
    organization: "Intel",
    duration: "Completed",
    icon: <BookOpen size={24} />,
    points: [
      "Completed training on Artificial Intelligence and Machine Learning concepts",
      "Learned model development, optimization, and real-world applications"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internships & <span className="text-neonBlue">Training</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neonBlue before:via-neonPurple before:to-transparent">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isBootcamp = exp.type === 'bootcamp';
            
            return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline Icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg ${isBootcamp ? 'bg-neonPurple text-white shadow-[0_0_15px_#b026ff]' : 'bg-neonBlue text-white shadow-[0_0_10px_#45f3ff]'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110`}>
                  {exp.icon}
                </div>
                
                {/* Card content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:shadow-[0_0_20px_rgba(69,243,255,0.15)] transition-all duration-300 relative overflow-hidden"
                >
                  {isBootcamp && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-neonPurple to-[#ff3366] text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                      {exp.badge}
                    </div>
                  )}
                  {isBootcamp && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-neonPurple/20 rounded-full blur-2xl z-0"></div>
                  )}

                  <div className="relative z-10">
                    <h3 className={`text-xl font-bold mb-1 ${isBootcamp ? 'text-neonPurple' : 'text-white group-hover:text-neonBlue'} transition-colors`}>{exp.title}</h3>
                    <h4 className="text-md text-gray-300 font-medium mb-1">{exp.organization}</h4>
                    <p className="text-sm text-neonBlue mb-4 font-mono bg-white/5 inline-block px-2 py-0.5 rounded">{exp.duration}</p>
                    
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-neonPurple mr-2 mt-1">▹</span>
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
      </div>
    </section>
  );
};

export default Experience;
