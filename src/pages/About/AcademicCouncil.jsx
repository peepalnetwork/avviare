import { motion } from 'framer-motion';

const AcademicCouncil = () => {
  return (
    <div className="council-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">Academic Council</h1>
            <p className="section-subtitle">
              Distinguished academics guiding our educational standards
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCouncil;