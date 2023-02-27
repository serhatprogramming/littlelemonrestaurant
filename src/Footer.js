import React from "react";
import FooterLogo from "./images/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="footer-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            <br />
            33 Mediterranean Rd <br /> Little Italy, NY 10201 <br />
            (212) 234 234 5123
            <br />
            chef@littlelemon.com
          </p>
        </div>
        <div className="footer-social">
          <h3>Social Media</h3>
          <br />
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
