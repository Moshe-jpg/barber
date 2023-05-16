import React from "react";
import toothpickIcon from "../../assets/logo_transparent.png";

const Navbar = () => {
  return (
    <nav>
      <a href="/" className="icon-container">
        <img className="home-icon" src={toothpickIcon} alt="home"></img>
      </a>
      <ul className="nav-container">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#/About">About</a>
        </li>
        <li>
          <a href="#/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
