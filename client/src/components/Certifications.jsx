import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Globe2, Award } from 'lucide-react';

const certifications = [
  { 
    name: "TCS iON Industry Project", 
    org: "Tata Consultancy Services (TCS iON)",
    duration: "Mar 2026 – May 2026",
    description: "Developed a Basic Library Management System. Gained practical experience in software development and project execution under Applied Industry Projects.",
    file: "Tcs_ion.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
  },
  { 
    name: "AWS Cloud Practitioner Essentials", 
    org: "Amazon Web Services",
    duration: "2023",
    description: "Learned overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
    file: "aws-cloud-practitioner.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  { 
    name: "Infosys Springboard", 
    org: "Infosys",
    duration: "20+ Courses",
    description: "Completed comprehensive training on various foundational software engineering concepts.",
    file: "infosys-springboard.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
  },
  { 
    name: "Intel AI/ML Training", 
    org: "Intel",
    duration: "2023",
    description: "Hands-on training in Artificial Intelligence and Machine Learning fundamentals.",
    file: "intel-ai-ml.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Intel_logo_%282020%2C_light_blue%29.svg"
  },
  { 
    name: "Nasscom Digital 101", 
    org: "Nasscom",
    duration: "2023",
    description: "Foundational knowledge in digital technologies, data analytics, and emerging IT trends.",
    file: "nasscom-digital.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/NASSCOM_logo.svg"
  },
  { 
    name: "LinkedIn Digital Networking", 
    org: "LinkedIn",
    duration: "2023",
    description: "Best practices for professional networking, personal branding, and career growth.",
    file: "linkedin-digital.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  },
  { 
    name: "CyberT20 Series", 
    org: "Cyber Security",
    duration: "2023",
    description: "Participated in cybersecurity awareness and practical defense mechanisms training.",
    file: "cybert20.pdf",
    icon: ShieldCheck
  },
  { 
    name: "Space Science and Technology", 
    org: "ISRO",
    duration: "2023",
    description: "Awareness training program covering space science and exploration fundamentals.",
    file: "isro.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg"
  },
  { 
    name: "International Bootcamp", 
    org: "USIM Malaysia",
    duration: "2023",
    description: "International collaborative bootcamp focused on technology and cross-cultural exchange.",
    file: "malaysia.pdf",
    icon: Globe2 
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & <span className="text-neonBlue">Courses</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col relative group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(69,243,255,0.15)] border border-white/5 hover:border-neonBlue/30 overflow-hidden"
              >
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-neonBlue transition-colors">{cert.name}</h3>
                    <p className="text-sm font-medium text-neonPurple mb-1">{cert.org}</p>
                    <p className="text-xs text-gray-400">{cert.duration}</p>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center p-2 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    {cert.logoUrl ? (
                      <img 
                        src={cert.logoUrl} 
                        alt={`${cert.org} logo`} 
                        className="w-full h-full object-contain filter drop-shadow-md brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                        }}
                      />
                    ) : null}
                    {/* Fallback icon if image fails or logoUrl is missing */}
                    <div className={`fallback-icon w-full h-full items-center justify-center ${cert.logoUrl ? "hidden" : "flex"}`}>
                      {Icon ? <Icon className="w-full h-full text-neonBlue opacity-80 group-hover:opacity-100" /> : <Award className="w-full h-full text-neonBlue opacity-80 group-hover:opacity-100" />}
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 mb-6 flex-grow relative z-10 leading-relaxed">
                  {cert.description}
                </p>
                
                <a 
                  href={`/certificates/${cert.file}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-white transition-all px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-neonBlue/10 hover:border-neonBlue/50 hover:text-neonBlue w-full group/btn relative z-10"
                >
                  View Certificate 
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
