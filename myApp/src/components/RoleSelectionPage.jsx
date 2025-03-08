// src/components/RoleSelectionPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelectionPage.css';
import appLogo from '../assets/logo.png';

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selection">
      <div className="content">
        <img src={appLogo} alt="Logo" className="logo" />
      </div>
      <h2 className='text'>Choose Your Role</h2>
      <div className="role-options">
        <div className="role-btn" onClick={() => navigate('/app')}>
          Help Seeker
        </div>
        <div className="role-btn" onClick={() => navigate('/Provider')}>
          Help Provider
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;