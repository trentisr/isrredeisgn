import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ISolveRisk</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#vision">Vision</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#partners">Partners</a></li>
      </ul>
      <button className="contact-button">Contact Us</button>
    </nav>
  );
};

export default Navbar;
