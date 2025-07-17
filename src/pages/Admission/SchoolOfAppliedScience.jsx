import { motion } from 'framer-motion';
import { Microscope, Atom, FlaskConical, TestTube, GraduationCap, Calendar, Shield, Star } from 'lucide-react';

import './schoolOfAppliedScience.css';


const SchoolOfAppliedScience = () => {
  const keyHighlights = [
    { icon: Microscope, text: 'State-of-the-art department providing high quality education and interdisciplinary research' },
    { icon: FlaskConical, text: 'Well-equipped labs for optical, mechanical, and electrical experiments' },
    { icon: Atom, text: 'Strong placement record and practical exposure via internships and industrial visits' },
  ];

  const programs = [
    { name: 'B.Sc', eligibility: '10+2', specialization: 'PCM, ZBC, Microbiology', valueAdded: ['Digital Literacy', 'Advance Excel', 'Clinical Research', 'Computer-Aided Drug Design'], duration: '3 Years' },
    { name: 'M.Sc', eligibility: 'Graduate', specialization: 'All', valueAdded: ['Personality Development', 'Yoga & Naturopathy'], duration: '2 Years' },
  ];

  const mscHighlights = [
    'Tailored for NET/SLET and competitive exams',
    'Hands-on project experience and dissertation',
    'Specializations: Physics, Chemistry, Biology, Mathematics, Microbiology'
  ];

  return (
    <div className="school-of-applied-science-page">
      {/* Hero Section */}
      <section className="sas-hero-section">
        <video autoPlay loop muted className="sas-hero-video-background">
         <source src="/HeroVideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="sas-hero-overlay"></div>
        <div className="container">
          <div className="sas-hero-content">
            <motion.div 
              className="sas-hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="sas-hero-title">School of Applied Sciences</h1>
              <p className="sas-hero-subtitle">
                Engaged in innovative teaching, learning, and cutting-edge research in basic and applied sciences
              </p>
            </motion.div>
            <motion.div 
              className="sas-info-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="\Pharma.png" alt="School of Applied Sciences" />
              <h3>Empowering Scientific Innovation</h3>
              <div className="sas-info-details">
                <div className="sas-info-item"><GraduationCap size={20} /><span>B.Sc & M.Sc Programs</span></div>
                <div className="sas-info-item"><Calendar size={20} /><span>Duration: 2-3 Years</span></div>
                <div className="sas-info-item"><Shield size={20} /><span>Eligibility: 10+2 / Graduate</span></div>
              </div>
              <motion.button
                className="btn btn-primary"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Highlights</h2>
            <p className="section-subtitle">Our pillars of strength in the Applied Sciences domain.</p>
          </div>
          <div className="key-highlights-grid">
            {keyHighlights.map((item, index) => (
              <motion.div 
                className="highlight-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon size={32} className="highlight-icon" />
                <div>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Programs Offered</h2>
            <p className="section-subtitle">Explore our diverse academic offerings in science disciplines.</p>
          </div>
          <table className="programs-table">
            <thead>
              <tr>
                <th>Program Name</th>
                <th>Eligibility Criteria</th>
                <th>Specialization</th>
                <th>Value Added Courses</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  <td><strong>{program.name}</strong></td>
                  <td>{program.eligibility}</td>
                  <td>{program.specialization}</td>
                  <td>
                    <ul className="value-added-list">
                      {program.valueAdded.map((course, i) => <li key={i}>{course}</li>)}
                    </ul>
                  </td>
                  <td>{program.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cta-button-container">
            <motion.button className="btn btn-primary btn-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Download Brochure
            </motion.button>
          </div>
        </div>
      </section>

      {/* M.Sc Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why M.Sc at Avviare?</h2>
          <p>M.Sc at AEH is a two-year postgraduate program tailored to prepare students for professional and academic excellence.</p>
          <div className="course-coverage-grid" style={{ marginTop: '2rem' }}>
            {mscHighlights.map((item, index) => (
              <motion.div 
                className="coverage-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Star size={20} style={{ color: 'var(--accent-color)' }} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Begin Your Journey in Science Today</h2>
            <p className="section-subtitle">Join one of the leading institutions for applied sciences in NCR and shape your scientific future with Avviare.</p>
            <motion.button className="btn btn-primary btn-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Apply to the School of Applied Sciences
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolOfAppliedScience;
