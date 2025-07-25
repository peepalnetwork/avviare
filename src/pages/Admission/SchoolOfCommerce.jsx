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
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  // Enhanced statistics
  const stats = [
    { icon: Users, value: 95, label: 'Placement Rate', suffix: '%', color: '#10b981' },
    { icon: Trophy, value: 45, label: 'Average Package', suffix: 'L', color: '#f59e0b' },
    { icon: Building, value: 200, label: 'Industry Partners', suffix: '+', color: '#3b82f6' },
    { icon: Award, value: 15, label: 'Years of Excellence', suffix: '+', color: '#8b5cf6' }
  ];

  const keyHighlights = [
    { 
      icon: Brain, 
      title: 'Case Study Learning',
      text: 'Real-world case studies from Fortune 500 companies to develop analytical thinking and problem-solving skills.',
      color: '#3b82f6'
    },
    { 
      icon: Award, 
      title: 'Industry Certifications',
      text: 'Integrated certifications in Tally, Power BI, Digital Marketing, and Financial Markets.',
      color: '#10b981'
    },
    { 
      icon: Building, 
      title: 'Industry Exposure',
      text: 'Regular visits to leading organizations, live projects, and mandatory internships.',
      color: '#f59e0b'
    },
    { 
      icon: Lightbulb, 
      title: 'Skill Development',
      text: 'Comprehensive personality development program and professional readiness training.',
      color: '#8b5cf6'
    },
    { 
      icon: Crown, 
      title: 'Elite Placements',
      text: 'Strong placement record with HDFC, Paytm, Tech Mahindra, Deloitte, and more.',
      color: '#ef4444'
    },
    { 
      icon: Globe, 
      title: 'Global Perspective',
      text: 'International exposure through exchange programs and global case studies.',
      color: '#06b6d4'
    }
  ];

  const programs = [
    { 
      name: 'B.Com', 
      fullName: 'Bachelor of Commerce',
      eligibility: '10+2 with 50% marks', 
      duration: '3 Years', 
      fees: '₹2.5L per year',
      valueAdded: ['Digital Literacy', 'Tally ERP', 'Power BI', 'Stock Market Analysis'],
      specializations: ['Accounting & Finance', 'Banking & Insurance', 'Taxation', 'E-Commerce']
    },
    { 
      name: 'M.Com', 
      fullName: 'Master of Commerce',
      eligibility: 'Graduate with 50% marks', 
      duration: '2 Years', 
      fees: '₹3L per year',
      valueAdded: ['Digital Marketing', 'Advanced Analytics', 'Research Methodology', 'Leadership Skills'],
      specializations: ['Financial Management', 'International Business', 'Corporate Finance', 'Business Analytics']
    }
  ];

  const courseCoverage = [
    { icon: DollarSign, subject: 'Financial Literacy', description: 'Understanding financial markets and instruments' },
    { icon: BarChart, subject: 'Analytical Skills', description: 'Data analysis and business intelligence' },
    { icon: Briefcase, subject: 'Business Acumen', description: 'Strategic thinking and decision making' },
    { icon: Target, subject: 'Accounting Mastery', description: 'Advanced accounting principles and practices' },
    { icon: TrendingUp, subject: 'Business Economics', description: 'Economic principles in business context' },
    { icon: PieChart, subject: 'Stock Exchange', description: 'Capital markets and investment strategies' }
  ];

  const careerPaths = [
    { title: 'Financial Analyst', salary: '₹6-12 LPA', companies: ['Goldman Sachs', 'JP Morgan', 'ICICI Bank'] },
    { title: 'Business Consultant', salary: '₹8-15 LPA', companies: ['Deloitte', 'PwC', 'EY'] },
    { title: 'Investment Banker', salary: '₹10-20 LPA', companies: ['Morgan Stanley', 'Credit Suisse', 'Barclays'] },
    { title: 'Digital Marketer', salary: '₹5-10 LPA', companies: ['Google', 'Facebook', 'Amazon'] },
    { title: 'Entrepreneur', salary: 'Unlimited', companies: ['Startup Ecosystem', 'Venture Capital', 'Angel Investors'] },
    { title: 'CA/CS/CMA', salary: '₹8-25 LPA', companies: ['Big 4 Firms', 'Corporate Houses', 'Government'] }
  ];

  const facultyHighlights = [
    { name: 'Dr. Rajesh Sharma', qualification: 'PhD Finance, CFA', experience: '15+ Years', specialization: 'Capital Markets' },
    { name: 'Prof. Priya Gupta', qualification: 'PhD Economics, FRM', experience: '12+ Years', specialization: 'Risk Management' },
    { name: 'Dr. Amit Verma', qualification: 'PhD Commerce, CA', experience: '18+ Years', specialization: 'Taxation & Audit' }
  ];

  return (
    <div className="school-of-commerce-page">
      {/* Modern Hero Section */}
      <section className="soc-hero-section">
        <div className="soc-hero-background">
          <video autoPlay loop muted className="soc-hero-video">
            <source src="/HeroVideo2.mp4" type="video/mp4" />
          </video>
          <div className="soc-hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="soc-hero-content">
            <motion.div 
              className="soc-hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="soc-hero-badges">
                <motion.div className="hero-badge ranking" whileHover={{ scale: 1.05 }}>
                  <Award size={16} />
                  Top Commerce School
                </motion.div>
                <motion.div className="hero-badge accreditation" whileHover={{ scale: 1.05 }}>
                  <Trophy size={16} />
                  95% Placement Rate
                </motion.div>
              </div>
              
              <h1 className="soc-hero-title">
                School of <span className="gradient-text">Commerce</span>
              </h1>
              <p className="soc-hero-subtitle">
                Transform your passion for business into expertise. Join India's premier commerce education hub 
                where innovation meets tradition, and students become industry leaders.
              </p>
              
              <div className="soc-hero-actions">
                <motion.button 
                  className="btn-hero-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now <ArrowRight size={20} />
                </motion.button>
                <motion.button 
                  className="btn-hero-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Download Brochure
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              className="soc-hero-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="/Commerce.png" alt="School of Commerce" />
              <div className="soc-card-content">
                <h3>Your Gateway to Business Excellence</h3>
                <div className="soc-card-features">
                  <div className="feature-item">
                    <GraduationCap size={18} />
                    <span>B.Com & M.Com Programs</span>
                  </div>
                  <div className="feature-item">
                    <Clock size={18} />
                    <span>Flexible Duration</span>
                  </div>
                  <div className="feature-item">
                    <Building size={18} />
                    <span>Industry Integration</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="soc-stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid-modern">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card-modern"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ '--accent-color': stat.color }}
              >
                <div className="stat-icon">
                  <stat.icon size={28} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    {statsInView && (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                        prefix={stat.suffix === 'L' ? '₹' : ''}
                      />
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="soc-highlights-section" ref={featuresRef}>
        <div className="container">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2>What Makes Us Different</h2>
            <p>Discover the unique advantages that set our commerce programs apart from the rest</p>
          </motion.div>
          
          <div className="highlights-grid">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card-modern"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{ '--accent-color': highlight.color }}
              >
                <div className="highlight-icon">
                  <highlight.icon size={24} />
                </div>
                <div className="highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="soc-programs-section">
        <div className="container">
          <div className="section-header-modern">
            <h2>Our Programs</h2>
            <p>Choose from our comprehensive range of commerce programs designed for the modern business world</p>
          </div>
          
          <div className="programs-grid">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="program-card-enhanced"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="program-header">
                  <h3>{program.name}</h3>
                  <h4>{program.fullName}</h4>
                </div>
                
                <div className="program-details">
                  <div className="detail-item">
                    <Shield size={16} />
                    <span><strong>Eligibility:</strong> {program.eligibility}</span>
                  </div>
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span><strong>Duration:</strong> {program.duration}</span>
                  </div>
                  <div className="detail-item">
                    <DollarSign size={16} />
                    <span><strong>Fees:</strong> {program.fees}</span>
                  </div>
                </div>

                <div className="program-features">
                  <h5>Value Added Courses</h5>
                  <div className="feature-tags">
                    {program.valueAdded.map((course, idx) => (
                      <span key={idx} className="feature-tag">
                        <CheckCircle size={12} />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="program-specializations">
                  <h5>Specializations</h5>
                  <ul>
                    {program.specializations.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="program-apply-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for {program.name} <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Coverage Section */}
      <section className="soc-coverage-section">
        <div className="container">
          <div className="section-header-modern">
            <h2>What You'll Learn</h2>
            <p>Comprehensive curriculum designed to make you industry-ready from day one</p>
          </div>
          
          <div className="coverage-grid">
            {courseCoverage.map((item, index) => (
              <motion.div
                key={index}
                className="coverage-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="coverage-icon">
                  <item.icon size={24} />
                </div>
                <h4>{item.subject}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="soc-careers-section">
        <div className="container">
          <div className="section-header-modern">
            <h2>Career Opportunities</h2>
            <p>Explore the diverse career paths available to our graduates</p>
          </div>
          
          <div className="careers-grid">
            {careerPaths.map((career, index) => (
              <motion.div
                key={index}
                className="career-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <h4>{career.title}</h4>
                <div className="salary-range">{career.salary}</div>
                <div className="hiring-companies">
                  <h5>Top Recruiters:</h5>
                  <ul>
                    {career.companies.map((company, idx) => (
                      <li key={idx}>{company}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="soc-faculty-section">
        <div className="container">
          <div className="section-header-modern">
            <h2>Meet Our Faculty</h2>
            <p>Learn from industry experts and academic leaders</p>
          </div>
          
          <div className="faculty-grid">
            {facultyHighlights.map((faculty, index) => (
              <motion.div
                key={index}
                className="faculty-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="faculty-info">
                  <h4>{faculty.name}</h4>
                  <p className="qualification">{faculty.qualification}</p>
                  <p className="experience">{faculty.experience}</p>
                  <p className="specialization">Specialization: {faculty.specialization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="soc-cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Shape Your Business Future?</h2>
            <p>Join thousands of successful alumni who started their journey with us</p>
            
            <div className="cta-actions">
              <motion.button
                className="cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={16} />
                Call Admissions
              </motion.button>
              <motion.button
                className="cta-tertiary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={16} />
                Schedule Visit
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
              transition={{ duration: 0.8 }}
            >
              <h1 className="soc-hero-title">School of Commerce</h1>
              <p className="soc-hero-subtitle">
                Are you willing to pursue a career in commerce or business? Avviare International Versity’s School of Commerce is the right institute for you. It is the best college for B.Com and M.Com in Noida.
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
