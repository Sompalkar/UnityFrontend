// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold mb-2 md:mb-0">Hacker News</Link>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded-2xl"
          />
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/" className="text-white">About</Link>
            <Link to="/" className="text-white">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
