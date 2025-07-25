import { motion } from 'framer-motion';
import { Code, Laptop, Database, Globe } from 'lucide-react';

const SchoolOfComputerScience = () => {
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
            <h1 className="section-title">School of Computer Science</h1>
            <p className="section-subtitle">
              Leading the digital revolution with cutting-edge technology education
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
              <Code size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Programming Excellence</h3>
              <p>Master multiple programming languages and development frameworks</p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Database size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Data Science</h3>
              <p>Advanced analytics, machine learning, and AI technologies</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOfComputerScience;