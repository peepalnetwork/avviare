import { motion } from 'framer-motion';

const CoreValues = () => {
  return (
    <div className="values-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">Core Values</h1>
            <p className="section-subtitle">
              The principles that guide our educational mission
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;