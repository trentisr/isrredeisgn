import React from "react";
import "./Footer.css"; // Add this import for the styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-row">iSolvRisk</div>
          <div className="footer-row">Email: info@isolvrisk.com</div>
          <div className="footer-row">ⓒ 2024 iSolvRisk Inc. All Rights Reserved</div>
        </div>
        <div className="footer-column">
          <div className="footer-row">Explore the Site</div>
          <div className="footer-row">
            <a href="/">Home</a>
            <a href="/team">Team</a>
          </div>
          <div className="footer-row">
            <a href="/vision">Vision</a>
            <a href="/partners">Partners</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-row">Explore Our Galaxy</div>
          <div className="footer-row">Contact Us</div>
          <div className="footer-row">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i> Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
