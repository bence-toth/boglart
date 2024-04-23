import BannerImage from "./banner.jpg";

import type { LanguagePack } from "./languagePack";

import "./Banner.css";

// TODO: Add mobile banner
// TODO: Add English banners

interface BannerProps {
  languagePack: LanguagePack;
}

const Banner = ({ languagePack }: BannerProps) => (
  <>
    <section className="banner">
      <img src={BannerImage} alt={languagePack.bannerAltText} />
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
