import React, { useState } from 'react';
import './UserProfile.css';
import { MdOutlinePerson3 } from "react-icons/md";

function App() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    has: '',
    gender: '',
    contactNumber: '',
    educationLevel: '',
    termsAccepted: false,
  });

  const [subscriptionStatus, setSubscriptionStatus] = useState('Free Tier'); // Default subscription status
  const appVersion = 'v1.2.3'; // App version

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubscriptionUpgrade = () => {
    setSubscriptionStatus('Premium Tier'); // Simulate subscription upgrade
    alert('Subscription upgraded to Premium!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(userInfo);
  };

  return (
    <div className="dashboard">
      {/* Profile Picture (Logo) */}
      <div className="profile-header">
        <div className="profile-picture">
          <MdOutlinePerson3 className='profile'/>
        </div>
      </div>

      {/* App Version and Subscription Model */}
      <div className="subscription-section">
        <p><strong>Version:</strong> {appVersion}</p>
        <p><strong>Subscription:</strong> {subscriptionStatus}</p>
        {subscriptionStatus === 'Free Tier' && (
          <button onClick={handleSubscriptionUpgrade}>Upgrade to Premium</button>
        )}
      </div>

      {/* User Details Form */}
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          name="username"
          placeholder="User name"
          value={userInfo.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="has"
          placeholder="Has"
          value={userInfo.has}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={userInfo.gender}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact number"
          value={userInfo.contactNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="educationLevel"
          placeholder="Education level"
          value={userInfo.educationLevel}
          onChange={handleInputChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={userInfo.termsAccepted}
            onChange={handleInputChange}
            required
          />
          I accept all the terms and conditions
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Upload Document Section */}
      <div className="upload-section">
        <h2>Upload Document</h2>
        <input type="file" id="documentUpload" />
        <p>Note: The document with stamp of Nepal government or local municipality will only be considered valid.</p>
      </div>

      {/* Footer with "All Rights Reserved" */}
      <div className="footer">
        <p>© 2023 | Sahayogi Haat | All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;