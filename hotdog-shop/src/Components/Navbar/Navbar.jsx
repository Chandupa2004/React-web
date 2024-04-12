import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Servise</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/about">Menue</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
