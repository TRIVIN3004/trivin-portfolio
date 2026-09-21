import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';

const stats = [
  { label: "Internships & Training", value: "4+", icon: Briefcase, color: "text-neonBlue" },
  { label: "Projects Built", value: "12+", icon: Code, color: "text-neonPurple" },
  { label: "Academic CGPA", value: "8.56", icon: GraduationCap, color: "text-emerald-400" },
  { label: "Certifications", value: "10+", icon: Award, color: "text-amber-400" },
];

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className="py-8 md:py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Me</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        {/* Card */}
        <Card3D maxTilt={6} depth={15} className="w-full">
          <div className="glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className={`text-sm sm:text-base md:text-lg leading-relaxed font-light mb-6 md:mb-8 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                <strong className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>AI & Data Science student</strong> passionate about engineering real-world intelligent systems, participating in high-impact hackathons, and driving innovation. 
                I have gained hands-on industry experience at <strong className={isDark ? 'text-neonBlue' : 'text-indigo-600'}>JK Tyre & Industries Ltd</strong> building computer vision alert mechanisms and real-time telemetry dashboards, alongside global exposure at the <strong className={isDark ? 'text-neonPurple' : 'text-purple-600'}>USIM Malaysia International Bootcamp</strong>.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`p-3.5 sm:p-4 rounded-xl md:rounded-2xl flex flex-col items-center text-center transition-all ${
                        isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-200 shadow-sm'
                      }`}
                    >
                      <Icon size={20} className={`${stat.color} mb-1.5 sm:mb-2`} />
                      <span className={`text-xl sm:text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {stat.value}
                      </span>
                      <span className={`text-[11px] sm:text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
};

export default About;
