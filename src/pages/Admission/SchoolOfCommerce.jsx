import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, BarChart, PieChart, Briefcase, Target, Users, Book,
  CheckCircle, Award, Building, GraduationCap, Star, ArrowRight, Calendar, Shield
} from 'lucide-react';
import './SchoolOfCommerce.css';

const SchoolOfCommerce = () => {

  const keyHighlights = [
    { icon: Book, text: 'Teaching Pedagogy includes Case studies, Live Projects, Workshops, Guest Lectures, and more.' },
    { icon: Award, text: 'Integrated Industry Oriented Skill Certifications.' },
    { icon: Building, text: 'Regular Industrial Visits, Live Projects & Internships for practical exposure.' },
    { icon: Star, text: 'Personality Development Program for Professional Readiness & Enhancement.' },
    { icon: Briefcase, text: 'Strong Placement record with companies like HDFC Ergo, Paytm, Tech Mahindra, etc.' },
  ];

  const programs = [
    { name: 'B.Com', eligibility: '10+2', duration: '3 years', valueAdded: ['Digital Literacy', 'Tally', 'Power BI'] },
    { name: 'M.Com', eligibility: 'Graduate', duration: '2 years', valueAdded: ['Digital Marketing', 'Personality Development'] },
  ];

  const courseCoverage = [
    'Financial Literacy', 'Analytical Skills', 'Business Acumen', 'Accounting', 'Bookkeeping',
    'Business Management', 'Business Economics', 'Actuarial Studies', 'Stock Exchange'
  ];

  const bcomReasons = [
    { title: 'Prepares for Entrepreneurship and Employment', description: 'A B.Com degree prepares graduates for the corporate world as well as Entrepreneurship unlike any other Bachelor courses.' },
    { title: 'Vast Job Domains', description: 'B.Com graduates have a variety of opportunities to work in sectors such as Banks, Accounting Firms, Investment Banking, etc.' },
    { title: 'Higher Studies', description: 'B.Com provides a base to pursue higher education to enhance skills and earn more by opting for courses like CA, CS, CMA, MBA etc.' },
  ];

  const mcomUSP = [
    'Certification in Financial Markets and Stock Exchange',
    'Tally with Advanced Accounting',
    'Assistance in Preparation of Competitive Exams',
    'Certification in Professional Readiness Program'
  ];

  return (
    <div className="school-of-commerce-page">
      {/* Hero Section */}
      <section className="soc-hero-section">
        <video autoPlay loop muted className="soc-hero-video-background">
          <source src="/HeroVideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="soc-hero-overlay"></div>
        <div className="container">
          <div className="soc-hero-content">
            <motion.div 
              className="soc-hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="soc-hero-title">School of Commerce</h1>
              <p className="soc-hero-subtitle">
                Are you willing to pursue a career in commerce or business? Avviare Educational Hub’s School of Commerce is the right institute for you. It is the best college for B.Com and M.Com in Noida.
              </p>
            </motion.div>
            <motion.div 
              className="soc-info-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="/Commerce.png" alt="School of Commerce" />
              <h3 >Your Gateway to Business Excellence</h3>
              <div className="soc-info-details">
                <div className="soc-info-item"><GraduationCap size={20} /><span>B.Com & M.Com Programs</span></div>
                <div className="soc-info-item"><Calendar size={20} /><span>Duration: 2-3 Years</span></div>
                <div className="soc-info-item"><Shield size={20} /><span>Eligibility: 10+2 / Graduate</span></div>
              </div>
              <motion.button
                className="btn btn-primary"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Highlights</h2>
            <p className="section-subtitle">What makes our School of Commerce stand out.</p>
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

      {/* Programs Table Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Undergraduate and postgraduate courses designed to cater to industry demands.</p>
          </div>
          <table className="programs-table">
            <thead>
              <tr>
                <th>Program Name</th>
                <th>Eligibility Criteria</th>
                <th>Value Added Courses</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  <td><strong>{program.name}</strong></td>
                  <td>{program.eligibility}</td>
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

      {/* Course Coverage Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Courses Cover</h2>
            <p className="section-subtitle">We help you gain fundamental and specialized knowledge in commerce and business.</p>
          </div>
          <div className="course-coverage-grid">
            {courseCoverage.map((item, index) => (
              <motion.div 
                className="coverage-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={20} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Avviare Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="why-avviare-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title" style={{ textAlign: 'left' }}>Why Avviare for B.Com or M.Com?</h2>
              <p style={{ marginBottom: '1rem' }}>At Avviare, we provide exposure to practical aspects via seminars, workshops, projects, and industry visits apart from theoretical lectures in modern smart classrooms.</p>
              <p style={{ marginBottom: '1rem' }}>Our School of Commerce has sophisticated infrastructure and modern facilities, such as computer labs, library, cafeteria, auditorium, hostel, and sports complex.</p>
              <p>By getting admitted, you become part of our alumni network, scholars, and industry alliance. Our placement cell will facilitate you to launch your career soon after course completion.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/why-avviare-commerce.jpg" alt="Why Avviare for Commerce" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* B.Com Details Section */}
      <section className="degree-details-section section">
        <div className="container">
          <h3>Best College for B.Com in Noida</h3>
          <p>Uplift your career by pursuing a B.Com degree from the best college for B.Com in NCR. Avviare’s 3-year B.Com course is designed to develop the student’s business acumen, financial literacy, and analytical skills. This is a career-oriented course and provides a foundation in all aspects of commerce.</p>
          <div className="reasons-grid">
            {bcomReasons.map((reason, index) => (
              <motion.div 
                className="reason-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* M.Com Details Section */}
      <section className="degree-details-section section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h3>M.Com Course at Avviare</h3>
          <p>Avviare Education Hub offers the best M.Com course in Noida. The M.Com course provides a myriad of specializations and a strong foundation for a career in Finance, Accounting, and Management. The program curriculum encompasses various professional courses from across the globe to give you the edge required to compete and succeed.</p>
          <div className="course-coverage-grid" style={{ marginTop: '2rem' }}>
            {mcomUSP.map((item, index) => (
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
            <h2 className="section-title">Ready to Build Your Future in Commerce?</h2>
            <p className="section-subtitle">Don’t miss an opportunity to study in one of the best colleges in NCR. Join Avviare and move beyond success.</p>
            <motion.button className="btn btn-primary btn-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Apply to the School of Commerce
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolOfCommerce;
