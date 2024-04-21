import { ticketPurchaseLink } from "./constants";

import "./App.css";

import Logo from "./logo.png";

const App = () => (
  <div>
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
  </div>
);

export default App;
