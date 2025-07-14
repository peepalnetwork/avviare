import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Users, Building, Phone, Award, BookOpen, UserCheck, GraduationCap } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      icon: Users,
      children: [
        { name: 'About Avviare', path: '/about/about-avviare', icon: Building },
        { name: 'Our Leadership', path: '/about/our-leadership', icon: UserCheck },
        { name: 'Our Team', path: '/about/our-team', icon: Users },
        { name: 'Academic Council', path: '/about/academic-council', icon: GraduationCap },
        { name: 'Core Values', path: '/about/core-values', icon: Award },
      ]
    },
    {
      name: 'Admission',
      icon: BookOpen,
      children: [
        { name: 'School of Applied Science', path: '/admission/school-of-applied-science' },
        { name: 'School of Commerce', path: '/admission/school-of-commerce' },
        { name: 'School of Computer Science', path: '/admission/school-of-computer-science' },
        { name: 'School of Education', path: '/admission/school-of-education' },
        { name: 'School of Humanities', path: '/admission/school-of-humanities' },
        { name: 'School of Journalism', path: '/admission/school-of-journalism' },
        { name: 'School of Law', path: '/admission/school-of-law' },
        { name: 'School of Management', path: '/admission/school-of-management' },
        { name: 'School of Pharmacy', path: '/admission/school-of-pharmacy' },
      ]
    },
    {
      name: 'Placements',
      icon: Award,
      children: [
        { name: 'Glorious Placements', path: '/placements/glorious-placements' },
        { name: 'Top Recruiters', path: '/placements/top-recruiters' },
      ]
    },
    { name: 'Infrastructure', path: '/infrastructure', icon: Building },
    {
      name: 'Contact',
      icon: Phone,
      children: [
        { name: 'Contact Us', path: '/contact/contact-us' },
        { name: 'Career', path: '/contact/career' },
      ]
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            <img src="/Logo.png" alt="Avviare Educations Logo" className="logo-image" />
        </Link>
        <div className="navbar-menu">
            {navItems.map((item, index) => (
            <div key={index} className="navbar-item">
                {item.children ? (
                <div className="dropdown">
                    <button
                    className="dropdown-toggle"
                    onClick={() => handleDropdownToggle(index)}
                    onMouseEnter={() => setActiveDropdown(index)}
                    >
                    {item.icon && <item.icon size={18} />}
                    <span>{item.name}</span>
                    <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                    </button>
                    <AnimatePresence>
                    {activeDropdown === index && (
                        <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        >
                        {item.children.map((child, childIndex) => (
                            <Link
                            key={childIndex}
                            to={child.path}
                            className="dropdown-item"
                            onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                            }}
                            >
                            {child.icon && <child.icon size={16} />}
                            <span>{child.name}</span>
                            </Link>
                        ))}
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                ) : (
                <Link
                    to={item.path}
                    className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                >
                    {item.icon && <item.icon size={18} />}
                    <span>{item.name}</span>
                </Link>
                )}
            </div>
            ))}
        </div>

        <div className="navbar-toggle-container">
            <motion.button
                className="navbar-toggle"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isOpen && (
            <motion.div 
                className="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                 {navItems.map((item, index) => (
                    <div key={index} className="mobile-nav-item">
                        {/* Logic for mobile items can be added here if different from desktop */}
                        <Link to={item.path || '#'} onClick={() => setIsOpen(false)}>{item.name}</Link>
                    </div>
                 ))}
            </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
