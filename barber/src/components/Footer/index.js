import React from "react";
import fbImg from "../../assets/meta.png";
import igImg from "../../assets/instagram.png";
import twImg from "../../assets/twitter.png";
import gmailImg from "../../assets/gmail.png";
import phoneImg from "../../assets/phone.png";

const Footer = () => {
  const socials = [
    {
      href: "https://www.facebook.com/TeslaMotorsCorp/",
      imgSrc: fbImg,
      altTag: "Facebook Link",
    },
    {
      href: "https://www.twitter.com/tesla",
      imgSrc: twImg,
      altTag: "Twitter Link",
    },
    {
      href: "https://www.instagram.com/tesla",
      imgSrc: igImg,
      altTag: "Instagram Link",
    },
    {
      href: "tel:111-111-1111",
      imgSrc: phoneImg,
      altTag: "Phone Link",
    },
    {
      href: "mailto:NAsales@teslamotors.com",
      imgSrc: gmailImg,
      altTag: "Email Link",
    },
  ];

  const scrollToContact = () => {
    const contactElement = document.querySelector("#contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-component">
      <header className="footer-header">
        <h4>Book A Cut Today</h4>
        <div className="footer-btn-container">
          <button
            onClick={() => {
              scrollToContact();
            }}
          >
            Get Started
          </button>
        </div>
      </header>
      <ul className="social-media-container">
        {socials.map((elem, i) => (
          <li key={i}>
            <a href={elem.href}>
              <img src={elem.imgSrc} alt={elem.altTag}></img>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
