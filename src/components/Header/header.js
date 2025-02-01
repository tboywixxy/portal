import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import logo from '../../Images/logo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle menu state
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // If page is scrolled more than 50px
    } else {
      setScrolled(false); // Otherwise, reset to initial state
    }
  };

  // Close the menu when resizing the window
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false); // Close the menu if screen size exceeds 768px
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);  // Listen to window resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);  // Cleanup listener
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/home">
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo_img" />
        <div className="academy-name">
          <p className="prevailers">PREVAILERS</p>
          <p className="academy">ACADEMY</p>
        </div>
      </div>
      </Link>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`} id="navLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/enroll">Enroll now</Link></li>
        <li><Link to="/tutor">Become a Tutor</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Header;
