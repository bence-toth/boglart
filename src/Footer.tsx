import { AiFillFacebook as FacebookIcon } from "react-icons/ai";
import { AiFillInstagram as InstagramIcon } from "react-icons/ai";

import { facebookLink, instagramLink } from "./constants";

import Logo from "./logo.png";

import "./Footer.css";

// TODO: Add missing links
// TODO: Replace logo
// TODO: Translate

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner-wrapper">
      <div className="address">
        <img className="header-logo" src={Logo} alt="Boglart" />
        <address>&copy; 2024, Góbé Kulturális Egyesület</address>
      </div>
      <div className="links">
        <nav>
          <ul>
            <li>
              <a href="/">Szállásfoglalás</a>
            </li>
            <li>
              <a href="/">Házirend</a>
            </li>
            <li>
              <a href="/">Kapcsolat</a>
            </li>
            <li>
              <a href="mailto:allearsmanagement@gmail.com">Booking</a>
            </li>
          </ul>
          <ul className="social">
            <li>
              <a
                className="social"
                href={facebookLink}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                className="social"
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
