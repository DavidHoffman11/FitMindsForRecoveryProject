import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">Fit Minds for Recovery Project</p>
        <div className="social-icons">
          <p className="footer-text">Connect with us!</p>
          <a
            href="https://www.instagram.com/fitmindsforrecoveryproject/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
