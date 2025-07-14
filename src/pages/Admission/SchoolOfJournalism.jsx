import { motion } from 'framer-motion';
import { Mic, Camera, Pen, Globe } from 'lucide-react';

const SchoolOfJournalism = () => {
  return (
    <div className="school-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">School of Journalism</h1>
            <p className="section-subtitle">
              Training future media professionals and storytellers
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Mic size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Broadcast Media</h3>
              <p>Television, radio, and digital media production techniques</p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Pen size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Print & Digital</h3>
              <p>Investigative journalism and digital content creation</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOfJournalism;
