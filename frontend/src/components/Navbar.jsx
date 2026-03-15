import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="group flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
            SkillSync
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="relative text-gray-600 font-medium hover:text-blue-600 transition-colors group">
            Home
            <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          
          <Link to="/discover" className="relative text-gray-600 font-medium hover:text-blue-600 transition-colors group">
            Discover
            <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          {/* Premium Login Button */}
          <Link 
            to="/login" 
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon (Visual Only) */}
        <div className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
