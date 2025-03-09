import React from 'react';
import './SOSPage.css';

const SOSPage = () => {
  return (
    <div className="sos-static-container">
      <div className="sos-static-content">
        <div className="sos-static-header">
          <h1>Emergency Alert Activated</h1>
          <h2>Sending Live Location to Emergency Contacts</h2>
        </div>
        
        <div className="sos-static-status">
          <div className="sos-static-spinner"></div>
          <div className="sos-static-messages">
            <p>📡 Sharing location with emergency services...</p>
            <p>📞 Calling 100 (Police)...</p>
            <p>📍 GPS Coordinates: 27.7172° N, 85.3240° E</p>
          </div>
        </div>

        <div className="sos-static-footer">
          <p className="warning-text">Do not close this page until help arrives!</p>
        </div>
      </div>
    </div>
  );
};

export default SOSPage;