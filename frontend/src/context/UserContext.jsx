// src/context/UserContext.jsx

import React, { createContext, useState, useEffect } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe', // Example static user data
    progress: { solved: 10, total: 50 },
    recentActivity: [
      { title: 'Solved problem 1', status: 'Solved' },
      { title: 'Tried problem 2', status: 'Unsolved' },
    ],
  });

  // You can fetch or update the user data if needed
  useEffect(() => {
    // Optionally fetch user data here if needed
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
