import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-blue-600 tracking-tight">SkillSync</h2>
            <p className="text-gray-500 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved to **SSP Mishra**
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/discover" className="hover:text-blue-600 transition">Discover</Link>
            <Link to="/profile" className="hover:text-blue-600 transition">Profile</Link>
          </div>

          {/* Social Icons (Optional) */}
          <div className="mt-6 md:mt-0 flex space-x-4">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition cursor-pointer">
              f
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition cursor-pointer">
              t
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
