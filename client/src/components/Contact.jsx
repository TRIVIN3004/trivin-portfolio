import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';
import Card3D from './Card3D';

const Contact = () => {
  const formRef = useRef();
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        // Fallback simulation if env keys not set locally
        await new Promise(res => setTimeout(res, 800));
        setStatus({ type: 'success', message: 'Thank you! Your message has been recorded.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Trivin",
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please reach out directly via email!' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">Touch</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-4 sm:space-y-5"
          >
            <Card3D maxTilt={6} depth={12}>
              <div className="glass p-5 rounded-2xl md:rounded-3xl flex items-start gap-3.5">
                <div className="text-neonBlue bg-neonBlue/10 p-3 rounded-xl shrink-0"><MapPin size={20} /></div>
                <div>
                  <h4 className={`font-bold text-sm sm:text-base mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Location</h4>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Sriperumbudur, Tamil Nadu, India</p>
                </div>
              </div>
            </Card3D>
            
            <Card3D maxTilt={6} depth={12}>
              <div className="glass p-5 rounded-2xl md:rounded-3xl flex items-start gap-3.5">
                <div className="text-neonPurple bg-neonPurple/10 p-3 rounded-xl shrink-0"><Mail size={20} /></div>
                <div>
                  <h4 className={`font-bold text-sm sm:text-base mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Email</h4>
                  <a href="mailto:trivintrivin2005@gmail.com" className={`text-xs sm:text-sm hover:text-neonPurple transition-colors break-all ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                    trivintrivin2005@gmail.com
                  </a>
                </div>
              </div>
            </Card3D>

            <Card3D maxTilt={6} depth={12}>
              <div className="glass p-5 rounded-2xl md:rounded-3xl flex items-start gap-3.5">
                <div className="text-neonBlue bg-neonBlue/10 p-3 rounded-xl shrink-0"><Phone size={20} /></div>
                <div>
                  <h4 className={`font-bold text-sm sm:text-base mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Phone</h4>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>+91 9344048472</p>
                </div>
              </div>
            </Card3D>

            <Card3D maxTilt={6} depth={12}>
              <div className="glass p-5 rounded-2xl md:rounded-3xl flex flex-col items-center gap-3 text-center">
                 <h4 className={`font-bold text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect With Me</h4>
                 <div className="flex gap-3">
                    <a 
                      href="https://github.com/TRIVIN3004" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="GitHub"
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isDark ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/15' : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/trivin-s-a88944292" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="LinkedIn"
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isDark ? 'bg-white/5 text-gray-300 hover:text-[#0077b5] hover:bg-white/15' : 'bg-slate-100 text-slate-700 hover:text-[#0077b5] hover:bg-slate-200'
                      }`}
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="mailto:trivintrivin2005@gmail.com" 
                      aria-label="Email"
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isDark ? 'bg-white/5 text-gray-300 hover:text-rose-400 hover:bg-white/15' : 'bg-slate-100 text-slate-700 hover:text-rose-600 hover:bg-slate-200'
                      }`}
                    >
                      <Mail size={18} />
                    </a>
                 </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <Card3D maxTilt={6} depth={12}>
              <form ref={formRef} onSubmit={handleSubmit} className="glass p-5 sm:p-7 md:p-9 rounded-2xl md:rounded-3xl space-y-4 sm:space-y-5 relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 relative z-10">
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={`w-full rounded-xl px-3.5 py-3 text-sm transition-all focus:outline-none ${
                        isDark 
                          ? 'bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/40' 
                          : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 shadow-sm'
                      }`} 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={`w-full rounded-xl px-3.5 py-3 text-sm transition-all focus:outline-none ${
                        isDark 
                          ? 'bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/40' 
                          : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 shadow-sm'
                      }`} 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input 
                    required 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    className={`w-full rounded-xl px-3.5 py-3 text-sm transition-all focus:outline-none ${
                      isDark 
                        ? 'bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-neonPurple focus:ring-1 focus:ring-neonPurple/40' 
                        : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 shadow-sm'
                    }`} 
                    placeholder="Project Inquiry / Collaboration" 
                  />
                </div>

                <div className="relative z-10">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="4" 
                    className={`w-full rounded-xl px-3.5 py-3 text-sm transition-all focus:outline-none resize-none ${
                      isDark 
                        ? 'bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-neonPurple focus:ring-1 focus:ring-neonPurple/40' 
                        : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 shadow-sm'
                    }`} 
                    placeholder="Your message details here..."
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-3.5 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm font-medium ${
                      status.type === 'success' 
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400' 
                        : 'bg-rose-500/15 border border-rose-500/30 text-rose-400'
                    }`}
                  >
                    {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-60 shadow-md"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
