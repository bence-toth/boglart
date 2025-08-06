import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import type { LanguagePack } from "./languagePack";

import "./Footer.css";

import Logo from "./logo.png";

interface FooterProps {
  languagePack: LanguagePack;
}

const FacebookIcon = AiFillFacebook as React.FC<React.SVGProps<SVGSVGElement>>;
const InstagramIcon = AiFillInstagram as React.FC<
  React.SVGProps<SVGSVGElement>
>;

const Footer = ({ languagePack }: FooterProps) => (
  <footer className="footer">
    <div className="footer-inner-wrapper">
      <div className="address">
        <img className="header-logo" src={Logo} alt="Boglart" />
        <address>{languagePack.footer.copyright}</address>
      </div>
      <div className="links">
        <nav>
          <ul>
            <li>
              <a href={languagePack.footer.accommodation.url}>
                {languagePack.footer.accommodation.caption}
              </a>
            </li>
            <li>
              <a href={languagePack.footer.houseRules.url}>
                {languagePack.footer.houseRules.caption}
              </a>
            </li>
            <li>
              <a href={languagePack.footer.contact.url}>
                {languagePack.footer.contact.caption}
              </a>
            </li>
            <li>
              <a href={languagePack.footer.booking.url}>
                {languagePack.footer.booking.caption}
              </a>
            </li>
          </ul>
          <ul className="social">
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
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
