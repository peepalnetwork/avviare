import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Award, 
  BookOpen,
  Target,
  Building,
  Briefcase,
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Lightbulb,
  Calendar,
  DollarSign,
  MapPin
} from 'lucide-react';

const SchoolOfManagement = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [programsRef, programsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [highlightsRef, highlightsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const keyHighlights = [
    {
      icon: BookOpen,
      title: "Innovative Teaching Pedagogy",
      description: "Case studies, Live Projects, Workshops, Guest Lectures, Industry Expert talks, Simulations & Management Games",
      color: "var(--primary-color)"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Integrated Industry Oriented Skill Certifications for enhanced employability",
      color: "var(--accent-color)"
    },
    {
      icon: Building,
      title: "Practical Exposure",
      description: "Regular Industrial Visits, Live Projects & Internships for real-world experience",
      color: "var(--accent-blue)"
    },
    {
      icon: Users,
      title: "Personality Development",
      description: "Comprehensive Program for Professional Readiness & Enhancement",
      color: "var(--accent-pink)"
    },
    {
      icon: Target,
      title: "Strong Placement Record",
      description: "Partnerships with Justdial, Airtel, Dabur, Axis Bank, Genpact, Make my trip, Paytm, Tech Mahindra and more",
      color: "var(--accent-green)"
    }
  ];

  const programs = [
    {
      name: "BBA",
      eligibility: "10+2",
      duration: "3 years",
      specializations: ["General Management"],
      valueAdded: ["TALLY", "DATA ANALYST", "DIGITAL LITERACY", "FOREIGN LANGUAGE"],
      description: "Bachelor of Business Administration designed to prepare students for the competitive business world"
    },
    {
      name: "MBA",
      eligibility: "Graduate",
      duration: "2 years",
      specializations: ["HR", "Finance", "Marketing", "International Business", "Operations"],
      valueAdded: ["DIGITAL MARKETING", "PERSONALITY DEVELOPMENT"],
      description: "Master of Business Administration with specialization options for career advancement"
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Top-ranked Management Programs",
      description: "Recognized by UGC, AICTE, and Association of Indian Universities for excellence in management education"
    },
    {
      icon: Lightbulb,
      title: "Future-proof Skills",
      description: "Updated curriculum designed with industry leaders focusing on cutting-edge learning and innovation"
    },
    {
      icon: Briefcase,
      title: "Industry-ready Experience",
      description: "Emphasis on practical learning through internships, case studies, and industry projects"
    },
    {
      icon: DollarSign,
      title: "Affordable Education",
      description: "Low fees with flexible payment options including installments and educational loan assistance"
    }
  ];

  const placementCompanies = [
    "Justdial", "Airtel", "Dabur", "Axis Bank", "Genpact", 
    "Make My Trip", "Paytm", "Tech Mahindra", "Training Basket", "Big Bazaar"
  ];

  return (
    <div className="school-page" style={{ background: 'var(--bg-gradient)' }}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="hero-section"
        style={{
          background: 'var(--gradient-primary)',
          padding: '8rem 0 4rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ 
              textAlign: 'center', 
              color: 'white',
              position: 'relative',
              zIndex: 2
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                marginBottom: '2rem',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              <BarChart3 size={16} />
              Best BBA & MBA College in Noida
            </motion.div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: '800',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              School of Management
            </h1>
            
            <p 
              style={{ 
                fontSize: '1.25rem', 
                marginBottom: '2.5rem',
                maxWidth: '800px',
                margin: '0 auto 2.5rem',
                opacity: 0.9,
                lineHeight: 1.6
              }}
            >
              One of the best BBA and MBA colleges in Noida. Your launchpad for a better management career in today's competitive business world.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'white',
                  color: 'var(--primary-color)',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                <GraduationCap size={20} />
                APPLY NOW
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <BookOpen size={20} />
                Download Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decorations */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(50px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
      </section>

      {/* Key Highlights Section */}
      <section 
        ref={highlightsRef}
        style={{ padding: '5rem 0', background: 'var(--glass-bg)' }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'var(--text-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Key Highlights
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover what makes our School of Management stand out in providing world-class business education
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {keyHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  style={{
                    background: 'var(--card-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${highlight.color}20, ${highlight.color}10)`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    border: `2px solid ${highlight.color}30`
                  }}>
                    <IconComponent size={32} style={{ color: highlight.color }} />
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                  }}>
                    {highlight.title}
                  </h3>
                  
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section 
        ref={programsRef}
        style={{ padding: '5rem 0' }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'var(--text-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Programs
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Choose from our comprehensive BBA and MBA programs designed for success
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '3rem'
          }}>
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={programsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{
                  background: 'var(--card-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '24px',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: `linear-gradient(90deg, var(--primary-color), var(--accent-color))`
                }} />

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'var(--primary-color)',
                    marginBottom: '0.5rem'
                  }}>
                    {program.name}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    marginBottom: '1.5rem'
                  }}>
                    {program.description}
                  </p>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <h4 style={{ 
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      <Clock size={16} style={{ marginRight: '0.5rem' }} />
                      Duration
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{program.duration}</p>
                  </div>

                  <div>
                    <h4 style={{ 
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      <BookOpen size={16} style={{ marginRight: '0.5rem' }} />
                      Eligibility
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{program.eligibility}</p>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    Specializations
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem'
                  }}>
                    {program.specializations.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        style={{
                          background: 'var(--accent-color)20',
                          color: 'var(--accent-color)',
                          padding: '0.5rem 1rem',
                          borderRadius: '25px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          border: `1px solid var(--accent-color)30`
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                  }}>
                    Value Added Courses
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem'
                  }}>
                    {program.valueAdded.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        style={{
                          background: 'var(--primary-color)20',
                          color: 'var(--primary-color)',
                          padding: '0.5rem 1rem',
                          borderRadius: '25px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          border: `1px solid var(--primary-color)30`
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '100%',
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Apply for {program.name}
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '5rem 0', background: 'var(--glass-bg)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'var(--text-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Why Choose Avviare for Management?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Top management institute in Noida with industry-oriented approach and exceptional track record
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  style={{
                    background: 'var(--card-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'left'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <IconComponent size={28} style={{ color: 'white' }} />
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                  }}>
                    {reason.title}
                  </h3>
                  
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Partners Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '1rem',
              background: 'var(--text-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Placement Partners
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Strong industry connections ensuring excellent career opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {placementCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'var(--card-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {company}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '5rem 0',
        background: 'var(--gradient-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ 
              textAlign: 'center', 
              color: 'white',
              position: 'relative',
              zIndex: 2
            }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Ready to Start Your Management Journey?
            </h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Join thousands of successful graduates who chose Avviare for their management education
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'white',
                  color: 'var(--primary-color)',
                  padding: '1.2rem 2.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                <GraduationCap size={20} />
                Apply Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '1.2rem 2.5rem',
                  borderRadius: '50px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <MapPin size={20} />
                Visit Campus
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Background decorations */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
      </section>
    </div>
  );
};

export default SchoolOfManagement;
