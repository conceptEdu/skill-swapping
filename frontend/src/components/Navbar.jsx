import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      background: '#2563eb', 
      padding: '1rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
        SkillSync
      </Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/discover" style={{ color: 'white', textDecoration: 'none' }}>Discover</Link>
        <Link to="/login" style={{ 
          background: 'white', 
          color: '#2563eb', 
          padding: '5px 15px', 
          borderRadius: '5px', 
          textDecoration: 'none',
          fontWeight: 'bold' 
        }}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
