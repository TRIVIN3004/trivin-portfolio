import { motion } from 'framer-motion';
import { Briefcase, Globe, Code, Cpu, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';
import seconyxLogo from '../../../public/img/seconyx.png';

const experiences = [
  {
    type: "job",
    title: "Associate Product Engineer",
    organization: "Seconyx Technologies",
    duration: "September 2026 – Present",
    icon: <Sparkles size={18} className="md:w-5 md:h-5" />,
    logo: seconyxLogo,
    badge: "Current Role 🚀",
    skills: ["Product Engineering", "Full-Stack Development", "System Architecture", "AI Integration", "React & Node.js", "REST APIs"],
    points: [
      "Architecting and delivering innovative software solutions, scalable web applications, and core product features.",
      "Collaborating on full-stack architecture, clean API design, and performant backend services.",
      "Integrating AI and intelligent automation workflows into enterprise product ecosystems.",
      "Driving product quality, agile development cycles, and continuous performance optimization."
    ]
  },
  {
    type: "internship",
    title: "IT Intern (IT Domain)",
    organization: "JK Tyre & Industries Ltd",
    duration: "July 2026 – August 2026 (2 Months)",
    icon: <Briefcase size={18} className="md:w-5 md:h-5" />,
    badge: "Industrial Internship 🏭",
    skills: ["Computer Vision", "Python", "Telemetry Dashboard", "IT Automation"],
    points: [
      "JK Tyre Scanner Fall Detection & Alert System: Developed an automated computer vision safety monitoring system to detect scanner drops and dispatch instantaneous alert triggers.",
      "TBM Live Dashboard: Engineered a real-time Tire Building Machine (TBM) operational dashboard for live telemetry, sensor monitoring, and production analytics.",
      "Smart Ticketing System: Created an automated IT service desk and issue ticketing platform to streamline plant-wide incident logging, tracking, and resolution workflows.",
      "Assisted in IT infrastructure maintenance, process digitization, and industrial automation reliability."
    ]
  },
  {
    type: "bootcamp",
    title: "International Bootcamp on AI, ML, IoT & Power BI",
    organization: "Universiti Sains Islam Malaysia (USIM), Malaysia",
    duration: "June 2025",
    icon: <Globe size={18} className="md:w-5 md:h-5" />,
    badge: "International 🌍",
    skills: ["AI/ML", "IoT Architecture", "Power BI", "Global R&D"],
    points: [
      "Selected for international technology bootcamp at Universiti Sains Islam Malaysia",
      "Gained comprehensive global exposure to advanced AI, Deep Learning, IoT architectures, and Power BI dashboards",
      "Collaborated with international researchers and engineering peers on cross-border technical challenges",
      "Enhanced global communication and technical leadership skills"
    ]
  },
  {
    type: "internship",
    title: "Artificial Intelligence Engineer Intern",
    organization: "Lunar A Quest Technology",
    duration: "2025",
    icon: <Cpu size={18} className="md:w-5 md:h-5" />,
    skills: ["Computer Vision", "MediaPipe", "OpenCV", "Deep Neural Networks"],
    points: [
      "Developed AI and computer vision modules including virtual try-on systems",
      "Implemented image processing pipelines and deep neural network models",
      "Built real-time inference applications using Python, OpenCV, and MediaPipe"
    ]
  },
  {
    type: "internship",
    title: "Python Programmer Intern",
    organization: "Cipherbyte Technologies",
    duration: "August 2024 (1 Month)",
    icon: <Code size={18} className="md:w-5 md:h-5" />,
    skills: ["Python", "Automation Scripts", "Software Design", "Data Structures"],
    points: [
      "Developed Python-based automation scripts and backend components",
      "Solved algorithmic problems and contributed to real-time coding tasks",
      "Strengthened software design patterns and modular codebase structuring"
    ]
  },
  {
    type: "internship",
    title: "Artificial Intelligence Intern",
    organization: "Corizo & Intel Inc.",
    duration: "August – September 2024 (2 Months)",
    icon: <Briefcase size={18} className="md:w-5 md:h-5" />,
    skills: ["Machine Learning", "Data Pipelines", "Predictive Modeling", "Intel AI Tools"],
    points: [
      "Hands-on training in machine learning model development and evaluation",
      "Engineered data pipelines, feature extraction, and predictive modeling workflows",
      "Gained practical exposure to real-world AI deployment practices"
    ]
  }
];

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Internships & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Experience</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neonBlue before:via-neonPurple before:to-transparent">
          {experiences.map((exp, index) => {
            return (
              <div key={index} className="relative flex items-start md:items-center md:justify-between md:odd:flex-row-reverse group">
                {/* Timeline Icon Node */}
                <div className={`absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-4 md:top-auto flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 ${
                  isDark ? 'border-darkBg' : 'border-slate-100'
                } ${
                  exp.type === 'job'
                    ? 'bg-gradient-to-tr from-neonBlue to-neonPurple text-white shadow-lg shadow-neonBlue/20'
                    : exp.type === 'bootcamp'
                    ? 'bg-neonPurple text-white shadow-md'
                    : 'bg-neonBlue text-white shadow-md'
                } z-10 transition-transform duration-300 group-hover:scale-110`}>
                  {exp.icon}
                </div>
                
                {/* Timeline Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="ml-10 sm:ml-12 md:ml-0 w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)]"
                >
                  <Card3D maxTilt={6} depth={15}>
                    <div className="glass p-5 md:p-6 rounded-2xl md:rounded-3xl transition-all relative overflow-hidden">
                      {/* Corner Badge */}
                      {exp.badge && (
                        <div className={`absolute top-0 right-0 text-white text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 md:py-1 rounded-bl-xl z-10 shadow-sm ${
                          exp.type === 'job'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                            : 'bg-gradient-to-r from-neonPurple to-[#ff3366]'
                        }`}>
                          {exp.badge}
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2 pr-16 md:pr-0">
                          {exp.logo && (
                            <div className="w-10 h-10 rounded-xl p-1 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                              <img src={exp.logo} alt={exp.organization} className="w-full h-full object-contain" />
                            </div>
                          )}
                          <div>
                            <h3 className={`text-base md:text-lg font-bold leading-tight transition-colors ${
                              exp.type === 'job'
                                ? isDark ? 'text-white group-hover:text-neonBlue' : 'text-slate-900 group-hover:text-cyan-600'
                                : exp.type === 'bootcamp'
                                ? 'text-neonPurple'
                                : isDark ? 'text-white group-hover:text-neonBlue' : 'text-slate-900 group-hover:text-indigo-600'
                            }`}>
                              {exp.title}
                            </h3>
                            <h4 className={`text-xs md:text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                              {exp.organization}
                            </h4>
                          </div>
                        </div>

                        <p className={`text-[11px] md:text-xs font-mono inline-block px-2 py-0.5 rounded mb-3 ${
                          isDark ? 'text-neonBlue bg-white/5' : 'text-sky-700 bg-sky-50'
                        }`}>
                          {exp.duration}
                        </p>
                        
                        <ul className="space-y-2 mb-3">
                          {exp.points.map((point, i) => (
                            <li key={i} className={`text-xs md:text-sm flex items-start ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                              <span className="text-neonPurple mr-1.5 mt-0.5 font-bold shrink-0">▹</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills / Tech Stack Chips */}
                        {exp.skills && exp.skills.length > 0 && (
                          <div className="pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className={`text-[10px] md:text-[11px] font-medium px-2 py-0.5 rounded-md transition-all ${
                                  isDark
                                    ? 'bg-neonBlue/10 text-cyan-300 border border-neonBlue/20'
                                    : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
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

export default Experience;
