import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play, Pause } from 'lucide-react';
import '../styles/OurStory.css';

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const videoCards = [
    {
      id: 'faculty',
      title: 'Our Faculty',
      description: 'Our world-class faculty addresses real-world business challenges through innovative, cutting-edge research.',
      videoSrc: '/HeroVideo.mp4',
      buttonText: 'Learn More',
      link: '/about/our-team'
    },
    {
      id: 'research',
      title: 'Our Research',
      description: 'Rigorous, relevant research that makes businesses function better and shapes tomorrow\'s leaders.',
      videoSrc: '/HeroVideo2.mp4',
      buttonText: 'Learn More',
      link: '/about/academic-council'
    },
    {
      id: 'alumni',
      title: 'Our Alumni',
      description: 'A powerful network of leaders who are driving transformative change to make lives better on the global stage.',
      videoSrc: '/HeroVideo.mp4',
      buttonText: 'Learn More',
      link: '/about/our-leadership'
    }
  ];

  return (
    <section className="our-story-section" ref={ref}>
      <div className="our-story-container">
        {/* Story Content */}
        <motion.div 
          className="story-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="story-header">
            <motion.span 
              className="story-tagline"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The future belongs to those who create it.
            </motion.span>
            <motion.h2 
              className="story-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our Story
            </motion.h2>
          </div>
          
          <motion.p 
            className="story-description"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Avviare International Versity was founded to meet the growing demand for a world-class, 
            research-driven educational institution in India. Established by visionary leaders from 
            academia and the industry, Avviare develops global talent who can navigate complex 
            challenges across multiple disciplines. We emphasize strong connections with industry, 
            researchers, policymakers, and the government to ensure a highly relevant and rigorous 
            curriculum. Our innovative programmes foster promising leaders with the knowledge, 
            character, and foresight needed to drive meaningful impact across industries and 
            geographies worldwide.
          </motion.p>
        </motion.div>

        {/* Video Cards Grid */}
        <motion.div 
          className="video-cards-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {videoCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="video-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="video-container">
                <video
                  className="card-video"
                  muted
                  loop
                  playsInline
                  ref={(videoRef) => {
                    if (videoRef) {
                      if (hoveredCard === card.id) {
                        videoRef.play();
                      } else {
                        videoRef.pause();
                        videoRef.currentTime = 0;
                      }
                    }
                  }}
                >
                  <source src={card.videoSrc} type="video/mp4" />
                </video>
                
                <div className="video-overlay">
                  <div className="play-indicator">
                    {hoveredCard === card.id ? (
                      <Pause size={24} />
                    ) : (
                      <Play size={24} />
                    )}
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                
                <motion.a
                  href={card.link}
                  className="card-button"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
