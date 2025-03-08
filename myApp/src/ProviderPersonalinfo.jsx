import React from 'react';
import './ProviderPersonalinfo.css';

function App() {
  return (
    <div className="app">
      <h1>Rating Points</h1>

      {/* Personal Information Section */}
      <div className="section">
        <h2>Personal Information</h2>
        <ul>
          <li>Full Name</li>
          <li>Gender</li>
          <li>Age</li>
          <li>Education level and qualification</li>
        </ul>
      </div>

      {/* Contact Number Section */}
      <div className="section">
        <h2>Contact Number</h2>
      </div>

      {/* Upload Document Section */}
      <div className="section">
        <h2>Upload Document</h2>
        <p>Portal for uploading document</p>
        <div className="note">
          <p>
            <strong>Note:</strong> The document with stamp of Nepal government or local municipality will only be considered valid.
          </p>
          <p>
            <strong>cumf:</strong> Aqra arcan et suffix aneuifanah onu vqaah annara ma au unha ** YO NEPALI FONT MA HAI**
          </p>
        </div>
      </div>
      {/* Footer with "All Rights Reserved" */}
      <div className="footer">
        <p>© 2025 | Sahayogi Haat | All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;