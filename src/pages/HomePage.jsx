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
  Shield,
  TrendingUp,
  Brain,
  Lightbulb,
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Camera,
  Video,
  Newspaper,
  ChevronRight,
  Download,
  ExternalLink,
  MessageSquare,
  ThumbsUp,
  Eye,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import OurStory from '../components/OurStory';
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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);

  // Enhanced Stats with more impressive numbers
  const stats = [
    { icon: Users, value: 25000, label: 'Global Alumni Network', suffix: '+', color: '#3b82f6' },
    { icon: GraduationCap, value: 99.2, label: 'Graduate Success Rate', suffix: '%', color: '#10b981' },
    { icon: Trophy, value: 150, label: 'Industry Awards', suffix: '+', color: '#f59e0b' },
    { icon: BookOpen, value: 350, label: 'Research Publications', suffix: '+', color: '#8b5cf6' },
    { icon: Globe, value: 45, label: 'Countries Represented', suffix: '+', color: '#ef4444' },
    { icon: Building, value: 12, label: 'Campus Locations', suffix: '+', color: '#06b6d4' }
  ];

  // Employee/Faculty profiles with diverse backgrounds
  const facultySpotlight = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Dean, School of Business',
      education: 'PhD Harvard, MBA Wharton',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      specialization: 'Strategic Management, Innovation',
      experience: '20+ Years',
      achievements: ['McKinsey & Company Former Partner', 'Author of 5 Business Books', 'TEDx Speaker']
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Head of Research & Innovation',
      education: 'PhD Stanford, MS MIT',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      specialization: 'AI & Machine Learning, Data Science',
      experience: '15+ Years',
      achievements: ['Former Google Research Scientist', '50+ Research Papers', 'AI Excellence Award 2023']
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Director, International Programs',
      education: 'PhD Cambridge, MBA INSEAD',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      specialization: 'Global Strategy, Cross-cultural Management',
      experience: '18+ Years',
      achievements: ['Former UN Consultant', 'Fulbright Scholar', 'Published Author']
    },
    {
      name: 'Prof. Anita Desai',
      position: 'Chair, Entrepreneurship Center',
      education: 'PhD London School of Economics',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      specialization: 'Entrepreneurship, Venture Capital',
      experience: '22+ Years',
      achievements: ['Serial Entrepreneur', 'Angel Investor', 'Forbes 40 Under 40']
    }
  ];

  // Student success stories with real achievements
  const successStories = [
    {
      name: 'Arjun Patel',
      program: 'MBA 2023',
      achievement: 'Goldman Sachs Investment Banking',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
      quote: 'The rigorous curriculum and industry connections at Avviare opened doors I never imagined possible.',
      salary: '₹45 LPA',
      previousRole: 'Software Engineer'
    },
    {
      name: 'Sneha Gupta',
      program: 'MS Computer Science 2022',
      achievement: 'Microsoft Principal Engineer',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
      quote: 'The research opportunities and mentorship prepared me for leadership in tech innovation.',
      salary: '₹55 LPA',
      previousRole: 'Junior Developer'
    },
    {
      name: 'Rohit Singh',
      program: 'Executive MBA 2023',
      achievement: 'Founded TechCorp (₹100Cr Valuation)',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      quote: 'Avviare taught me to think like a global leader while staying rooted in innovation.',
      salary: 'Entrepreneur',
      previousRole: 'Operations Manager'
    }
  ];

  // Recent news and achievements
  const newsUpdates = [
    {
      title: 'Avviare Ranked #1 Private University in North India',
      date: '2024-01-15',
      category: 'Achievement',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
      excerpt: 'NIRF Rankings 2024 places Avviare at the top for innovation and research output.'
    },
    {
      title: '₹500 Crore Industry Partnership Announced',
      date: '2024-01-10',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      excerpt: 'Strategic alliance with 50+ Fortune 500 companies for research and placements.'
    },
    {
      title: 'New AI Research Center Inaugurated',
      date: '2024-01-05',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      excerpt: '₹100 Crore state-of-the-art facility with quantum computing capabilities.'
    }
  ];

  // Industry partnerships
  const industryPartners = [
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' },
    { name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png' },
    { name: 'IBM', logo: 'https://img.icons8.com/color/96/ibm.png' },
    { name: 'Infosys', logo: 'https://img.icons8.com/color/96/infosys.png' },
    { name: 'TCS', logo: 'https://img.icons8.com/color/96/tcs.png' }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: 'Global Leadership Summit 2024',
      date: '2024-02-15',
      time: '09:00 AM',
      venue: 'Main Auditorium',
      speakers: ['Bill Gates', 'Sundar Pichai', 'Satya Nadella'],
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop'
    },
    {
      title: 'Startup Pitch Competition',
      date: '2024-02-20',
      time: '02:00 PM',
      venue: 'Innovation Hub',
      prize: '₹50 Lakh',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=200&fit=crop'
    },
    {
      title: 'International Conference on AI',
      date: '2024-02-25',
      time: '10:00 AM',
      venue: 'Research Center',
      participants: '500+ Global Experts',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop'
    }
  ];

  // Research highlights
  const researchHighlights = [
    {
      title: 'Breakthrough in Quantum Computing',
      researcher: 'Dr. Amit Kumar Team',
      publication: 'Nature Physics',
      impact: 'Revolutionizing Cryptography',
      funding: '₹25 Crore'
    },
    {
      title: 'Sustainable Energy Solutions',
      researcher: 'Prof. Sarah Williams',
      publication: 'Science Magazine',
      impact: 'Clean Energy for Rural India',
      funding: '₹15 Crore'
    },
    {
      title: 'AI-Powered Healthcare',
      researcher: 'Dr. Raj Malhotra',
      publication: 'IEEE Transactions',
      impact: 'Early Disease Detection',
      funding: '₹20 Crore'
    }
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
      content: 'The business acumen and leadership skills I developed at Avviare have been instrumental in my career growth.',
      avatar: 'SP'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate news
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsUpdates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home crowded-design">
      {/* Dense Hero Section with Multiple Elements */}
      <section className="hero-section-dense">
        <video autoPlay loop muted className="hero-video-background">
          <source src="/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay-gradient"></div>
        
        {/* Floating Animation Elements */}
        <div className="floating-elements">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-icon"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              {i % 6 === 0 && <GraduationCap size={20} />}
              {i % 6 === 1 && <BookOpen size={20} />}
              {i % 6 === 2 && <Trophy size={20} />}
              {i % 6 === 3 && <Star size={20} />}
              {i % 6 === 4 && <Lightbulb size={20} />}
              {i % 6 === 5 && <Brain size={20} />}
            </motion.div>
          ))}
        </div>

        <div className="container">
          <div className="hero-content-grid">
            <motion.div
              className="hero-main-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-badges-cluster">
                <motion.div className="hero-badge ranking" whileHover={{ scale: 1.05 }}>
                  <Trophy size={16} />
                  #1 Private University North India
                </motion.div>
                <motion.div className="hero-badge accreditation" whileHover={{ scale: 1.05 }}>
                  <Award size={16} />
                  NAAC A++ Accredited
                </motion.div>
                <motion.div className="hero-badge global" whileHover={{ scale: 1.05 }}>
                  <Globe size={16} />
                  45+ Country Network
                </motion.div>
              </div>

              <motion.h1 
                className="hero-title-mega"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Transform Your Future at
                <span className="gradient-text"> Avviare International Versity</span>
              </motion.h1>

              <motion.p 
                className="hero-subtitle-rich"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Join 25,000+ global leaders who started their journey here. Experience world-class education, 
                cutting-edge research, and industry partnerships that open doors to extraordinary careers.
              </motion.p>

              <motion.div 
                className="hero-action-cluster"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button 
                  className="btn-hero-primary"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now - Limited Seats <ArrowRight size={20} />
                </motion.button>
                <motion.button 
                  className="btn-hero-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={16} />
                  Watch Campus Tour
                </motion.button>
                <motion.button 
                  className="btn-hero-tertiary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Download Brochure
                </motion.button>
              </motion.div>

              <div className="hero-quick-stats">
                <div className="quick-stat">
                  <div className="stat-number">99.2%</div>
                  <div className="stat-label">Placement Rate</div>
                </div>
                <div className="quick-stat">
                  <div className="stat-number">₹65L</div>
                  <div className="stat-label">Highest Package</div>
                </div>
                <div className="quick-stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Industry Partners</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Side Panel with Live Updates */}
            <motion.div
              className="hero-side-panel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="live-updates-panel">
                <h3>🔴 Live Updates</h3>
                <div className="update-feed">
                  <div className="update-item">
                    <Clock size={14} />
                    <span>New: Microsoft Partnership Announced</span>
                  </div>
                  <div className="update-item">
                    <Trophy size={14} />
                    <span>NIRF Ranking #1 Released</span>
                  </div>
                  <div className="update-item">
                    <Users size={14} />
                    <span>2,500 Applications Received Today</span>
                  </div>
                </div>
              </div>

              <div className="application-widget">
                <h4>Quick Application</h4>
                <form className="quick-form">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone" />
                  <select>
                    <option>Select Program</option>
                    <option>MBA</option>
                    <option>B.Tech</option>
                    <option>M.Tech</option>
                  </select>
                  <button type="submit" className="submit-btn">
                    Get Info Package <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling Text Banner */}
        <div className="scrolling-banner">
          <div className="scrolling-text">
            🎉 Admissions Open 2024 • 500+ Fortune Companies Recruiting • 
            ₹50L+ Average Package • World-Class Faculty • Research Excellence • 
            Global Alumni Network • Industry 4.0 Ready Curriculum • 
            State-of-Art Infrastructure • 100% Placement Assistance • 
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* Dense Stats Grid */}
      <section className="stats-grid-dense" ref={statsRef}>
        <div className="container">
          <div className="stats-container-mega">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card-enhanced"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ '--accent-color': stat.color }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    {statsInView && (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                        decimals={stat.suffix === '%' ? 1 : 0}
                      />
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div className="stat-trend">
                  <TrendingUp size={16} />
                  +{Math.floor(Math.random() * 20) + 10}% this year
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            
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
              <h2 className="section-title">About Avviare International Versity</h2>
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