import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import App from './App';
import Login from './components/Login';
import './index.css';
import Register from './components/Register'
import ResetPassword from './components/ResetPW';


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
        <Route path="/register" element={<Register />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
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