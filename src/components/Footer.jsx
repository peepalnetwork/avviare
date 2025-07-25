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
import logo from '/Logo.png';

const Footer = () => {
  const footerSections = {
    'Contact': [
      { name: '123 Education Street, Knowledge City, India', icon: MapPin },
      { name: '+91 98765 43210', icon: Phone },
      { name: 'info@avviareinternational.com', icon: Mail }
    ],
    'Quick Links': [
      { name: 'About Us', href: '/about/about-avviare' },
      { name: 'Admissions', href: '/admission/school-of-computer-science' },
      { name: 'Infrastructure', href: '/infrastructure' },
      { name: 'Placements', href: '/placements/glorious-placements' },
      { name: 'Contact', href: '/contact/contact-us' }
    ],
    'Support': [
      { name: 'Contact Us', href: '/contact/contact-us' },
      { name: 'Career', href: '/contact/career' },
      { name: 'Student Portal', href: '#' },
      { name: 'Alumni', href: '#' },
      { name: 'Library', href: '#' }
    ],
    'Schools': [
      { name: 'Computer Science', href: '/admission/school-of-computer-science' },
      { name: 'Management', href: '/admission/school-of-management' },
      { name: 'Law', href: '/admission/school-of-law' },
      { name: 'Commerce', href: '/admission/school-of-commerce' },
      { name: 'Applied Science', href: '/admission/school-of-applied-science' }
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
    <footer className="footer">
      <div className="container">
        {/* Centered Logo Section */}
        <motion.div
          className="footer-logo-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="logo-container">
            <img src={logo} alt="Avviare International University" />
            <div className="logo-text">Avviare International University</div>
          </div>
          <p className="footer-description">
            Empowering minds and shaping futures through innovative education,
            cutting-edge research, and world-class facilities.
          </p>
          <div className="social-links">
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Content Grid - 4 Columns */}
        <div className="footer-content-grid">
          {Object.entries(footerSections).map(([title, items], index) => (
            <motion.div
              key={title}
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{title}</h4>
              {title === 'Contact' ? (
                <div className="contact-info">
                  {items.map((item, idx) => (
                    <div key={idx} className="contact-item">
                      <item.icon size={16} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="footer-links">
                  {items.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="footer-bottom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            © 2024 Avviare Educations. Made with <Heart size={16} color="var(--accent-gold-light)" /> for education.
          </motion.div>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
