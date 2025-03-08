import React from 'react';
import './citizenshipPortal.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <span>Home</span>
        <h1>Assistant Profile</h1>
      </header>

      {/* Citizenship Photos Section */}
      <div className="section">
        <h2>Citizenship Photo</h2>
        <div className="photo-container">
          <div className="photo-item">
            <p>Citizenship photo (Front)</p>
          </div>
          <div className="photo-item">
            <p>Citizenship photo (Back)</p>
          </div>
        </div>
      </div>

      {/* Document Details Section */}
      <div className="section">
        <h2>Document Details</h2>
        <div className="details-container">
          <div className="detail-item">
            <p>Document Type</p>
          </div>
          <div className="detail-item">
            <p>Citizenship Number</p>
          </div>
          <div className="detail-item">
            <p>Document Issued from</p>
          </div>
          <div className="detail-item">
            <p>Issued Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;