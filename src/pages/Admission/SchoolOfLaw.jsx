import { motion } from 'framer-motion';
import { Scale, BookOpen, Gavel, Shield } from 'lucide-react';

const SchoolOfLaw = () => {
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
            <h1 className="section-title">School of Law</h1>
            <p className="section-subtitle">
              Training future legal professionals with ethics, knowledge, and practical skills
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
              <Scale size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Constitutional Law</h3>
              <p>Deep understanding of constitutional principles and legal frameworks</p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Gavel size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Practical Training</h3>
              <p>Moot courts, legal clinics, and real-world case experience</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOfLaw;