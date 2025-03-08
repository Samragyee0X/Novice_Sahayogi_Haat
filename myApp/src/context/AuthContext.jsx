import { useContext, createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
    // Store in localStorage for persistence
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Check localStorage for existing session on initial load
  const value = {
    user: user || JSON.parse(localStorage.getItem('user')),
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);