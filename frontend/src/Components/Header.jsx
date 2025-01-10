import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">CodeElevate</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-400 transition duration-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/editor"
                className="hover:text-blue-400 transition duration-300"
              >
                Code Editor
              </Link>
            </li>
            <li>
              <Link
                to="/library"
                className="hover:text-blue-400 transition duration-300"
              >
                Problem Library
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-blue-400 transition duration-300"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
