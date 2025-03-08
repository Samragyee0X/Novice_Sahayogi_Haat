import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="user-profile-container">
      <header className="header">
        <button onClick={() => navigate('/')}>← Home</button>
        <h2>User Profile</h2>
      </header>

      <div className="profile-picture">
        <div className="placeholder" />
      </div>

      <form className="profile-form">
        <input type="text" placeholder="User name" />
        <input type="text" placeholder="Has" />
        <input type="text" placeholder="Gender" />
        <input type="text" placeholder="Contact number" />
        <input type="text" placeholder="Education level" />

        <div className="terms">
          <label>
            <input type="checkbox" /> I accept all the terms and conditions
          </label>
        </div>

        <section className="upload-section">
          <h3>Upload Document</h3>
          <button className="upload-button">Portal for uploading document →</button>
        </section>

        <p className="note">
          Note: The document with stamp of Nepal government or local municipality will only be considered valid.
        </p>
        <p className="note-nepali">
          टिप्पणी: नेपाल सरकार वा स्थानीय नगरपालिका को छाप भएको कागजात मात्र वैध मानिन्छ।
        </p>
      </form>
    </div>
  );
};

export default UserProfile;