import { motion } from 'framer-motion';

const OurTeam = () => {
  return (
    <div className="team-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">Our Team</h1>
            <p className="section-subtitle">
              Dedicated professionals shaping the future of education
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;