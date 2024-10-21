import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state of the menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">My Portfolio</div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={100} spy={true} offset={-70} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={100} spy={true} offset={-70} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={100} spy={true} offset={-70} onClick={toggleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={100} spy={true} offset={-70} onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={100} spy={true} offset={-70} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
