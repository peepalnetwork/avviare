import { motion } from 'framer-motion';
import {
  Code, Database, Award, UserCog, CheckCircle, Star,
  GraduationCap, Calendar, Shield, ArrowRight
} from 'lucide-react';
import './SchoolOfComputerScience.css';

const SchoolOfComputerScience = () => {
  const highlights = [
    { icon: Code, text: 'State-of-the-art department with well-equipped labs and interdisciplinary research.' },
    { icon: Award, text: 'Integrated Industry Oriented Certifications with Personality Development.' },
    { icon: UserCog, text: 'Industrial Visits, Live Projects & Internships for practical exposure.' },
    { icon: Star, text: 'Strong Placement record with TCS, Accenture, Mobiloittes, HCL, Cogent, and more.' }
  ];

  const programs = [
    {
      name: 'BCA',
      eligibility: '10+2',
      specialization: 'Computer Applications',
      valueAdded: [
        'Web Development', 'Web Designing', 'Python Development', 'Personality Development',
        'Digital Marketing', 'Full Stack Development', 'Cyber Security', 'AI (Artificial Intelligence)', 'Data Analytics'
      ],
      duration: '3 years'
    },
    {
      name: 'MCA',
      eligibility: 'Graduate',
      specialization: 'Computer Applications',
      valueAdded: [],
      duration: '2 years'
    }
  ];

  const courseCoverage = [
    'Cyber Sphere and Security', 'Discrete Mathematical Structures', 'Object Oriented Programming with C++',
    'Programming in Java', 'Data Structures', 'Microprocessor', 'Numerical Optimization',
    'Web Design & Development', 'Database Systems', 'Software Engineering', 'Internet Technology',
    'Data Analysis and Visualization', 'Artificial Intelligence', 'Data Mining', 'Machine Learning',
    'Theory of Computation', 'Operating System Concepts'
  ];

  const careers = [
    'Web Designer', 'Web Developer', 'System Manager', 'Software Developer', 'Quality Analyst',
    'Computer Programmer', 'Software Tester'
  ];

  const mcaHighlights = [
    'Hands-on Industrial Projects',
    'Training in Modern Programming Languages',
    'Career options in Public & Private Sectors',
    'UGC Recognized Degree with Industry Mentorship'
  ];

  return (
    <div className="school-of-cs-page">
      {/* Hero Section */}
      <section className="cs-hero-section">
        <video autoPlay loop muted className="cs-hero-video-background">
        <source src="/HeroVideo2.mp4" type="video/mp4" />

        </video>
        <div className="cs-hero-overlay"></div>
        <div className="container">
          <div className="cs-hero-content">
            <motion.div
              className="cs-hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="cs-hero-title">School of Computer Science</h1>
              <p className="cs-hero-subtitle">
                A new-age computer institute offering extensive practical exposure & advanced curriculum.
              </p>
            </motion.div>
            <motion.div
              className="cs-info-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="/CS.png" alt="School of CS" />
              <h3>Leading the IT Education Revolution</h3>
              <div className="cs-info-details">
                <div className="cs-info-item"><GraduationCap size={20} /><span>BCA & MCA Programs</span></div>
                <div className="cs-info-item"><Calendar size={20} /><span>Duration: 2-3 Years</span></div>
                <div className="cs-info-item"><Shield size={20} /><span>Eligibility: 10+2 / Graduate</span></div>
              </div>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="key-highlights-grid">
            {highlights.map((item, index) => (
              <motion.div
                className="highlight-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon size={32} className="highlight-icon" />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Table */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Programs Offered</h2>
          <table className="programs-table">
            <thead>
              <tr>
                <th>Program</th>
                <th>Eligibility</th>
                <th>Specialization</th>
                <th>Value Added Courses</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  <td>{program.name}</td>
                  <td>{program.eligibility}</td>
                  <td>{program.specialization}</td>
                  <td>
                    <ul>
                      {program.valueAdded.map((v, i) => <li key={i}>{v}</li>)}
                    </ul>
                  </td>
                  <td>{program.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Course Coverage */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Course Curriculum</h2>
          <div className="course-coverage-grid">
            {courseCoverage.map((topic, index) => (
              <motion.div
                className="coverage-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={20} />
                <span>{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MCA Benefits */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Why Choose MCA at Avviare?</h2>
          <div className="course-coverage-grid">
            {mcaHighlights.map((item, index) => (
              <motion.div
                className="coverage-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Star size={20} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Options */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Career Opportunities</h2>
          <div className="course-coverage-grid">
            {careers.map((career, index) => (
              <motion.div
                className="coverage-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={20} />
                <span>{career}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Ready to Start Your Tech Journey?</h2>
          <p className="section-subtitle">Join Avviare Educational Hub – one of the best BCA/MCA colleges in Noida.</p>
          <motion.button className="btn btn-primary btn-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Apply to School of CS
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default SchoolOfComputerScience;