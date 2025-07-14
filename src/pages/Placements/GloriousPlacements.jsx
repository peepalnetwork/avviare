import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users, Star, Building } from 'lucide-react';

const GloriousPlacements = () => {
  const placementStats = [
    { value: '98%', label: 'Placement Rate', icon: Trophy },
    { value: '₹12L', label: 'Highest Package', icon: TrendingUp },
    { value: '500+', label: 'Companies', icon: Building },
    { value: '95%', label: 'Student Satisfaction', icon: Star }
  ];

  return (
    <div className="placements-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">Glorious Placements</h1>
            <p className="section-subtitle">
              Outstanding placement records connecting students with leading companies
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid grid-4">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <stat.icon size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#3b82f6' }}>{stat.value}</h3>
                <p style={{ color: '#64748b' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GloriousPlacements;