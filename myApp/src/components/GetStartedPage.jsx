// src/components/GetStartedPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStartedPage.css';
import appLogo from '../assets/logo.png';

const GetStartedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
        <div className="content">
            <img src={appLogo} alt="Logo" className="logo" />
        </div>
        <h2 style={{ color: 'blue' }}>Welcome to सहयोगी Haat</h2>
        <h4>Our Support, Your Success</h4>
        <div className="GetStartedbtn" onClick={() => navigate('/register')}>
            Get Started
        </div>
    </div>
  );
};

export default GetStartedPage;