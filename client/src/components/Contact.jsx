import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
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
      setStatus({ type: 'error', message: 'Failed to send message. Please check your configuration and try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-neonPurple">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonBlue to-neonPurple mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(69,243,255,0.15)] border border-white/5 hover:border-neonBlue/30">
              <div className="text-neonBlue mt-1 bg-white/5 p-3 rounded-xl"><MapPin size={24} /></div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Location</h4>
                <p className="text-gray-400">Sriperumbudur, Tamil Nadu</p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(180,94,255,0.15)] border border-white/5 hover:border-neonPurple/30">
              <div className="text-neonPurple mt-1 bg-white/5 p-3 rounded-xl"><Mail size={24} /></div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Email</h4>
                <a href="mailto:trivintrivin2005@gmail.com" className="text-gray-400 hover:text-neonPurple transition-colors">trivintrivin2005@gmail.com</a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(69,243,255,0.15)] border border-white/5 hover:border-neonBlue/30">
              <div className="text-neonBlue mt-1 bg-white/5 p-3 rounded-xl"><Phone size={24} /></div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Phone</h4>
                <p className="text-gray-400">9344048472</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex flex-col items-center gap-4 border border-white/5 hover:border-neonPurple/30 transition-colors duration-300 hover:shadow-[0_0_20px_rgba(180,94,255,0.15)]">
               <h4 className="text-white font-medium text-lg mb-2">Connect with me</h4>
               <div className="flex gap-4">
                  <a href="https://github.com/TRIVIN3004" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:trivintrivin2005@gmail.com" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                    <Mail size={20} />
                  </a>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 border border-white/5 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(69,243,255,0.1)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 via-transparent to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name <span className="text-red-500">*</span></label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/30 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/50 transition-all duration-300 placeholder-gray-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Email <span className="text-red-500">*</span></label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/30 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/50 transition-all duration-300 placeholder-gray-500" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="relative z-10">
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject <span className="text-red-500">*</span></label>
                <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-black/30 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple/50 transition-all duration-300 placeholder-gray-500" placeholder="Project Inquiry" />
              </div>

              <div className="relative z-10">
                <label className="block text-sm font-medium text-gray-300 mb-2">Message <span className="text-red-500">*</span></label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-black/30 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neonPurple focus:ring-1 focus:ring-neonPurple/50 transition-all duration-300 resize-none placeholder-gray-500" placeholder="Your message here..."></textarea>
              </div>

              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-sm font-medium border relative z-10 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}
                >
                  {status.message}
                </motion.div>
              )}

              <button type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(69,243,255,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative z-10 overflow-hidden group/btn">
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
