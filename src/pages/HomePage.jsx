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
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Unilever', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs04gXJGVolneHvjbq6HhykE2SO8ior4GJ-w&s' },
  { name: 'Deloitte', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAMAAABn7db1AAAAllBMVEX///8AAACFuyT4+PgrKytUVFSurq56enrv7+/8/PxmZmbIyMi5ubmCuRkRERHDw8MjIyOXl5fp6eldXV2oqKjg4OBPT083NzdxcXHa2tqDg4MdHR0ZGRl5tQD2+u4+Pj5GRkaPj4/m8daNvzbf7cvR0dH7/ffu9uHF3qGv0nuhylqVxEK11YfT57ebx1HN4qqhyWTZ6cCehIJLAAAD4ElEQVR4nO2b6Y6qQBBGQdARBAX3dUAc9/39X+4CN/e6UQyt0N0k3/k3iZmcVMqu6qpWUQAAAAAAAAAAAAAAAAAAAAAAAAAAAABFoP2OYYiWTEDzHD2Vged3hq61HLXl0tccNRt6x+026qJ1b2h6RvFY3pwvZYk7k3iI49faop1jWMWjuEsR9jfEVdVze8LV3xJX1Y6llVNcdcaCT5h3xcNU75VUXJ20RCb6B+Kqbgk0/0Q8NC+puNpslFRc1YWZfyiumqLOlk/Fm66gSvSpeHgollRcrYopoYS4/hUzNM2qpzfTzbsyife1eky73Vu2XHOQJq4LyXJCvPrwmXZjnGbuyioefazh0+J9ESHPKK4odTrozZrM4oo2J83HApqt7OJKfUiJ+yPu3iziyoiawUwFFCEWcaVL5gr/ryeTuOYR4gKqJ5O4UiPEB/yTnE18NEkWn/A/ENnEtS8i5HO+1gqrOPn1HHKVjmAUbxFdcIerdASjeK+aLO5zH+EyimtmsrjO/VhhFDeIss9/TsEqPk8WV2UXV1xCnHu3wipeIy6g3IdxrOLWtKTirdKKE92K/OKljXhZxS3iVJH+OOyWVNwgCpD8JZ8YC5W2yfK4LyZyams73OcTrBeJfrK4/Fc3Ypg15iodkdNlmf+IPJ/xhIB1Zz4DIV/2EZxFZIopubhBDCfUly3tah2ErGURpwI+fUrxYLPd7ReL/e5w/JZB3KAWWNWHuhlsFzPbtisV257Zp3NB6gziVIP1uANaHfeR9D9se1dMwjCIt6g17eTuFrE6VO60Y/XTj1jxJVHtVbV/C/hq86RdmHlWccOi1+K3srk6v2hH5kVkSzZxo+fSLxGc21kYnF4DHpkfVkLEtWW3Q2o/BPyQ6B1mfcBL/DaorzdqY5+o9DGD22g8WCSLV2ZbXuL6OH6uMjQ7PsNzlfMs2TuMee658vELoeFdm5Kc4XHIj7KJD+6q/YoMeMXOPVc+Fb9vr75TxC+SiT/0s+vyiHsPy7agNOLe8uF/lSZVBk9teFm+nM7LDZmqP6H4Rh5x53XqdiBDPsu9zXpXvJn0jDmgIj7b5e39rvjATVref2+pXuUqibjZSh5yXpOz3N7lf/F8R9yZU28lkvtae1HAFYhdfDBPmYUnJYu9OOfvzSzeT9MOWV+eTxa7cs7//sP6e86x9evmYX24n05Uwj+uRXhnF596X61elr1DPFix/2tf8r+1/RVPu5XFNHWvOhzX2lrml7/fm8u+Ys9m9uJ0+Ckk3Eo0dqilY7WW7D/eXAXXY8hPkVNPAAAAAAAAAAAAAAAAAAAAAAAAAAAA3uYP8RJF72cZbpsAAAAASUVORK5CYII=' },
  { name: 'Accenture', logo: 'data:image/png;base64,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' },
  { name: 'TCS', logo: 'data:image/jpeg;base64,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' },
  { name: 'Infosys', logo: 'data:image/png;base64,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' },
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