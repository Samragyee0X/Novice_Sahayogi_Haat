import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import profileLogo from './assets/profile.png';
import ambulanceIcon from './assets/urgent.png';
import optionIcon from './assets/option.png';
import searchIcon from './assets/search.png';

// Capitalize component name to Header
const Header = () => {
  const navigate = useNavigate();

  const handleSOS = () => {
    alert('SOS Alert Sent!');
  };

  const handleUserProfile = (e) => {
    e.preventDefault();
    navigate('/UserProfile'); // Use absolute path
  };

  return (
    <header>
      <div className="option">
        <img src={optionIcon} alt="Option" className="option-logo"/>
      </div>
      <div className="header-left">
        <img src={profileLogo} alt="Profile" className="profile-logo" />
        <p className="profile-text" onClick={handleUserProfile}>User Profile</p>
      </div>
      <div className="icons">
        <div className="search">
          <img src={searchIcon} alt="search" className="search" />
        </div>
        <div className="header-right">
          <button className="sos-btn" onClick={handleSOS}>
            <img src={ambulanceIcon} alt="SOS" className="ambulance-icon" />
            SOS
          </button>
        </div>
      </div>
    </header>
  );
};

// Export with capitalized name
export default Header;