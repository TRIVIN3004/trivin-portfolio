import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-neonBlue">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle bg glow for the card */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-neonBlue/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neonPurple/20 rounded-full blur-3xl"></div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light relative z-10">
            <strong className="text-white font-medium">AI & Data Science student</strong> passionate about building real-world AI solutions, participating in hackathons, and driving innovation. 
            I specialize in <span className="text-neonBlue">Machine Learning</span>, <span className="text-neonPurple">Deep Learning</span>, and Full-Stack Development.
            My goal is to continuously learn and engineer applications that solve impactful problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
