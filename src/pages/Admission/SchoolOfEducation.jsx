import { motion } from 'framer-motion';
import { BookOpen, Users, Award, GraduationCap } from 'lucide-react';

const SchoolOfEducation = () => {
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
            <h1 className="section-title">School of Education</h1>
            <p className="section-subtitle">
              Shaping future educators with innovative teaching methodologies
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
              <BookOpen size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Innovative Teaching</h3>
              <p>Modern pedagogical approaches and educational technology integration</p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Users size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Student Development</h3>
              <p>Focus on holistic development and educational psychology</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOfEducation;
