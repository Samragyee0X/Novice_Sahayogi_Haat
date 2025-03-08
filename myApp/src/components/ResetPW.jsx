import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ResetPW.css';
import appLogo from '../assets/app-logo.png';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulated password reset API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Password reset instructions sent to your email');
      navigate('/login');
    } catch (err) {
        setError(err.message || 'Invalid credentials. Please try again.');
    console.error('Login error:', err);
} finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={appLogo} alt="App Logo" className="login-logo" />
          <h2>Reset Password</h2>
          <p>Enter your email to receive reset instructions</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="input-icon">✉️</span>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Instructions'}
          </button>

          <div className="auth-switch">
            Remember your password? <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;