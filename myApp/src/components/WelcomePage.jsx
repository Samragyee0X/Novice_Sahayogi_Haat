import React from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/logo.png';
import './WelcomePage.css';
import Namaste from '../assets/namaste.png';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content">
        <img src={appLogo} alt="Logo" className="logo" />
      </div>
      <div className="content">
        <h4 className='nepali'>"हाम्रो सहयोग, तपाईंको सफलता"</h4>
        <h4 className='english'>Our Support, Your Success</h4>
      </div>
      <div className="content">
        <img src={Namaste} alt="namaste" className='namaste'/>
      </div>
      <div className="content">
        <div className="welcome-btn" onClick={() => navigate('/get-started')}>
            Welcome
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;