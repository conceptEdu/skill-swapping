import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          SkillSync
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/discover" className="hover:text-blue-200 transition">Discover</Link>
          
          {/* Registration Link */}
          <Link to="/register" className="hover:text-blue-200 transition">Register</Link>
          
          <Link 
            to="/login" 
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;