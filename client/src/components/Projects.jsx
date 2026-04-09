import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsList = [
  {
    title: "AI CloudGPT",
    description: "Cloud optimization assistant powered by advanced AI models. Helps manage and analyze cloud resources.",
    tech: ["Python", "OpenAI", "React", "AWS"],
    github: "#",
    live: "#"
  },
  {
    title: "Hologram AI Assistant",
    description: "A hologram-based AI interactive assistant designed for teaching environments with speech recognition.",
    tech: ["AI", "Speech Rec", "3D Projection"],
    github: "#",
    live: "#"
  },
  {
    title: "Smart No Dues Approval",
    description: "Automated workflow system designed to simplify the college clearance and no-dues process.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Deepfake Detection",
    description: "Detects manipulated facial videos using a hybrid CNN-LSTM deep learning architecture.",
    tech: ["CNN", "LSTM", "Deep Learning", "Python"],
    github: "#",
    live: "#"
  },
  {
    title: "Virtual Try-On AI",
    description: "An interactive application enabling users to virtually try on clothing using computer vision.",
    tech: ["OpenCV", "Python", "MediaPipe"],
    github: "#",
    live: "#"
  },
  {
    title: "Trivi AI Bot (Voice Assistant)",
    description: "Built a voice-enabled chatbot that responds to user queries. Supports speech recognition and AI-based responses.",
    tech: ["Python", "Speech Recognition", "NLP", "LLM"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Past Question Paper Analyzer",
    description: "Created a system to analyze past exam papers and predict important questions. Uses pattern analysis and NLP techniques.",
    tech: ["Python", "NLP", "Machine Learning"],
    github: "#",
    live: "#"
  },
  {
    title: "Visual Search in Multispectral Satellite Imagery",
    description: "Developed a system to search and analyze satellite images using AI. Focused on feature detection in multispectral data.",
    tech: ["Python", "Computer Vision", "Neural Networks"],
    github: "#",
    live: "#"
  },
  {
    title: "Virtual Mouse using Hand Gestures",
    description: "Built a system to control the computer mouse using hand gestures. Uses webcam input and real-time gesture detection.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "#",
    live: "#"
  },
  {
    title: "RoadSense AI (Smart Road Safety System)",
    description: "Enhancing road safety using real-time AI-powered detection and alerts. Monitors road conditions, detects obstacles, and analyzes driver behavior.",
    tech: ["Python", "OpenCV", "AI/ML", "Computer Vision"],
    github: "#",
    live: "#"
  },
  {
    title: "Library Management System (Web-Based)",
    description: "Simplifying library operations with an efficient digital management system. Manages books, students, and issue/return operations.",
    tech: ["Python / Node.js", "HTML", "CSS", "JavaScript", "MongoDB/MySQL"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-neonPurple">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col group"
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-neonBlue transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 text-neonBlue rounded-full border border-neonBlue/30">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mt-auto pt-4 border-t border-white/10">
                <a href={project.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Github size={18} /> Code
                </a>
                <a href={project.live} className="flex items-center gap-2 text-sm text-neonBlue hover:text-neonPurple transition-colors">
                  Demo <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
