import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  { name: "AWS Cloud Practitioner Essentials", file: "aws-cloud-practitioner.pdf" },
  { name: "Infosys Springboard (20+ courses)", file: "infosys-springboard.pdf" },
  { name: "Intel AI/ML Training", file: "intel-ai-ml.pdf" },
  { name: "Nasscom Digital 101", file: "nasscom-digital.pdf" },
  { name: "LinkedIn Digital Networking", file: "linkedin-digital.pdf" },
  { name: "CyberT20 Series", file: "cybert20.pdf" },
  { name: "Space Science and Technology awarness training(ISRO)", file: "isro.pdf" },
  { name: "International bootcamp(malaysia)", file: "malaysia.pdf" }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-neonBlue group-hover:text-neonPurple group-hover:bg-white/10 transition-colors">
                <Award size={28} />
              </div>
              <h3 className="text-lg font-medium text-white mb-4">{cert.name}</h3>
              
              <a href={`/certificates/${cert.file}`} target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-2 text-sm text-gray-400 hover:text-neonBlue transition-colors px-4 py-2 border border-gray-600 rounded-full hover:border-neonBlue group-hover:shadow-[0_0_10px_rgba(69,243,255,0.2)]">
                View Certificate <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
