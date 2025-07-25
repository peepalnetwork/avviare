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
  Search,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import OurStory from '../components/OurStory';
import '../styles/NewHome.css';
import '../styles/CrowdedHome.css';

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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      specialization: 'Strategic Management, Innovation',
      experience: '20+ Years',
      achievements: ['McKinsey & Company Former Partner', 'Author of 5 Business Books', 'TEDx Speaker']
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Head of Research & Innovation',
      education: 'PhD Stanford, MS MIT',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      specialization: 'AI & Machine Learning, Data Science',
      experience: '15+ Years',
      achievements: ['Former Google Research Scientist', '50+ Research Papers', 'AI Excellence Award 2023']
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Director, International Programs',
      education: 'PhD Cambridge, MBA INSEAD',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      specialization: 'Global Strategy, Cross-cultural Management',
      experience: '18+ Years',
      achievements: ['Former UN Consultant', 'Fulbright Scholar', 'Published Author']
    },
    {
      name: 'Prof. Anita Desai',
      position: 'Chair, Entrepreneurship Center',
      education: 'PhD London School of Economics',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      specialization: 'Entrepreneurship, Venture Capital',
      experience: '22+ Years',
      achievements: ['Serial Entrepreneur', 'Angel Investor', 'Forbes 40 Under 40']
    },
    {
      name: 'Dr. Sarah Johnson',
      position: 'Professor of Finance & Economics',
      education: 'PhD Yale, CFA Charter',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      specialization: 'Financial Markets, Investment Strategy',
      experience: '17+ Years',
      achievements: ['Former Wall Street Analyst', 'CFA Institute Speaker', 'Financial Times Columnist']
    },
    {
      name: 'Prof. David Williams',
      position: 'Director, Technology Innovation Lab',
      education: 'PhD MIT, MS Carnegie Mellon',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
      specialization: 'Blockchain, Cybersecurity, EdTech',
      experience: '19+ Years',
      achievements: ['Former Apple Senior Engineer', 'Patent Holder (15 Patents)', 'IEEE Fellow']
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
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop&auto=format&q=80',
      excerpt: 'NIRF Rankings 2024 places Avviare at the top for innovation and research output.',
      description: 'In a landmark achievement, Avviare International University has secured the #1 position among private universities in North India according to the National Institutional Ranking Framework (NIRF) 2024. This recognition highlights our commitment to academic excellence, cutting-edge research, and industry-relevant education. The ranking evaluates institutions based on teaching, learning resources, research output, graduation outcomes, and perception metrics.'
    },
    {
      title: '₹500 Crore Industry Partnership Announced',
      date: '2024-01-10',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop&auto=format&q=80',
      excerpt: 'Strategic alliance with 50+ Fortune 500 companies for research and placements.',
      description: 'Avviare International University announces a groundbreaking ₹500 crore industry partnership program, bringing together over 50 Fortune 500 companies. This strategic alliance will revolutionize our research initiatives, provide unprecedented placement opportunities, and ensure our curriculum remains at the forefront of industry requirements. Students will benefit from real-world projects, internships, and direct access to global career opportunities.'
    },
    {
      title: 'New AI Research Center Inaugurated',
      date: '2024-01-05',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop&auto=format&q=80',
      excerpt: '₹100 Crore state-of-the-art facility with quantum computing capabilities.',
      description: 'The newly inaugurated AI Research Center represents a ₹100 crore investment in cutting-edge technology and infrastructure. Equipped with quantum computing capabilities, advanced GPU clusters, and collaborative research spaces, this facility positions Avviare as a leader in artificial intelligence research. The center will host international collaborations, breakthrough research projects, and provide students with access to the most advanced AI technologies available today.'
    },
    
  ];

  // Industry partnerships
  const industryPartners = [
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' },
    { name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png' },
    { name: 'IBM', logo: 'https://img.icons8.com/color/96/ibm.png' },
    { name: 'Infosys', logo: 'https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo.png' },
    { name: 'TCS', logo: 'https://manifest-media.in/cover/prev/icukhsriq0i812n1fl0vgr5k9s-20240920101738.Medi.jpeg' }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: 'Global Leadership Summit 2024',
      date: '2024-09-15',
      time: '09:00 AM',
      venue: 'Main Auditorium',
      speakers: ['Bill Gates', 'Sundar Pichai', 'Satya Nadella'],
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop'
    },
    {
      title: 'Startup Pitch Competition',
      date: '2024-10-20',
      time: '02:00 PM',
      venue: 'Innovation Hub',
      prize: '₹50 Lakh',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=200&fit=crop'
    },
    {
      title: 'International Conference on AI',
      date: '2024-08-25',
      time: '10:00 AM',
      venue: 'Research Center',
      participants: '500+ Global Experts',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop'
    },
    {
      title: 'Industry Connect & Career Fair 2024',
      date: '2024-11-05',
      time: '11:00 AM',
      venue: 'Campus Central Plaza',
      speakers: ['Top HR Directors from Fortune 500 Companies'],
      participants: '200+ Companies Participating',
      prize: 'Direct Interview Opportunities',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop&auto=format&q=80'
    },
    {
      title: 'Tech Innovation Hackathon 2024',
      date: '2024-12-10',
      time: '09:00 AM',
      venue: 'Technology Center',
      participants: '1000+ Developers',
      prize: '₹1 Crore Prize Pool',
      speakers: ['Tech Leaders from FAANG Companies'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop&auto=format&q=80'
    },
    {
      title: 'International Research Symposium',
      date: '2024-12-18',
      time: '08:30 AM',
      venue: 'Research Complex',
      participants: '300+ Research Scholars',
      speakers: ['Nobel Laureates', 'Research Directors from Top Universities'],
      prize: 'Research Grant Awards',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&auto=format&q=80'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  // Auto-rotate news
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsUpdates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsUpdates.length]);

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
            🎉 Admissions Open 2025 • 500+ Fortune Companies Recruiting • 
            ₹50L+ Average Package • World-Class Faculty • Research Excellence • 
            Global Alumni Network • Industry 4.0 Ready Curriculum • 
            State-of-Art Infrastructure • 100% Placement Assistance • 
          </div>
        </div>
      </section>

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

      {/* Our Story Section */}
      <OurStory />

      {/* Faculty Spotlight Section */}
      <section className="faculty-spotlight-section">
        <div className="container">
          <motion.div 
            className="section-header-enhanced"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Meet Our World-Class Faculty</h2>
            <p>Learn from industry leaders, researchers, and innovators who are shaping the future</p>
          </motion.div>

          <div className="faculty-grid">
            {facultySpotlight.map((faculty, index) => (
              <motion.div
                key={index}
                className="faculty-card-enhanced"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="faculty-image-container">
                  <img src={faculty.image} alt={faculty.name} />
                  <div className="faculty-overlay">
                    <div className="experience-badge">{faculty.experience}</div>
                  </div>
                </div>
                <div className="faculty-content">
                  <h3>{faculty.name}</h3>
                  <p className="faculty-position">{faculty.position}</p>
                  <p className="faculty-education">{faculty.education}</p>
                  <p className="faculty-specialization">{faculty.specialization}</p>
                  <div className="faculty-achievements">
                    {faculty.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">
                        <CheckCircle size={12} />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="success-stories-section">
        <div className="container">
          <motion.div 
            className="section-header-enhanced"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2>Success Stories That Inspire</h2>
            <p>From classroom to boardroom - see how our alumni are making their mark globally</p>
          </motion.div>

          <div className="success-stories-carousel">
            <motion.div 
              className="story-card-main"
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="story-image">
                <img src={successStories[currentTestimonial].image} alt={successStories[currentTestimonial].name} />
                <div className="salary-badge">{successStories[currentTestimonial].salary}</div>
              </div>
              <div className="story-content">
                <h3>{successStories[currentTestimonial].name}</h3>
                <p className="story-program">{successStories[currentTestimonial].program}</p>
                <p className="story-achievement">{successStories[currentTestimonial].achievement}</p>
                <blockquote>"{successStories[currentTestimonial].quote}"</blockquote>
                <div className="story-journey">
                  <span className="previous-role">From: {successStories[currentTestimonial].previousRole}</span>
                  <ArrowRight size={16} />
                  <span className="current-role">To: {successStories[currentTestimonial].achievement}</span>
                </div>
              </div>
            </motion.div>

            <div className="story-thumbnails">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className={`story-thumbnail ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                  <img src={story.image} alt={story.name} />
                  <div className="thumbnail-info">
                    <h4>{story.name}</h4>
                    <p>{story.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Achievements */}
      <section className="news-achievements-section">
        <div className="container-full">
          <div className="news-grid">
            <div className="news-sidebar">
              <h3>Latest Updates</h3>
              {newsUpdates.map((news, index) => (
                <div
                  key={index}
                  className={`news-item ${index === currentNews ? 'active' : ''}`}
                  onClick={() => setCurrentNews(index)}
                >
                  <div className="news-index">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="news-item-content">
                    <h4>{news.title}</h4>
                    <span className="news-date">{news.date}</span>
                    <span className="news-category">{news.category}</span>
                  </div>
                </div>
              ))}
            </div>

            <motion.div 
              className="news-main-card"
              key={currentNews}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="news-image">
                <img src={newsUpdates[currentNews].image} alt={newsUpdates[currentNews].title} />
                <div className="news-category-badge">{newsUpdates[currentNews].category}</div>
              </div>
              <div className="news-content">
                <h3>{newsUpdates[currentNews].title}</h3>
                <p>{newsUpdates[currentNews].excerpt}</p>
                <div className="news-description">
                  <p>{newsUpdates[currentNews].description || "Stay updated with the latest developments, achievements, and announcements from Avviare International University. Our institution continues to set new benchmarks in education excellence and innovation."}</p>
                </div>
                <div className="news-meta">
                  <span>{newsUpdates[currentNews].date}</span>
                  <button className="read-more-btn">
                    Read More <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="industry-partners-section">
        <div className="container">
          <h2>Trusted by Industry Leaders</h2>
          <div className="partners-carousel">
            <div className="partners-track">
              {[...industryPartners, ...industryPartners].map((partner, index) => (
                <div key={index} className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events-section">
        <div className="container">
          <h2>Don't Miss These Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="event-card"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-date">
                    <span className="date">{new Date(event.date).getDate()}</span>
                    <span className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                  </div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <div className="event-time">
                      <Clock size={16} />
                      {event.time}
                    </div>
                    <div className="event-venue">
                      <MapPin size={16} />
                      {event.venue}
                    </div>
                  </div>
                  {event.speakers && (
                    <div className="event-speakers">
                      <strong>Speakers:</strong> {event.speakers.join(', ')}
                    </div>
                  )}
                  {event.prize && (
                    <div className="event-prize">
                      <strong>Prize Pool:</strong> {event.prize}
                    </div>
                  )}
                  <button className="register-btn">
                    Register Now <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-mega">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2>Ready to Join the Leaders of Tomorrow?</h2>
            <p>Don't wait - your future starts with the decision you make today</p>
            <div className="cta-actions">
              <button className="cta-primary">
                Apply Now <ArrowRight size={20} />
              </button>
              <button className="cta-secondary">
                <Phone size={16} />
                Call Admissions: +91-9999999999
              </button>
              <button className="cta-tertiary">
                <Calendar size={16} />
                Schedule Campus Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
