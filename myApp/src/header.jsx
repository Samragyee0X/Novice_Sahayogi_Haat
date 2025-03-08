import React from 'react';
import './Header.css'; // Create this CSS file
import profileLogo from './assets/profile.png';
import ambulanceIcon from './assets/urgent.png';
import optionIcon from './assets/option.png';
import searchIcon from './assets/search.png';

const header = () => {
  const handleSOS = () => {
    alert('SOS Alert Sent!');
  };

  return (
    <header>
      <div className="option">
        <img src={optionIcon} alt="Option" className= "option-logo"/>
      </div>
      <div className="header-left">
        <img src={profileLogo} alt="Profile" className="profile-logo" />
        <a href="#" className="profile-text">User Profile</a>
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

export default header;