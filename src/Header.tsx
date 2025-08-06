import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import type { LanguagePack } from "./languagePack";

import Logo from "./logo.png";

import "./Header.css";

interface HeaderProps {
  languagePack: LanguagePack;
  isEnglish: boolean;
}

const FacebookIcon = AiFillFacebook as React.FC<React.SVGProps<SVGSVGElement>>;
const InstagramIcon = AiFillInstagram as React.FC<
  React.SVGProps<SVGSVGElement>
>;

const Header = ({ languagePack, isEnglish }: HeaderProps) => (
  <header className="header">
    <div className="header-inner-wrapper">
      <div className="logo-wrapper">
        <img className="header-logo" src={Logo} alt="Boglart" />
      </div>
      <nav className="header-navigation">
        <ul>
          <li>
            <a href={isEnglish ? "./" : "./?language=en"}>
              {languagePack.otherLanguage}
            </a>
          </li>
          <li>
            <a
              className="social"
              href={languagePack.socialMedia.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a
              className="social"
              href={languagePack.socialMedia.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
          <li className="hide-on-mobile">
            <a
              className="buy-ticket"
              href={languagePack.ticketPurchase.link}
              target="_blank"
              rel="noreferrer"
            >
              {languagePack.ticketPurchase.caption}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
