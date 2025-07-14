import { motion } from 'framer-motion';

const OurLeadership = () => {
  return (
    <div className="leadership-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">Our Leadership</h1>
            <p className="section-subtitle">
              Visionary leaders committed to educational excellence
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurLeadership;