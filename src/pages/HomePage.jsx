import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  Trophy, 
  BookOpen, 
  Star,
  CheckCircle,
  Play,
  Award,
  Building,
  Globe,
  Heart,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/NewHome.css';

const HomePage = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { icon: Users, value: 15000, label: 'Students Enrolled', suffix: '+' },
    { icon: GraduationCap, value: 98, label: 'Graduate Success Rate', suffix: '%' },
    { icon: Trophy, value: 50, label: 'Awards Won', suffix: '+' },
    { icon: BookOpen, value: 200, label: 'Courses Offered', suffix: '+' }
  ];

  const whyAehBestChoice = [
    {
      icon: Globe,
      title: 'World-Class Education',
      description: 'International standard curriculum designed to prepare students for global opportunities.',
      color: 'var(--accent-blue)'
    },
    {
      icon: Award,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and renowned academics with years of experience.',
      color: 'var(--accent-pink)'
    },
    {
      icon: Building,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities including labs, libraries, and recreational spaces.',
      color: 'var(--accent-color)'
    },
    {
      icon: Target,
      title: 'Career-Focused Programs',
      description: 'Designed to meet industry demands with practical skills and real-world applications.',
      color: 'var(--accent-green)'
    },
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'Personalized attention and support to help every student reach their full potential.',
      color: 'var(--primary-color)'
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Encouraging creativity, research, and entrepreneurship through dedicated programs.',
      color: 'var(--secondary-color)'
    }
  ];

  const courses = [
    { name: 'Applied Science', path: '/admission/school-of-applied-science', icon: Zap },
    { name: 'Commerce', path: '/admission/school-of-commerce', icon: Users },
    { name: 'Computer Science', path: '/admission/school-of-computer-science', icon: Globe },
    { name: 'Management', path: '/admission/school-of-management', icon: Award },
    { name: 'Law', path: '/admission/school-of-law', icon: Shield },
    { name: 'Journalism', path: '/admission/school-of-journalism', icon: BookOpen },
  ];

  const companies = [
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Microsoft', logo: '/logos/microsoft.svg' },
    { name: 'Amazon', logo: '/logos/amazon.svg' },
    { name: 'Unilever', logo: '/logos/unilever.svg' },
    { name: 'Deloitte', logo: '/logos/deloitte.svg' },
    { name: 'Accenture', logo: '/logos/accenture.svg' },
    { name: 'TCS', logo: '/logos/tcs.svg' },
    { name: 'Infosys', logo: '/logos/infosys.svg' },
  ];

  const dignitaries = [
    {
      name: 'Dr. A.P.J. Abdul Kalam',
      title: 'Former President of India',
      quote: 'Avviare is a beacon of light for the future of education in India. Its commitment to innovation and student development is truly commendable.'
    },
    {
      name: 'Mr. Sundar Pichai',
      title: 'CEO, Google',
      quote: 'Institutions like Avviare are crucial for building the next generation of tech leaders. Their focus on practical skills is exactly what the industry needs.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      content: 'Avviare provided me with the perfect foundation for my tech career. The practical approach and industry connections made all the difference.',
      avatar: 'PS'
    },
    {
      name: 'Rahul Kumar',
      role: 'Data Scientist at Microsoft',
      content: 'The research opportunities and mentorship at Avviare shaped my analytical thinking and problem-solving skills.',
      avatar: 'RK'
    },
    {
      name: 'Sneha Patel',
      role: 'Marketing Director at Unilever',
      content: 'The business programs at Avviare are exceptional. Real case studies and industry exposure prepared me for leadership roles.',
      avatar: 'SP'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay loop muted className="hero-video-background">
          <source src="/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hero-badge"
            >
              <Star size={16} />
              Excellence in Education Since 2010
            </motion.div>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Shape Your Future with{' '}
              <span className="hero-title-highlight">
                Avviare Educations
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-subtitle"
            >
              Empowering minds through innovative education, cutting-edge research, and world-class facilities. 
              Join thousands of successful graduates who chose excellence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-actions"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg"
              >
                Explore Programs <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-glass"
              >
                <Play size={20} />
                Watch Campus Tour
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section" ref={statsRef} style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="stat-card modern-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="feature-icon" style={{ background: `var(--gradient-primary)` }}>
                    <IconComponent size={24} />
                  </div>
                  <div className="stat-number">
                    {statsInView && (
                      <CountUp 
                        end={stat.value} 
                        duration={2.5} 
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section" ref={featuresRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Why Choose Avviare?</h2>
            <p className="section-subtitle">
              Discover what makes us the preferred choice for thousands of students worldwide.
            </p>
          </motion.div>
          
          <div className="feature-grid">
            {whyAehBestChoice.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="feature-icon" style={{ background: feature.color }}>
                    <IconComponent size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Avviare Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">About Avviare Educational Hub</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: 'none' }}>
                Avviare Educations is a premier institution dedicated to fostering academic excellence and holistic development. We believe in empowering students with the knowledge, skills, and values needed to thrive in a dynamic global landscape.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Our approach combines rigorous academic programs with hands-on learning, research opportunities, and industry exposure. We are committed to creating a vibrant learning community where students are inspired to innovate, lead, and make a positive impact on society.
              </p>
              <Link to="/about/about-avviare" className="btn btn-primary">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/about-image.jpg" alt="About Avviare Educations" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AEH Impact Section */}
      <section className="stats-section section" ref={statsRef} style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">AEH Impact</h2>
            <p className="section-subtitle">
              Our commitment to excellence is reflected in our numbers.
            </p>
          </motion.div>
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="stat-card modern-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="feature-icon" style={{ background: `var(--gradient-primary)` }}>
                    <IconComponent size={24} />
                  </div>
                  <div className="stat-number">
                    {statsInView && (
                      <CountUp 
                        end={stat.value} 
                        duration={2.5} 
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Offered Section */}
      <section className="courses-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Courses Offered</h2>
            <p className="section-subtitle">
              Explore our diverse range of programs designed for the leaders of tomorrow.
            </p>
          </motion.div>
          <div className="feature-grid">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <motion.div
                  key={index}
                  className="course-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="feature-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3>School of {course.name}</h3>
                  <p>Cutting-edge curriculum and practical training.</p>
                  <Link to={course.path} className="btn btn-outline">
                    View Details
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kind Words from Dignitaries Section */}
      <section className="dignitaries-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Kind Words from Dignitaries</h2>
            <p className="section-subtitle">
              Leaders and visionaries share their thoughts on Avviare's mission.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-xl)', maxWidth: '800px', margin: '0 auto' }}>
            {dignitaries.map((dignitary, index) => (
              <motion.div
                key={index}
                className="dignitary-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <p className="dignitary-quote">{dignitary.quote}</p>
                <div className="dignitary-info">
                  <h4>{dignitary.name}</h4>
                  <p>{dignitary.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Hiring Section */}
      <section className="hiring-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Our Graduates Get Hired By The Best</h2>
            <p className="section-subtitle">
              We have strong ties with the industry, ensuring our students have access to top-tier employment opportunities.
            </p>
          </motion.div>
          <div className="logos-container">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="logo-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <img src={company.logo} alt={`${company.name} logo`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="testimonials-section section" ref={testimonialsRef} style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Hear from our alumni who are making a difference in their chosen fields.
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{testimonial.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Ready to Start Your Journey?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2.5rem', 
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2.5rem'
            }}>
              Join thousands of students who have transformed their lives through quality education at Avviare.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'white',
                  color: 'var(--primary-color)',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  padding: '1rem 2.5rem',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                Apply Now <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                <BookOpen size={20} />
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;