import React from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="Hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="Servises" smooth={true} offset={-330} duration={500}>Services</Link></li>
        <li><Link to="About" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="Menu" smooth={true} offset={-290} duration={500}>Menu</Link></li>
        <li><Link to="contact" smooth={true} offset={-330} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
