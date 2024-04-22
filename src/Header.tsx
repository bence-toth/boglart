import { AiFillFacebook as FacebookIcon } from "react-icons/ai";
import { AiFillInstagram as InstagramIcon } from "react-icons/ai";

import { ticketPurchaseLink, facebookLink, instagramLink } from "./constants";

import Logo from "./logo.png";

import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-inner-wrapper">
      <div className="logo-wrapper">
        <img className="header-logo" src={Logo} alt="Boglart" />
      </div>
      <nav className="header-navigation">
        <ul>
          <li>
            <a href={ticketPurchaseLink} target="_blank" rel="noreferrer">
              English
            </a>
          </li>
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
          <li className="hide-on-mobile">
            <a
              className="buy-ticket"
              href={ticketPurchaseLink}
              target="_blank"
              rel="noreferrer"
            >
              Jegyvásárlás
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
