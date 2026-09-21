import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldCheck, Globe2, Award, Eye, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';

const certifications = [
  { 
    name: "SAP BTP (Business Technology Platform)", 
    org: "SAP",
    duration: "2026",
    description: "Enterprise cloud architecture certification covering SAP Business Technology Platform (BTP), integration suite, extension services, and enterprise cloud applications.",
    file: "SAP BTP.png",
    isImage: true,
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
  },
  { 
    name: "TCS iON Industry Project", 
    org: "Tata Consultancy Services (TCS iON)",
    duration: "Mar 2026 – May 2026",
    description: "Developed a Basic Library Management System under Applied Industry Projects, gaining practical software engineering and database execution experience.",
    file: "Tcs_ion.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
  },
  { 
    name: "AWS Cloud Practitioner Essentials", 
    org: "Amazon Web Services",
    duration: "2023",
    description: "Comprehensive foundational understanding of AWS Cloud infrastructure, compute, storage, databases, security, and cloud architecture principles.",
    file: "aws-cloud-practitioner.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  { 
    name: "Infosys Springboard", 
    org: "Infosys",
    duration: "20+ Courses",
    description: "Completed full-track foundational software engineering, algorithm design, data structures, and industry standard programming methodologies.",
    file: "infosys-springboard.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
  },
  { 
    name: "Intel AI/ML Training", 
    org: "Intel",
    duration: "2023",
    description: "Hands-on training in Artificial Intelligence and Machine Learning fundamentals, deep learning model building, and edge inference.",
    file: "intel-ai-ml.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Intel_logo_%282020%2C_light_blue%29.svg"
  },
  { 
    name: "Nasscom Digital 101", 
    org: "Nasscom",
    duration: "2023",
    description: "Foundational training in digital technologies, data analytics, cloud transformation, and emerging IT industry standards.",
    file: "nasscom-digital.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/2/23/NASSCOM_logo.svg"
  },
  { 
    name: "LinkedIn Digital Networking", 
    org: "LinkedIn",
    duration: "2023",
    description: "Strategies and practices for professional networking, personal branding, technical leadership, and career development.",
    file: "linkedin-digital.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  },
  { 
    name: "CyberT20 Series", 
    org: "Cyber Security",
    duration: "2023",
    description: "Participated in cybersecurity defense training, threat vulnerability identification, and secure development practices.",
    file: "cybert20.pdf",
    icon: ShieldCheck
  },
  { 
    name: "Space Science & Technology", 
    org: "ISRO",
    duration: "2023",
    description: "National space science awareness program covering space exploration fundamentals, satellite communication, and remote sensing.",
    file: "isro.pdf",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg"
  },
  { 
    name: "International Bootcamp", 
    org: "USIM Malaysia",
    duration: "2023",
    description: "International collaborative program focused on AI, ML, IoT, Power BI, and cross-cultural technological innovation.",
    file: "malaysia.pdf",
    icon: Globe2 
  }
];

const Certifications = () => {
  const { isDark } = useTheme();
  const [previewCert, setPreviewCert] = useState(null);

  return (
    <section id="certifications" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Credentials</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const certUrl = encodeURI(`/certificates/${cert.file}`);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <Card3D maxTilt={6} depth={15} className="h-full">
                  <div className="glass p-5 sm:p-6 rounded-2xl md:rounded-3xl h-full flex flex-col justify-between relative group overflow-hidden transition-all">
                    <div>
                      {/* Top Row: Title + Org Logo */}
                      <div className="flex justify-between items-start mb-3.5">
                        <div className="flex-1 pr-2">
                          <h3 className={`text-sm sm:text-base font-bold mb-1 transition-colors ${
                            isDark ? 'text-white group-hover:text-neonBlue' : 'text-slate-900 group-hover:text-indigo-600'
                          }`}>
                            {cert.name}
                          </h3>
                          <p className={`text-xs font-semibold ${isDark ? 'text-neonPurple' : 'text-purple-600'}`}>
                            {cert.org}
                          </p>
                          <p className={`text-[10px] sm:text-[11px] font-mono mt-0.5 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                            {cert.duration}
                          </p>
                        </div>

                        {/* Logo Container */}
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-xl flex items-center justify-center p-2 ${
                          isDark ? 'bg-white/10' : 'bg-slate-100 shadow-sm'
                        }`}>
                          {cert.logoUrl ? (
                            <img 
                              src={cert.logoUrl} 
                              alt={`${cert.org} logo`} 
                              className={`w-full h-full object-contain ${
                                isDark ? 'brightness-0 invert opacity-85' : 'opacity-90'
                              }`}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div className={`fallback-icon w-full h-full items-center justify-center ${cert.logoUrl ? "hidden" : "flex"}`}>
                            {Icon ? <Icon className="w-full h-full text-neonBlue" /> : <Award className="w-full h-full text-neonBlue" />}
                          </div>
                        </div>
                      </div>
                      
                      <p className={`text-xs leading-relaxed mb-5 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                        {cert.description}
                      </p>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-auto">
                      {cert.isImage && (
                        <button
                          onClick={() => setPreviewCert(cert)}
                          className={`inline-flex items-center justify-center gap-1 text-xs font-semibold px-3 py-2 rounded-xl transition-all ${
                            isDark
                              ? 'bg-neonBlue/10 border border-neonBlue/30 text-neonBlue hover:bg-neonBlue/20'
                              : 'bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                          }`}
                        >
                          <Eye size={13} /> Preview
                        </button>
                      )}

                      <a 
                        href={certUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold transition-all px-3 py-2 rounded-xl border ${
                          isDark
                            ? 'bg-white/5 border-white/10 text-white hover:bg-neonBlue/15 hover:border-neonBlue/50 hover:text-neonBlue'
                            : 'bg-white border-slate-200 text-slate-800 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 shadow-sm'
                        }`}
                      >
                        <span>View Certificate</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile-Friendly Certificate Preview Modal */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-2xl w-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl ${
                isDark ? 'bg-[#12141c] border border-white/20' : 'bg-white border border-slate-300'
              } shadow-2xl`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="pr-4">
                  <h3 className={`text-sm sm:text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{previewCert.name}</h3>
                  <p className="text-xs text-neonBlue">{previewCert.org}</p>
                </div>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 max-h-[60vh] flex items-center justify-center">
                <img
                  src={encodeURI(`/certificates/${previewCert.file}`)}
                  alt={previewCert.name}
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="mt-3 flex justify-end">
                <a
                  href={encodeURI(`/certificates/${previewCert.file}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple text-white text-xs font-bold"
                >
                  Open in New Tab <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
