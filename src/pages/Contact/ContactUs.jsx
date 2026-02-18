import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Get in touch with us for admissions, inquiries, or support
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="contact-info">
                <h2 style={{ marginBottom: '2rem', color: '#3b82f6' }}>Get in Touch</h2>
                
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Phone size={24} style={{ color: '#3b82f6' }} />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9876543210</p>
                  </div>
                </div>

                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Mail size={24} style={{ color: '#3b82f6' }} />
                  <div>
                    <h4>Email</h4>
                    <p>info@avviareeducations.org</p>
                  </div>
                </div>

                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <MapPin size={24} style={{ color: '#3b82f6' }} />
                  <div>
                    <h4>Address</h4>
                    <p>123 Education Street, Academic City, India</p>
                  </div>
                </div>

                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Clock size={24} style={{ color: '#3b82f6' }} />
                  <div>
                    <h4>Office Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form className="contact-form card">
                <h3 style={{ marginBottom: '1.5rem', color: '#3b82f6' }}>Send us a Message</h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="form-input"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="form-input"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="form-input"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="form-input"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #e2e8f0', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: '100%' }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;