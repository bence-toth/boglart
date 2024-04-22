import { ticketPurchaseLink } from "./constants";

import BannerImage from "./banner.jpg";

import "./Banner.css";

// TODO: Add mobile banner
// TODO: Translate

const Banner = () => (
  <>
    <section className="banner">
      <img
        src={BannerImage}
        alt="5. Boglart, 2024, Balatonboglár, Babel Camp"
      />
    </section>
    <section className="buy-ticket-wrapper">
      <a
        className="buy-ticket"
        href={ticketPurchaseLink}
        target="_blank"
        rel="noreferrer"
      >
        Jegyvásárlás
      </a>
    </section>
  </>
);

export default Banner;
