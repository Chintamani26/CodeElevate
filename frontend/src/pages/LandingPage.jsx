// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to CodeElevate</h1>
      <p>Start learning DSA and improve your coding skills</p>
      <div className="cta-buttons">
        <Link to="/dashboard" className="btn">
          Go to Dashboard
        </Link>
        <Link to="/editor" className="btn">
          Start Coding
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
