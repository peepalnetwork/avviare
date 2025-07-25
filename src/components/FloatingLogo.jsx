import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FloatingLogo.css';

const FloatingLogo = () => {
  return (
    <div className="floating-logo-container">
      <Link to="/" className="floating-logo-link">
        <img src="/Logo.png" alt="Avviare Educations Logo" className="floating-logo-image" />
      </Link>
    </div>
  );
};

export default FloatingLogo;
