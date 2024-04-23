import type { LanguagePack } from "./languagePack";

import "./Banner.css";

interface BannerProps {
  languagePack: LanguagePack;
}

const Banner = ({ languagePack }: BannerProps) => (
  <>
    <section className="banner">
      <img
        className="desktop"
        src={languagePack.bannerImageDesktop}
        alt={languagePack.bannerAltText}
      />
      <img
        className="mobile"
        src={languagePack.bannerImageMobile}
        alt={languagePack.bannerAltText}
      />
    </section>
    <section className="buy-ticket-wrapper">
      <a
        className="buy-ticket"
        href={languagePack.ticketPurchase.link}
        target="_blank"
        rel="noreferrer"
      >
        {languagePack.ticketPurchase.caption}
      </a>
    </section>
  </>
);

export default Banner;
