import React from 'react';
import './Footer.css';

import { useNavigate } from 'react-router-dom';
import { FiHome, FiBell } from 'react-icons/fi';
import {GiSpeaker} from "react-icons/gi";
import {FaMicrophone} from "react-icons/fa";
import {RiCustomerService2Line} from "react-icons/ri"

const Footer = () => {
  
  const navigate = useNavigate();
  const handleOptions = (e) => {
    e.preventDefault();
    navigate('/UserOrderDetail');
  }
  return (
    <footer className="app-footer">
      <nav className="bottom-nav">
        <div className="nav-item">
          <FiHome className="nav-icon" />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <GiSpeaker className="nav-icon" />
          <span>Speaker</span>
        </div>
        <div className="nav-item">
          <FaMicrophone className="nav-icon" />
          <span>Mic</span>
        </div>
        <div className="nav-item" onClick={handleOptions}>
          <FiBell className="nav-icon" />
          <span>notification</span>
        </div>
        <div className="nav-item">
          <RiCustomerService2Line className="nav-icon" />
          <span>Customer Care</span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;