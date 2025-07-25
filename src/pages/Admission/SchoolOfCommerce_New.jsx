import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  TrendingUp, DollarSign, BarChart, PieChart, Briefcase, Target, Users, Book,
  CheckCircle, Award, Building, GraduationCap, Star, ArrowRight, Calendar, Shield,
  Brain, Lightbulb, Globe, Play, Download, ExternalLink, MessageSquare,
  Clock, MapPin, Phone, Mail, Eye, ThumbsUp, Zap, Crown, Trophy
} from 'lucide-react';
import './SchoolOfCommerce.css';

const SchoolOfCommerce = () => {
  const { ref: statsRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Enhanced statistics
  const stats = [
    { number: '95', label: 'Placement Rate %' },
    { number: '45', label: 'Average Package (L)' },
    { number: '200+', label: 'Industry Partners' },
    { number: '15+', label: 'Years of Excellence' }
  ];

  const keyHighlights = [
    { 
      icon: Brain, 
      text: 'Real-world case studies from Fortune 500 companies to develop analytical thinking and problem-solving skills.'
    },
    { 
      icon: Award, 
      text: 'Integrated certifications in Tally, Power BI, Digital Marketing, and Financial Markets.'
    },
    { 
      icon: Building, 
      text: 'Regular visits to leading organizations, live projects, and mandatory internships.'
    },
    { 
      icon: Globe, 
      text: 'Global exposure through international study tours and exchange programs.'
    },
    { 
      icon: Users, 
      text: 'Personal mentorship and career guidance from industry experts and faculty.'
    },
    { 
      icon: Lightbulb, 
      text: 'Innovation labs and entrepreneurship development programs to nurture business ideas.'
    }
  ];

  const programs = [
    {
      name: 'B.Com (General)',
      eligibility: '10+2 with 50% marks',
      valueAdded: ['Tally ERP 9', 'Digital Marketing', 'Business Analytics'],
      duration: '3 Years'
    },
    {
      name: 'B.Com (Honours)',
      eligibility: '10+2 with 60% marks',
      valueAdded: ['Advanced Excel', 'Financial Markets', 'E-commerce'],
      duration: '3 Years'
    },
    {
      name: 'M.Com',
      eligibility: 'Graduate with 50% marks',
      valueAdded: ['Research Methodology', 'GST & Taxation', 'Investment Analysis'],
      duration: '2 Years'
    }
  ];

  const courseCoverage = [
    'Financial Accounting & Reporting',
    'Corporate Finance & Investment',
    'Business Statistics & Analytics',
    'Marketing Management',
    'Human Resource Management',
    'Operations Management',
    'International Business',
    'Entrepreneurship Development',
    'Digital Commerce & E-business',
    'Banking & Insurance',
    'Taxation & Audit',
    'Business Law & Ethics'
  ];

  const careerPaths = [
    {
      title: 'Chartered Accountant',
      description: 'Lead financial operations, auditing, and taxation in multinational corporations.',
      salaryRange: '₹8-25 LPA'
    },
    {
      title: 'Investment Banker',
      description: 'Manage corporate finance, mergers & acquisitions, and capital markets.',
      salaryRange: '₹12-40 LPA'
    },
    {
      title: 'Digital Marketing Manager',
      description: 'Drive online brand presence and revenue through digital channels.',
      salaryRange: '₹6-20 LPA'
    },
    {
      title: 'Business Analyst',
      description: 'Analyze market trends and business processes to drive strategic decisions.',
      salaryRange: '₹7-18 LPA'
    },
    {
      title: 'Financial Consultant',
      description: 'Provide expert financial advice to individuals and businesses.',
      salaryRange: '₹5-15 LPA'
    },
    {
      title: 'Entrepreneur',
      description: 'Start and manage your own business venture with comprehensive support.',
      salaryRange: 'Unlimited'
    }
  ];

  const facultyHighlights = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Head of Department',
      qualification: 'Ph.D. in Finance, CFA',
      image: '/faculty/rajesh-kumar.jpg'
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Associate Professor',
      qualification: 'MBA, CA, 15+ years industry experience',
      image: '/faculty/priya-sharma.jpg'
    },
    {
      name: 'Dr. Amit Gupta',
      position: 'Professor',
      qualification: 'Ph.D. in Marketing, Former Corporate Executive',
      image: '/faculty/amit-gupta.jpg'
    }
  ];

  const bcomReasons = [
    {
      title: 'Industry-Aligned Curriculum',
      description: 'Our B.Com program is designed in consultation with industry experts to ensure graduates are job-ready from day one.'
    },
    {
      title: 'Practical Learning Approach',
      description: 'Hands-on training in modern business tools like Tally, SAP, and advanced Excel for real-world application.'
    },
    {
      title: 'Placement Support',
      description: 'Dedicated placement cell with 95% placement record and partnerships with top companies across various sectors.'
    },
    {
      title: 'Entrepreneurship Development',
      description: 'Incubation support and mentorship for students interested in starting their own business ventures.'
    }
  ];

  const mcomUSP = [
    'Advanced Research Methodology',
    'Specialized Tracks in Finance, Marketing & HR',
    'Industry Projects & Live Case Studies',
    'International Exposure Programs',
    'Ph.D. Preparation Support',
    'Executive Development Programs'
  ];

  return (
    <div className="school-of-commerce-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>School of Commerce</h1>
              <p>
                Are you willing to pursue a career in commerce or business? Avviare International University's School of Commerce is the right institute for you. It is the best college for B.Com and M.Com in Noida.
              </p>
              <div className="hero-buttons">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Download Brochure
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={16} />
                  Call Admissions
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="/Commerce.png" alt="School of Commerce" style={{ width: '100%', borderRadius: '15px', marginBottom: '1rem' }} />
              <h3>Your Gateway to Business Excellence</h3>
              <div className="hero-info-details">
                <div className="hero-info-item"><GraduationCap size={20} /><span>B.Com & M.Com Programs</span></div>
                <div className="hero-info-item"><Calendar size={20} /><span>Duration: 2-3 Years</span></div>
                <div className="hero-info-item"><Shield size={20} /><span>Eligibility: 10+2 / Graduate</span></div>
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

      {/* Stats Section */}
      <section className="section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                className="stat-item"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">
                  {isInView && <CountUp end={parseInt(stat.number)} duration={2} />}
                  {stat.number.includes('+') && '+'}
                  {stat.number.includes('%') && '%'}
                  {stat.number.includes('L') && 'L'}
                </span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
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

      {/* Career Paths Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Career Opportunities</h2>
            <p className="section-subtitle">Diverse career paths await our graduates across various industries.</p>
          </div>
          <div className="career-paths-grid">
            {careerPaths.map((career, index) => (
              <motion.div 
                className="career-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{career.title}</h4>
                <p>{career.description}</p>
                <div className="salary-range">{career.salaryRange}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Distinguished Faculty</h2>
            <p className="section-subtitle">Learn from industry experts and experienced academicians.</p>
          </div>
          <div className="faculty-grid">
            {facultyHighlights.map((faculty, index) => (
              <motion.div 
                className="faculty-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={faculty.image} alt={faculty.name} />
                <h4>{faculty.name}</h4>
                <div className="position">{faculty.position}</div>
                <p>{faculty.qualification}</p>
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
          <p>Uplift your career by pursuing a B.Com degree from the best college for B.Com in NCR. Avviare's 3-year B.Com course is designed to develop the student's business acumen, financial literacy, and analytical skills. This is a career-oriented course and provides a foundation in all aspects of commerce.</p>
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
            <p className="section-subtitle">Don't miss an opportunity to study in one of the best colleges in NCR. Join Avviare and move beyond success.</p>
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
