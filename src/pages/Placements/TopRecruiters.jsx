import { motion } from 'framer-motion';
import { Building, Users, Award, Star } from 'lucide-react';

const TopRecruiters = () => {
  const recruiters = [
    { name: 'Tech Mahindra', type: 'Technology', category: 'IT Services' },
    { name: 'Infosys', type: 'Technology', category: 'Software Development' },
    { name: 'TCS', type: 'Technology', category: 'Consulting' },
    { name: 'Wipro', type: 'Technology', category: 'Digital Solutions' },
    { name: 'Accenture', type: 'Consulting', category: 'Management Consulting' },
    { name: 'Deloitte', type: 'Consulting', category: 'Business Advisory' },
    { name: 'HDFC Bank', type: 'Banking', category: 'Financial Services' },
    { name: 'ICICI Bank', type: 'Banking', category: 'Corporate Banking' },
    { name: 'Amazon', type: 'E-commerce', category: 'Technology' },
    { name: 'Flipkart', type: 'E-commerce', category: 'Retail' },
    { name: 'Google', type: 'Technology', category: 'Internet Services' },
    { name: 'Microsoft', type: 'Technology', category: 'Software' }
  ];

  return (
    <div className="recruiters-page">
      <div className="hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', paddingTop: '100px' }}
          >
            <h1 className="section-title">Top Recruiters</h1>
            <p className="section-subtitle">
              Leading companies that trust our graduates for their talent and skills
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid grid-3">
            {recruiters.map((recruiter, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <Building size={48} style={{ color: '#3b82f6', marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem' }}>{recruiter.name}</h3>
                <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>{recruiter.type}</p>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{recruiter.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;
