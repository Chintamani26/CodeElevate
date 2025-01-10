import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold tracking-wide">
          CodeElevate
        </div>
        
        {/* Navigation Links for Large Screens */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/dashboard" className="hover:text-gray-300 transition duration-200">Dashboard</Link>
          <Link to="/editor" className="hover:text-gray-300 transition duration-200">Code Editor</Link>
          <Link to="/library" className="hover:text-gray-300 transition duration-200">Problem Library</Link>
          <Link to="/profile" className="hover:text-gray-300 transition duration-200">Profile</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-3xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-center space-y-4 py-4 bg-gradient-to-r from-blue-500 to-teal-500">
          <Link to="/dashboard" className="hover:text-gray-300 transition duration-200">Dashboard</Link>
          <Link to="/editor" className="hover:text-gray-300 transition duration-200">Code Editor</Link>
          <Link to="/library" className="hover:text-gray-300 transition duration-200">Problem Library</Link>
          <Link to="/profile" className="hover:text-gray-300 transition duration-200">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
