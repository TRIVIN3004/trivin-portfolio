import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // In development, you might hit localhost:5000 if your backend runs there.
      // In production, the React app is served by the backend, so we use relative path.
      const isDev = import.meta.env.DEV;
      const apiUrl = isDev ? 'http://localhost:5000/api/contact' : '/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
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
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="text-neonBlue mt-1"><MapPin size={24} /></div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Location</h4>
                <p className="text-gray-400">Sriperumbudur, Tamil Nadu</p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="text-neonPurple mt-1"><Mail size={24} /></div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Email</h4>
                <a href="mailto:trivintrivin2005@gmail.com" className="text-gray-400 hover:text-neonPurple transition-colors">trivintrivin2005@gmail.com</a>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="text-neonBlue mt-1"><Phone size={24} /></div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Phone</h4>
                <p className="text-gray-400">9344048472</p>
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
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone (Optional)</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors" placeholder="+91 0000000000" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={loading} className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-neonBlue to-neonPurple text-white font-semibold py-4 rounded-lg hover:shadow-[0_0_15px_#45f3ff] transition-all duration-300 disabled:opacity-50">
                {loading ? 'Sending...' : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
