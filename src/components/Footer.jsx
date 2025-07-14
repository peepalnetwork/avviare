import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Heart
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '/about/about-avviare' },
      { name: 'Admissions', href: '/admission/school-of-computer-science' },
      { name: 'Infrastructure', href: '/infrastructure' },
      { name: 'Placements', href: '/placements/glorious-placements' },
      { name: 'Contact', href: '/contact/contact-us' }
    ],
    'Schools': [
      { name: 'Computer Science', href: '/admission/school-of-computer-science' },
      { name: 'Management', href: '/admission/school-of-management' },
      { name: 'Law', href: '/admission/school-of-law' },
      { name: 'Commerce', href: '/admission/school-of-commerce' },
      { name: 'Applied Science', href: '/admission/school-of-applied-science' }
    ],
    'Support': [
      { name: 'Contact Us', href: '/contact/contact-us' },
      { name: 'Career', href: '/contact/career' },
      { name: 'Student Portal', href: '#' },
      { name: 'Alumni', href: '#' },
      { name: 'Library', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: '#1877f2' },
    { icon: Twitter, href: '#', color: '#1da1f2' },
    { icon: Instagram, href: '#', color: '#e4405f' },
    { icon: Linkedin, href: '#', color: '#0a66c2' },
    { icon: Youtube, href: '#', color: '#ff0000' }
  ];

  return (
    <footer style={{ 
      background: 'var(--gradient-dark)', 
      color: 'white', 
      marginTop: 'auto' 
    }}>
      <div className="container" style={{ padding: '4rem 2rem 2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                background: 'var(--gradient-primary)',
                padding: '0.5rem',
                borderRadius: '12px'
              }}>
                <GraduationCap size={32} color="white" />
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '800',
                background: 'var(--gradient-primary)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Avviare Educations
              </h3>
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              Empowering minds and shaping futures through innovative education, cutting-edge research, 
              and world-class facilities.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={16} color="var(--accent-color)" />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  123 Education Street, Knowledge City, India
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} color="var(--accent-color)" />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  +91 98765 43210
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} color="var(--accent-color)" />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  info@avviareeducations.com
                </span>
              </div>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 style={{ 
                fontSize: '1.1rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link, linkIndex) => (
                  <li key={linkIndex} style={{ marginBottom: '0.75rem' }}>
                    <motion.a
                      href={link.href}
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        color: 'var(--accent-color)',
                        x: 5
                      }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div style={{ 
          height: '1px', 
          background: 'rgba(255, 255, 255, 0.1)', 
          margin: '2rem 0' 
        }} />

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            © 2024 Avviare Educations. Made with <Heart size={16} color="var(--accent-pink)" /> for education.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: social.color,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
