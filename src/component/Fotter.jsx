
import React from "react";
import "./fotter.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-column">
          <h2 className="logo">Demo</h2>
          <p className="description">
            The company is India's largest insurance aggregator, and has
            expanded its operations to the United Arab Emirates.
          </p>
          <div className="social-icons">
            <span><FaLinkedin /></span>
            <span><FaFacebook /></span>
            <span>❌</span>
          </div>
        </div>

        {/* Center Left */}
        <div className="footer-column">
          <h4>Health Insurance</h4>
          <ul>
            <li>Family Floater Health Insurance</li>
            <li>Critical Illness cover</li>
            <li>Personal Accident Policy</li>
          </ul>
        </div>

        {/* Center Right */}
        <div className="footer-column">
          <h4>Motor Insurance</h4>
          <ul>
            <li>Car Insurance</li>
            <li>Two Wheeler Insurance</li>
            <li>Pay as you Drive</li>
            <li>Third Party Insurance</li>
            <li>Commercial Vehicle Insurance</li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-column">
          <h4>Other Insurance</h4>
          <ul>
            <li>International Travel Insurance</li>
            <li>Home Insurance</li>
            <li>Home loan Insurance</li>
            <li>Director & Officer Insurance</li>
            <li>Transit Insurance(Marine)</li>
            <li>CPM Insurance</li>
            <li>Contractor All risk Insurance</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 Demo, All Rights Reserved.</p>
        <p className="links">
          <span>Login as Agent</span>
          <span>Policy Statements</span>
          <span>Terms & Conditions</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
