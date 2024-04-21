import { AiFillFacebook as FacebookIcon } from "react-icons/ai";
import { AiFillInstagram as InstragramIcon } from "react-icons/ai";

import {
  ticketPurchaseLink,
  facebookLink,
  instagramLink,
  programme,
} from "./constants";

import "./App.css";

import Logo from "./logo.png";
import Banner from "./banner.jpg";

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
                <InstragramIcon />
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
    <main>
      <section className="banner">
        <img src={Banner} alt="5. Boglart, 2024, Balatonboglár, Babel Camp" />
      </section>
      <section>
        <h2>Programok</h2>
        <table className="desktop-schedule" border={1}>
          <thead>
            <td></td>
            {programme.map((daySchedule) => (
              <th>{daySchedule.day}</th>
            ))}
          </thead>
          <tbody>
            {programme[0].schedule.map((timeSlot, timeSlotIndex) => (
              <tr>
                <th>{timeSlot.time}</th>
                {programme.map((daySchedule) => (
                  <th>
                    <p>{daySchedule.schedule[timeSlotIndex].name}</p>
                    <p>{daySchedule.schedule[timeSlotIndex].location}</p>
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <table className="mobile-schedule" border={1}>
          <tbody>
            {programme.map((daySchedule) => (
              <>
                <tr>
                  <td></td>
                  <th>{daySchedule.day}</th>
                </tr>
                {daySchedule.schedule.map((timeSlot) => (
                  <tr>
                    <th>{timeSlot.time}</th>
                    <td>
                      <p>{timeSlot.name}</p>
                      <p>{timeSlot.location}</p>
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>További programok</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          placeat quas ea! Quaerat quas ipsum recusandae cum repellat,
          exercitationem voluptatibus ullam labore architecto necessitatibus
          possimus eaque impedit in iure. Sint. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At libero incidunt illum et cumque
          laborum quae pariatur blanditiis voluptate, maiores itaque facilis eos
          vel quibusdam laboriosam ratione ducimus esse ea. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Velit quam a vero blanditiis,
          aliquam ex esse! Velit itaque vitae atque qui eum, et quaerat quod
          beatae magnam repellendus alias quas. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vel voluptate soluta nobis? Eligendi
          quibusdam modi at optio illum, sunt ad dicta. Tenetur nulla quod ab
          tempora atque libero nisi laboriosam?
        </p>
      </section>
      <footer></footer>
    </main>
  </div>
);

export default App;
