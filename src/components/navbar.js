import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <span>Beekin's Official Jobs Portal</span>
      </div>
      <div className="menu">
        <button className="button">Login</button>
        <button className="button">Signup</button>
        {/* Add other menu items as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
