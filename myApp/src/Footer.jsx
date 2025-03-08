import React from 'react';
import './Footer.css';
import { FiHome, FiSearch, FiBell, FiMessageSquare } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="app-footer">
      <nav className="bottom-nav">
        <div className="nav-item">
          <FiHome className="nav-icon" />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <FiSearch className="nav-icon" />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <FiBell className="nav-icon" />
          <span>Notifications</span>
        </div>
        <div className="nav-item">
          <FiMessageSquare className="nav-icon" />
          <span>Chat</span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;