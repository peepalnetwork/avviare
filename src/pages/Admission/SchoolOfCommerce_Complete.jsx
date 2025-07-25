import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  Play, ArrowDown, CheckCircle, Award, Users, Globe, TrendingUp, 
  BookOpen, Target, Briefcase, GraduationCap, Star, Phone, Mail,
  MapPin, Clock, ChevronDown, ChevronUp, Quote, ExternalLink,
  Building, Trophy, Zap, Heart, Camera, Calendar, Download
} from 'lucide-react';
import './SchoolOfCommerce_Complete.css';

const SchoolOfCommerce = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 23, minutes: 45, seconds: 30 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'bcom-general'
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Testimonial auto-rotation
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, []);

  // Typewriter effect for hero text
  const [displayText, setDisplayText] = useState('');
  const fullText = "Transform Your Future in Commerce & Business";
  
  useEffect(() => {
    let index = 0;
    const typeTimer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  // Data structures
  const keyHighlights = [
    {
      icon: Users,
      title: "Industry Mentorship",
      description: "Learn from top industry leaders and experienced professionals",
      color: "#3B82F6"
    },
    {
      icon: Globe,
      title: "International Curriculum",
      description: "World-class curriculum aligned with global standards",
      color: "#10B981"
    },
    {
      icon: Briefcase,
      title: "100% Placement Assistance",
      description: "Guaranteed placement support with top companies",
      color: "#F59E0B"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Integrated certifications from leading institutions",
      color: "#8B5CF6"
    },
    {
      icon: BookOpen,
      title: "Live Projects",
      description: "Hands-on experience with real-world business challenges",
      color: "#EF4444"
    },
    {
      icon: Target,
      title: "Career Focused",
      description: "Curriculum designed for immediate industry readiness",
      color: "#06B6D4"
    }
  ];

  const courseModules = [
    {
      phase: "Foundation",
      title: "Leadership & Finance Fundamentals",
      duration: "Semester 1-2",
      modules: [
        "Business Communication & Leadership",
        "Financial Accounting Principles",
        "Microeconomics & Market Analysis",
        "Business Mathematics & Statistics",
        "Corporate Law Basics"
      ],
      icon: BookOpen,
      color: "#3B82F6"
    },
    {
      phase: "Advanced",
      title: "Marketing & Analytics Mastery",
      duration: "Semester 3-4",
      modules: [
        "Digital Marketing & E-commerce",
        "Business Analytics & Data Science",
        "Investment & Portfolio Management",
        "International Business Operations",
        "Supply Chain Management"
      ],
      icon: TrendingUp,
      color: "#10B981"
    },
    {
      phase: "Specialization",
      title: "Industry Specialization",
      duration: "Semester 5-6",
      modules: [
        "Fintech & Digital Banking",
        "Startup & Entrepreneurship",
        "Consulting & Strategy",
        "Global Trade & Commerce",
        "Sustainable Business Practices"
      ],
      icon: Target,
      color: "#F59E0B"
    },
    {
      phase: "Capstone",
      title: "Real-World Application",
      duration: "Final Semester",
      modules: [
        "Industry Internship (6 months)",
        "Capstone Business Project",
        "Startup Incubation Program",
        "Professional Certification",
        "Career Placement Program"
      ],
      icon: Trophy,
      color: "#8B5CF6"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Investment Banker at Goldman Sachs",
      image: "/testimonials/priya.jpg",
      quote: "The commerce program at Avviare gave me the practical skills and theoretical knowledge I needed to excel in investment banking. The industry mentorship was invaluable.",
      rating: 5,
      batch: "2022"
    },
    {
      name: "Rahul Gupta",
      role: "Founder, TechStart Solutions",
      image: "/testimonials/rahul.jpg",
      quote: "The entrepreneurship focus and startup incubation program helped me launch my own company. I'm now running a successful fintech startup with 50+ employees.",
      rating: 5,
      batch: "2021"
    },
    {
      name: "Sneha Patel",
      role: "Digital Marketing Manager at Microsoft",
      image: "/testimonials/sneha.jpg",
      quote: "The digital marketing specialization and analytics training prepared me perfectly for the tech industry. The placement support was exceptional.",
      rating: 5,
      batch: "2023"
    }
  ];

  const careerStats = [
    { number: 95, label: "Placement Rate", suffix: "%" },
    { number: 25, label: "Average Package", suffix: "L" },
    { number: 200, label: "Partner Companies", suffix: "+" },
    { number: 50, label: "Countries", suffix: "+" }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="school-commerce-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video autoPlay muted loop>
            <source src="/videos/commerce-hero.mp4" type="video/mp4" />
            <source src="/HeroVideo.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="hero-overlay"></div>
        
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {displayText}
              <motion.span 
                className="cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Join India's premier School of Commerce and unlock unlimited career opportunities in business, finance, and entrepreneurship. Shape your future with industry-ready skills and global exposure.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.button 
                className="btn btn-primary-hero"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} />
                Watch Campus Tour
              </motion.button>
              <motion.button 
                className="btn btn-secondary-hero"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Brochure
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enrollment Form */}
          <motion.div 
            className="enrollment-form"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="form-header">
              <h3>Secure Your Seat Today</h3>
              <p>Limited seats available for 2025 batch</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                >
                  <option value="bcom-general">B.Com (General)</option>
                  <option value="bcom-honours">B.Com (Honours)</option>
                  <option value="mcom">M.Com</option>
                  <option value="mcom-finance">M.Com (Finance)</option>
                </select>
              </div>
              <motion.button 
                type="submit"
                className="btn btn-form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now - Free Counseling
                <ArrowDown size={18} />
              </motion.button>
            </form>

            <div className="form-benefits">
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>100% Placement Guarantee</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Scholarship Available</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={16} />
                <span>Industry Mentorship</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
          <span>Scroll to explore</span>
        </motion.div>
      </section>

      {/* Key Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose Our School of Commerce?</h2>
            <p className="section-subtitle">Experience excellence through our unique approach to commerce education</p>
          </motion.div>

          <div className="highlights-grid">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="highlight-icon" style={{ backgroundColor: highlight.color }}>
                  <highlight.icon size={32} />
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Outline Section */}
      <section className="course-outline-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Comprehensive Course Curriculum</h2>
            <p className="section-subtitle">A meticulously designed 3-year journey from foundation to industry expertise</p>
          </motion.div>

          <div className="course-timeline">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${activeAccordion === index ? 'active' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker" style={{ backgroundColor: module.color }}>
                  <module.icon size={24} />
                </div>
                
                <div className="timeline-content">
                  <div 
                    className="timeline-header"
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                  >
                    <div className="timeline-meta">
                      <span className="phase-badge" style={{ backgroundColor: module.color }}>
                        {module.phase}
                      </span>
                      <span className="duration">{module.duration}</span>
                    </div>
                    <h3>{module.title}</h3>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        className="timeline-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="modules-list">
                          {module.modules.map((moduleItem, moduleIndex) => (
                            <motion.li
                              key={moduleIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: moduleIndex * 0.1 }}
                            >
                              <CheckCircle size={16} />
                              {moduleItem}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="apply-now-section">
        <div className="animated-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>

        <div className="container">
          <motion.div 
            className="apply-content"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Early Bird Admissions Open!</h2>
            <p>Secure your future with special benefits and scholarship opportunities</p>
            
            <div className="urgency-meter">
              <div className="countdown-timer">
                <div className="time-box">
                  <span className="time-number">{timeLeft.days}</span>
                  <span className="time-label">Days</span>
                </div>
                <div className="time-box">
                  <span className="time-number">{timeLeft.hours}</span>
                  <span className="time-label">Hours</span>
                </div>
                <div className="time-box">
                  <span className="time-number">{timeLeft.minutes}</span>
                  <span className="time-label">Min</span>
                </div>
                <div className="time-box">
                  <span className="time-number">{timeLeft.seconds}</span>
                  <span className="time-label">Sec</span>
                </div>
              </div>
              <p className="countdown-text">Early bird offer expires in:</p>
            </div>

            <div className="apply-benefits">
              <div className="benefit">
                <Zap size={20} />
                <span>50% Scholarship Available</span>
              </div>
              <div className="benefit">
                <Trophy size={20} />
                <span>Guaranteed Internship</span>
              </div>
              <div className="benefit">
                <Heart size={20} />
                <span>Personal Mentor Assigned</span>
              </div>
            </div>

            <motion.button 
              className="btn btn-apply-cta"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(245, 158, 11, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.3)",
                  "0 0 40px rgba(245, 158, 11, 0.6)",
                  "0 0 20px rgba(245, 158, 11, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              Apply Now - Limited Seats
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">Hear from our alumni who are making their mark in the industry</p>
          </motion.div>

          <div className="testimonials-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <Quote size={40} className="quote-icon" />
                  <p className="testimonial-quote">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="testimonial-author">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${testimonials[currentTestimonial].name}&background=3B82F6&color=fff&size=80`;
                      }}
                    />
                    <div className="author-info">
                      <h4>{testimonials[currentTestimonial].name}</h4>
                      <p>{testimonials[currentTestimonial].role}</p>
                      <div className="rating">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <span className="batch">Batch of {testimonials[currentTestimonial].batch}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes & Placement Partners */}
      <section className="placement-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Career Outcomes & Placements</h2>
            <p className="section-subtitle">Our graduates join the world's leading companies</p>
          </motion.div>

          {/* Career Stats */}
          <div className="career-stats">
            {careerStats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">
                  <CountUp end={stat.number} duration={2} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolOfCommerce;
