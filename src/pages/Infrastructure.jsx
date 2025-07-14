import { motion } from 'framer-motion';import {   Building,   Wifi,   BookOpen,   Microscope,   Users,   Award,  Monitor,  Coffee,  TreePine,  Gamepad2,  Car,  Shield} from 'lucide-react';const Infrastructure = () => {  const facilities = [    {      icon: Building,      title: 'Modern Classrooms',      description: 'Smart classrooms equipped with interactive whiteboards, projectors, and high-speed internet connectivity.',      color: 'var(--primary-color)'    },    {      icon: Microscope,      title: 'Advanced Laboratories',      description: 'State-of-the-art research labs with cutting-edge equipment for all scientific disciplines.',      color: 'var(--accent-pink)'    },    {      icon: BookOpen,      title: 'Digital Library',      description: 'Comprehensive library with over 100,000 books, e-resources, and quiet study spaces.',      color: 'var(--accent-green)'    },    {      icon: Monitor,      title: 'Computer Centers',      description: 'High-performance computing labs with latest software and hardware for all programs.',      color: 'var(--accent-blue)'    },    {      icon: Users,      title: 'Auditoriums',      description: 'Modern auditoriums with advanced audio-visual systems for seminars and cultural events.',      color: 'var(--secondary-color)'    },    {      icon: Coffee,      title: 'Food Courts',      description: 'Hygienic food courts and cafeterias serving nutritious meals and snacks.',      color: 'var(--accent-color)'    },    {      icon: TreePine,      title: 'Green Campus',      description: 'Eco-friendly campus with beautiful gardens, open spaces, and sustainable practices.',      color: 'var(--accent-green)'    },    {      icon: Gamepad2,      title: 'Sports Complex',      description: 'Complete sports facilities including gymnasium, courts, and outdoor playing fields.',      color: 'var(--accent-pink)'    },    {      icon: Wifi,      title: 'Wi-Fi Campus',      description: 'Campus-wide high-speed internet connectivity for seamless digital learning.',      color: 'var(--accent-blue)'    },    {      icon: Car,      title: 'Transportation',      description: 'Safe and reliable transportation services connecting to major city areas.',      color: 'var(--primary-color)'    },    {      icon: Shield,      title: 'Security',      description: '24/7 security with CCTV surveillance ensuring a safe learning environment.',      color: 'var(--accent-color)'    },    {      icon: Award,      title: 'Innovation Hub',      description: 'Dedicated spaces for startups, incubators, and research & development projects.',      color: 'var(--secondary-color)'    }  ];  return (    <div className="infrastructure-page">      {/* Hero Section */}      <section className="hero-section" style={{ minHeight: '70vh' }}>        <div className="container">          <motion.div            initial={{ opacity: 0, y: 30 }}            animate={{ opacity: 1, y: 0 }}            transition={{ duration: 0.8 }}            className="hero-content"            style={{               textAlign: 'center',               color: 'white',               position: 'relative',               zIndex: 2,              padding: '6rem 0 4rem'            }}          >            <motion.div              initial={{ scale: 0 }}              animate={{ scale: 1 }}              transition={{ delay: 0.2, duration: 0.6 }}              className="badge floating"              style={{                 marginBottom: '2rem',                background: 'rgba(255, 255, 255, 0.2)',                backdropFilter: 'blur(10px)',                color: 'white',                border: '1px solid rgba(255, 255, 255, 0.3)',                display: 'inline-flex',                alignItems: 'center',                gap: '0.5rem',                padding: '0.75rem 1.5rem',                borderRadius: '50px',                fontSize: '0.9rem',                fontWeight: '600'              }}            >              <Building size={16} />              World-Class Infrastructure            </motion.div>                        <h1               className="hero-title"              style={{                 fontSize: 'clamp(2.5rem, 6vw, 4rem)',                fontWeight: '900',                lineHeight: '1.1',                marginBottom: '1.5rem',                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'              }}            >              State-of-the-Art{' '}              <span style={{                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #ec4899 100%)',                backgroundClip: 'text',                WebkitBackgroundClip: 'text',                WebkitTextFillColor: 'transparent'              }}>                Learning Environment              </span>            </h1>                        <motion.p              initial={{ opacity: 0 }}              animate={{ opacity: 1 }}              transition={{ delay: 0.4, duration: 0.8 }}              className="hero-subtitle"              style={{                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',                marginBottom: '3rem',                maxWidth: '700px',                margin: '0 auto 3rem',                opacity: 0.95,                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'              }}            >              Experience learning in world-class facilities designed to inspire innovation,               foster collaboration, and support academic excellence.            </motion.p>          </motion.div>        </div>      </section>      {/* Facilities Grid Section */}      <section className="section" style={{ background: 'var(--bg-secondary)' }}>        <div className="container">          <motion.div            initial={{ opacity: 0, y: 30 }}            whileInView={{ opacity: 1, y: 0 }}            transition={{ duration: 0.8 }}            viewport={{ once: true }}            className="section-header"            style={{ textAlign: 'center', marginBottom: '4rem' }}          >            <h2 className="section-title">Campus Facilities</h2>            <p className="section-subtitle">              Explore our comprehensive range of facilities designed to enhance your educational journey.            </p>          </motion.div>                    <div style={{             display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <motion.div
                  key={index}
                  className="modern-card interactive-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  style={{ 
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    className="feature-icon floating-delayed"
                    style={{ 
                      background: facility.color,
                      margin: '0 auto 1.5rem'
                    }}
                  >
                    <IconComponent size={28} />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                  }}>
                    {facility.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {facility.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            {[
              { number: '200+', label: 'Classrooms', icon: Building },
              { number: '50+', label: 'Laboratories', icon: Microscope },
              { number: '100K+', label: 'Library Books', icon: BookOpen },
              { number: '24/7', label: 'Security', icon: Shield }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card pulse-glow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{ 
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <IconComponent 
                    size={40} 
                    style={{ 
                      color: 'var(--primary-color)', 
                      marginBottom: '1rem'
                    }} 
                  />
                  <div style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '900',
                    background: 'var(--gradient-primary)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
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
              Experience Our Campus
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2.5rem', 
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2.5rem'
            }}>
              Schedule a campus tour to see our world-class facilities firsthand and discover why students choose Avviare.
            </p>
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
                cursor: 'pointer'
              }}
            >
              Schedule Campus Tour
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;