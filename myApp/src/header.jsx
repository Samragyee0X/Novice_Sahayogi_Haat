import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import profileLogo from './assets/profile.png';
import ambulanceIcon from './assets/urgent.png';
import optionIcon from './assets/option.png';
import locationIcon from './assets/current_location.png';

// Capitalize component name to Header
const Header = () => {
  const navigate = useNavigate();

  const handleSOS = () => {
    alert('SOS Alert Sent!');
  };

  const handleTerms = (e) => {
    e.preventDefault();
    navigate('/Terms'); // Use absolute path
  };

  const handleUserProfile = (e) => {
    e.preventDefault();
    navigate('/UserProfile'); // Use absolute path
  };

  return (
    <header>
      <div className="option" onClick={handleTerms}>
        <img src={optionIcon} alt="Option" className="option-logo"/>
      </div>
      <div className="header-left">
        <img src={profileLogo} alt="Profile" className="profile-logo" />
        <p className="profile-text" onClick={handleUserProfile}>User Profile</p>
      </div>
      <div className="icons">
        <div className="location">
          <img src={locationIcon} alt="location" className="location" />
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