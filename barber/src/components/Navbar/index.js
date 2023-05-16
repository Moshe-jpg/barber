import React from "react";
import barberIcon from "../../assets/fire-logo.png";

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;

  return (
    <nav>
      <a href="/" className="icon-container">
        <img className="home-icon" src={barberIcon} alt="home"></img>
      </a>
      <ul className="nav-container">
        <li>
          <a
            onClick={() => {
              setCurrentPage(pages[0]);
            }}
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setCurrentPage(pages[0]);
            }}
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentPage(pages[1]);
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
