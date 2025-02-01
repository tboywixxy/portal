import React from 'react';
import './Footer.css';  // Import the CSS file
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import specific icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>Prevailers Academy</h3>
          <p>Abuja, Federal Capital Territory</p>
          <p>Phone: +234 0000 0000</p>
          <p>Email: <a href="mailto:og@gmail.com">og@gmail.com</a></p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <ul>
           <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About Us</Link></li>
                   <li><Link to="/enroll">Enroll now</Link></li>
                   <li><Link to="/tutor">Become a Tutor</Link></li>
                   <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            <li>Engineering & Constructions</li>
            <li>Agriculture</li>
            <li>Pharmaceutical</li>
            <li>Oil & Gas</li>
            <li>IT Solutions</li>
          </ul>
        </div>
        <div>
          <h3>Our Social Networks</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Prevailers Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
