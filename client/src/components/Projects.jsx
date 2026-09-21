import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';

const projectsList = [
  {
    title: "Scanner Fall Detection & Alert System for JK Tyres",
    featured: true,
    badge: "JK Tyre Industry Project",
    description: "Real-time industrial computer vision & safety alert system developed for JK Tyre & Industries Ltd to monitor equipment, detect scanner drop/fall incidents instantly, and trigger automated alerts.",
    tech: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "IoT Alerts"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "TBM Live Dashboard",
    featured: true,
    badge: "JK Tyre Industry Project",
    description: "Real-time industrial telemetry & analytics dashboard built for JK Tyre & Industries Ltd to monitor Tire Building Machine (TBM) operations, machine health, sensor metrics, and production output.",
    tech: ["React.js", "Node.js", "IoT Telemetry", "Real-Time Analytics", "Tailwind CSS"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "Smart Ticketing System",
    featured: true,
    badge: "JK Tyre Industry Project",
    description: "Automated IT service desk and issue resolution platform built for JK Tyre & Industries Ltd to streamline plant-wide IT incident reporting, workflow escalation, and status tracking.",
    tech: ["React.js", "Node.js", "Express", "REST APIs", "Workflow Automation"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "AI CloudGPT",
    description: "Cloud optimization assistant powered by advanced AI models. Helps manage and analyze cloud resources efficiently.",
    tech: ["Python", "OpenAI", "React", "AWS"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "Hologram AI Assistant",
    description: "A hologram-based AI interactive assistant designed for teaching environments with real-time speech recognition and 3D projection.",
    tech: ["AI", "Speech Recognition", "3D Projection", "Python"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "Smart No Dues Approval",
    description: "Automated multi-role clearance workflow system designed to eliminate paperwork in college clearance processes.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "Facial Deepfake Detection (CNN-LSTM)",
    description: "Detects manipulated facial videos using a hybrid CNN-LSTM deep learning architecture with temporal frame analysis.",
    tech: ["CNN", "LSTM", "Deep Learning", "Python", "PyTorch"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "Virtual Try-On AI",
    description: "An interactive computer vision application enabling users to virtually try on clothing using posture tracking and mesh warping.",
    tech: ["OpenCV", "Python", "MediaPipe"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "Trivi AI Bot (Voice Assistant)",
    description: "Conversational voice assistant capable of speech recognition, natural language understanding, and automated task execution.",
    tech: ["Python", "Speech-to-Text", "NLP", "LLM"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "AI Past Question Paper Analyzer",
    description: "Automated pattern recognition tool to analyze university question papers and predict high-probability exam questions.",
    tech: ["Python", "NLP", "Pattern Mining"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "RoadSense AI (Smart Road Safety)",
    description: "AI-powered hazard detection system that analyzes road conditions, obstacles, and driver attention metrics in real-time.",
    tech: ["Python", "OpenCV", "YOLO", "TensorFlow"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  },
  {
    title: "Library Management System",
    description: "Digital web management system developed under TCS iON applied industry projects for tracking book issues, student records, and catalogs.",
    tech: ["Node.js", "HTML5", "CSS3", "JavaScript", "SQL"],
    github: "https://github.com/TRIVIN3004",
    live: "#"
  }
];

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section id="projects" className="py-8 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Projects</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <Card3D maxTilt={6} depth={15} className="h-full">
                <div className="glass p-5 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl h-full flex flex-col justify-between group relative overflow-hidden transition-all">
                  <div>
                    {/* Badge if featured */}
                    {project.badge && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-3 bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 border border-neonBlue/40 text-neonBlue">
                        <Sparkles size={11} />
                        <span>{project.badge}</span>
                      </div>
                    )}

                    <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2.5 transition-colors ${
                      isDark ? 'text-white group-hover:text-neonBlue' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 text-[11px] font-medium rounded-md border ${
                            isDark
                              ? 'bg-white/5 text-neonBlue border-neonBlue/20'
                              : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex justify-between pt-3.5 border-t border-white/10 text-xs font-semibold">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-1.5 transition-colors ${
                          isDark ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Github size={15} /> Source Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-1 text-neonBlue hover:text-neonPurple transition-colors"
                      >
                        Details <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
