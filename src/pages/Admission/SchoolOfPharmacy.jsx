import { motion } from 'framer-motion';
import { Pill, Microscope, FlaskConical, Heart } from 'lucide-react';

const SchoolOfPharmacy = () => {
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
            <h1 className="section-title">School of Pharmacy</h1>
            <p className="section-subtitle">
              Advancing healthcare through pharmaceutical sciences and research
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
              <Pill size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Drug Development</h3>
              <p>Research and development of new pharmaceutical compounds</p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Heart size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Clinical Practice</h3>
              <p>Patient care and pharmaceutical consultation services</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOfPharmacy;
