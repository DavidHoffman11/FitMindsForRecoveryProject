import React from 'react';
import './Footer.css';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Fit Minds for Recovery Project. All rights reserved.</p>
        <div className="social-icons">
            <p>Connect with us!</p>
            <a 
                href="https://www.instagram.com/fitmindsforrecoveryproject/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaInstagram className="instagram-icon" />
            </a>
        </div>
      </div>
    </div>
  );
};