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

  const handleSOS = async () => {
    try {
      // Get current location
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const { latitude, longitude } = position.coords;
      const locationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
      const message = `Emergency! I need help at this location: ${locationLink}`;

      // Send SMS to emergency contacts
      const phoneNumbers = '100,1234567890'; // Add emergency numbers separated by commas
      window.open(`sms:${phoneNumbers}?body=${encodeURIComponent(message)}`);
      
      // Initiate phone call to police
      window.open('tel:100');
      
      // Send alert to your backend (replace with your API endpoint)
      await fetch('https://your-api-endpoint.com/emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude,
          longitude,
          timestamp: new Date().toISOString()
        })
      });

    } catch (error) {
      console.error('Error handling SOS:', error);
      alert('Failed to send emergency alert. Please check permissions and connection.');
    }
  };
  const handleLocationClick = async () => {
    try {
      // Get user's current location
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      
      // Create mock locations around the user's current position
      const mockLocations = Array.from({ length: 5 }).map((_, index) => ({
        id: index,
        latitude: position.coords.latitude + (Math.random() - 0.5) * 0.01,
        longitude: position.coords.longitude + (Math.random() - 0.5) * 0.01,
        name: `User ${index + 1}`,
        type: 'mock'
      }));
  
      // Combine user location with mock data
      const allLocations = [
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          name: 'Your Location',
          type: 'current'
        },
        ...mockLocations
      ];
  
      // Create Google Maps URL with markers
      const baseUrl = 'https://www.google.com/maps/dir/';
      const markers = allLocations.map(loc => 
        `markers=color:${loc.type === 'current' ? 'green' : 'red'}%7Clabel:${
          loc.type === 'current' ? 'YOU' : loc.name
        }%7C${loc.latitude},${loc.longitude}`
      ).join('&');
      
      window.open(`${baseUrl}?${markers}`);
  
    } catch (error) {
      console.error('Error handling location:', error);
      alert('Failed to load locations. Please check permissions and connection.');
    }
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
        <div className="location" onClick={handleLocationClick}>
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