import React from "react";
import barberIcon from "../../assets/fire-logo.png";

const Navbar = () => {
  return (
    <nav>
      <a href="/" className="icon-container">
        <img className="home-icon" src={barberIcon} alt="home"></img>
      </a>
      <ul className="nav-container">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
