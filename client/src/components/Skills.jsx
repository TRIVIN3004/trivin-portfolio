import { motion } from 'framer-motion';

const skills = [
  { name: "Python", level: 90 },
  { name: "AI/ML (Deep Learning)", level: 85 },
  { name: "React & Next.js", level: 80 },
  { name: "FastAPI & Node.js", level: 75 },
  { name: "Cloud (AWS/Azure)", level: 70 },
  { name: "SQL & Databases", level: 85 },
  { name: "OpenCV & Computer Vision", level: 80 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core <span className="text-neonBlue">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-white">{skill.name}</span>
                <span className="text-sm font-medium text-neonBlue">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-gradient-to-r from-neonBlue to-neonPurple h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
