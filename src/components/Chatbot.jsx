import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, MapPin } from 'lucide-react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m here to help you with admissions, courses, and any questions about Avviare International Versity. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    'Admission Process',
    'Course Details',
    'Fee Structure',
    'Placement Records',
    'Contact Information',
    'Campus Tour'
  ];

  const botResponses = {
    'admission process': 'Our admission process is simple and transparent. You can apply online through our website or visit our campus. We offer merit-based admissions with entrance tests for some programs.',
    'course details': 'We offer undergraduate and postgraduate programs in Commerce, Computer Science, Management, Law, Pharmacy, and more. Each program includes industry-relevant curriculum and practical training.',
    'fee structure': 'Our fee structure is competitive and includes scholarships for deserving students. Please contact our admission office at +91-9999999999 for detailed fee information.',
    'placement records': 'We have an excellent placement record with 98% placement rate. Our students are placed in top companies like HDFC, Paytm, Tech Mahindra, and many more.',
    'contact information': 'You can reach us at:\n📞 +91-9999999999\n📧 info@avviare.edu.in\n📍 Avviare International Versity, Noida, UP',
    'campus tour': 'We offer virtual and physical campus tours. Our state-of-the-art facilities include modern labs, library, auditorium, and recreational areas. Would you like to schedule a visit?'
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const lowercaseInput = inputValue.toLowerCase();
      let botResponse = "Thank you for your question! For detailed information, please contact our admission office at +91-9999999999 or email us at info@avviare.edu.in";

      // Find matching response
      Object.keys(botResponses).forEach(key => {
        if (lowercaseInput.includes(key)) {
          botResponse = botResponses[key];
        }
      });

      const botMessage = {
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 0 : [0, -10, 10, -10, 0],
        }}
        transition={{
          rotate: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }
        }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        <div className="chatbot-notification">
          <span>Need Help?</span>
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-avatar">
                <Bot size={20} />
              </div>
              <div className="chatbot-info">
                <h4>Avviare Assistant</h4>
                <span>Online now</span>
              </div>
              <button 
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`message ${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="message-avatar">
                    {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className="message-content">
                    <p>{message.content}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="message bot typing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Replies */}
            <div className="quick-replies">
              {quickReplies.map((reply, index) => (
                <motion.button
                  key={index}
                  className="quick-reply"
                  onClick={() => handleQuickReply(reply)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {reply}
                </motion.button>
              ))}
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                className="send-button"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send size={18} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="chatbot-footer">
              <div className="footer-logo">
                <div className="footer-logo-container">
                  <img src="/Logo.png" alt="Avviare International University" />
                </div>
                <span>Avviare International University</span>
              </div>
              <div className="contact-quick">
                <a href="tel:+919999999999" className="contact-link">
                  <div className="contact-icon-wrapper">
                    <Phone size={20} />
                  </div>
                  <span>Call Now</span>
                </a>
                <a href="mailto:info@avviare.edu.in" className="contact-link">
                  <div className="contact-icon-wrapper">
                    <Mail size={20} />
                  </div>
                  <span>Email</span>
                </a>
                <a href="#" className="contact-link">
                  <div className="contact-icon-wrapper">
                    <MapPin size={20} />
                  </div>
                  <span>Visit</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
