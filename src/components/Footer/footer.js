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
          <p>Whatsapp: 234 9114701938</p>
          <p>Email: <a href="mailto:prevailersacademi@gmail.com">prevailersacademi@gmail.com</a></p>
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
          <h3>Educational Services We Provide</h3>
          <ul>
            <li>Mathematics (Grade 1-8th grade)</li>
            <li>Language</li>
            <li>Web development</li>
            <li>Digital skills</li>
            <li>High school and college courses</li>
            <li>Continuing Education Courses (adults)</li>
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
