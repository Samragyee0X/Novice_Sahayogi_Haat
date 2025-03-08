import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import App from './App';
import Login from './components/Login';
import './index.css';
import Register from './components/Register'
import ResetPassword from './components/ResetPW';
import FindSathi from './FindSathi';
import UserProfile from './UserProfile';
import WelcomePage from './components/WelcomePage';
import GetStartedPage from './components/GetStartedPage';
import RoleSelectionPage from './components/RoleSelectionPage';


// Create a Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

// Main application router
const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/select-role" element={<RoleSelectionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerP" element={<RegisterP />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/app" element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          } />
          <Route path="/Provider" element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          } />
          <Route path="/FindSathi" element={
            <ProtectedRoute>
              <FindSathi />
            </ProtectedRoute>
          } />
          <Route path="/UserProfile" element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);