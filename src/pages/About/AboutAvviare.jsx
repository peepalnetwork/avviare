import { motion } from 'framer-motion';
import { Heart, Target, Users, Award } from 'lucide-react';

const AboutAvviare = () => {
  return (
    <div className="about-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">About Avviare Educations</h1>
            <p className="section-subtitle">
              A legacy of excellence in education, nurturing minds for over a decade
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
              <h2 style={{ marginBottom: '1rem', color: '#3b82f6' }}>Our Story</h2>
              <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                Founded with a vision to provide world-class education, Avviare Educations has been 
                at the forefront of academic excellence for over a decade. We believe in nurturing 
                not just academic prowess but also character and leadership qualities.
              </p>
              <p style={{ lineHeight: '1.6' }}>
                Our commitment to innovation, quality education, and holistic development has made 
                us one of the most trusted educational institutions in the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '1rem', color: '#3b82f6' }}>Our Mission</h2>
              <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                To provide accessible, high-quality education that empowers students to achieve 
                their full potential and become responsible global citizens.
              </p>
              <h2 style={{ marginBottom: '1rem', color: '#3b82f6' }}>Our Vision</h2>
              <p style={{ lineHeight: '1.6' }}>
                To be a leading educational institution that transforms lives through innovation, 
                excellence, and commitment to societal development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAvviare;