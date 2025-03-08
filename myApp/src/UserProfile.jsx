import React, { useState } from 'react';
import './UserProfile.css';
import { MdOutlinePerson3 } from "react-icons/md";

function App() {
  const [userInfo] = useState({
    username: '',
    has: '',
    gender: '',
    contactNumber: '',
    educationLevel: '',
    termsAccepted: false,
  });

  const [subscriptionStatus, setSubscriptionStatus] = useState('Free Tier'); // Default subscription status
  const appVersion = 'v1.2.3'; // App version



  const handleSubscriptionUpgrade = () => {
    setSubscriptionStatus('Premium Tier'); // Simulate subscription upgrade
    alert('Subscription upgraded to Premium!');
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
      <div className="user-info">
        <div className="info-item">
          <label>Username:</label>
          <p>{userInfo.username}</p>
        </div>

        <div className="info-item">
          <label>Has:</label>
          <p>{userInfo.has}</p>
        </div>

        <div className="info-item">
          <label>Gender:</label>
          <p>{userInfo.gender}</p>
        </div>

        <div className="info-item">
          <label>Contact Number:</label>
          <p>{userInfo.contactNumber}</p>
        </div>

        <div className="info-item">
          <label>Education Level:</label>
          <p>{userInfo.educationLevel}</p>
        </div><br></br>
      </div>
      {/* Upload Document Section */}
      <div className="upload-section">
        <h2>Upload Document</h2>
        <input type="file" id="documentUpload" />
        <p>Note: The document with stamp of Nepal government or local municipality will only be considered valid.</p>
      </div>

      {/* Footer with "All Rights Reserved" */}
      <div className="footer">
        <p>© 2025 | Sahayogi Haat | All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;