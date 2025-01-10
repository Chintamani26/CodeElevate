import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" className="hover:text-gray-400 transition duration-200">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-gray-400 transition duration-200">LinkedIn</a>
          <a href="https://twitter.com" className="hover:text-gray-400 transition duration-200">Twitter</a>
        </div>
        <p className="text-sm">&copy; 2025 CodeElevate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
