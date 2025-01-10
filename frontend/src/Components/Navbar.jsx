import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">AlgoForge</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Dashboard</a>
        <a href="/editor" className="hover:underline">Code Editor</a>
        <a href="/library" className="hover:underline">Problem Library</a>
        <a href="/profile" className="hover:underline">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
