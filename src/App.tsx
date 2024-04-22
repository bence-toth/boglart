import { Fragment, useState } from "react";
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

const isProtected = true;

const App = () => {
  const [password, setPassword] = useState("");

  if (isProtected && password !== "koszikoszi") {
    return (
      <input
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
    );
  }

  return (
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
      <main>
        <section className="banner">
          <img src={Banner} alt="5. Boglart, 2024, Balatonboglár, Babel Camp" />
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
        <section className="section-wrapper">
          <div className="section-inner-wrapper schedule-wrapper">
            <h2>Programok</h2>
            <table className="desktop-schedule">
              <thead>
                <tr>
                  <th />
                  {programme.map((daySchedule) => (
                    <th key={daySchedule.day}>{daySchedule.day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {programme[0].schedule.map((timeSlot, timeSlotIndex) => (
                  <tr key={timeSlotIndex}>
                    <th>{timeSlot.time}</th>
                    {programme.map((daySchedule) => (
                      <td key={daySchedule.day}>
                        <div className="act">
                          {daySchedule.schedule[timeSlotIndex].name}
                        </div>
                        <div className="location">
                          {daySchedule.schedule[timeSlotIndex].location}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <table className="mobile-schedule">
              <tbody>
                {programme.map((daySchedule) => (
                  <Fragment key={daySchedule.day}>
                    <tr className="header-row">
                      <th colSpan={2}>{daySchedule.day}</th>
                    </tr>
                    {daySchedule.schedule.map((timeSlot) => (
                      <tr key={timeSlot.time}>
                        <th>{timeSlot.time}</th>
                        <td>
                          <div className="act">{timeSlot.name}</div>
                          <div className="location">{timeSlot.location}</div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
            <h3>További programok</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              placeat quas ea! Quaerat quas ipsum recusandae cum repellat,
              exercitationem voluptatibus ullam labore architecto necessitatibus
              possimus eaque impedit in iure. Sint. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At libero incidunt illum et cumque
              laborum quae pariatur blanditiis voluptate, maiores itaque facilis
              eos vel quibusdam laboriosam ratione ducimus esse ea. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Velit quam a vero
              blanditiis, aliquam ex esse! Velit itaque vitae atque qui eum, et
              quaerat quod beatae magnam repellendus alias quas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vel voluptate soluta
              nobis? Eligendi quibusdam modi at optio illum, sunt ad dicta.
              Tenetur nulla quod ab tempora atque libero nisi laboriosam?
            </p>
          </div>
        </section>
        <section className="section-wrapper dark">
          <div className="section-inner-wrapper">
            <h2>A fesztiválról</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              placeat quas ea! Quaerat quas ipsum recusandae cum repellat,
              exercitationem voluptatibus ullam labore architecto necessitatibus
              possimus eaque impedit in iure. Sint. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At libero incidunt illum et cumque
              laborum quae pariatur blanditiis voluptate, maiores itaque facilis
              eos vel quibusdam laboriosam ratione ducimus esse ea. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Velit quam a vero
              blanditiis, aliquam ex esse! Velit itaque vitae atque qui eum, et
              quaerat quod beatae magnam repellendus alias quas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vel voluptate soluta
              nobis? Eligendi quibusdam modi at optio illum, sunt ad dicta.
              Tenetur nulla quod ab tempora atque libero nisi laboriosam?
            </p>
          </div>
        </section>
        <section className="section-wrapper">
          <div className="section-inner-wrapper">
            <h2>Gyakran ismételt kérdések</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              placeat quas ea! Quaerat quas ipsum recusandae cum repellat,
              exercitationem voluptatibus ullam labore architecto necessitatibus
              possimus eaque impedit in iure. Sint. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At libero incidunt illum et cumque
              laborum quae pariatur blanditiis voluptate, maiores itaque facilis
              eos vel quibusdam laboriosam ratione ducimus esse ea. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Velit quam a vero
              blanditiis, aliquam ex esse! Velit itaque vitae atque qui eum, et
              quaerat quod beatae magnam repellendus alias quas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vel voluptate soluta
              nobis? Eligendi quibusdam modi at optio illum, sunt ad dicta.
              Tenetur nulla quod ab tempora atque libero nisi laboriosam?
            </p>
          </div>
        </section>
        <section className="map">
          <iframe
            title="Babel Camp"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.4708238581834!2d17.653755276967228!3d46.77535617112571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769ac2f7e3202b9%3A0x49461b9d549a7818!2sBabel%20Camp!5e1!3m2!1sen!2sdk!4v1713739429042!5m2!1sen!2sdkhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27267.76659086546!2d17.635730832537202!3d46.77535617112572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769ac2f7e3202b9%3A0x49461b9d549a7818!2sBabel%20Camp!5e1!3m2!1sen!2sdk!4v1713739727828!5m2!1sen!2sdkhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13633.88329543273!2d17.646030515068645!3d46.77535617112572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769ac2f7e3202b9%3A0x49461b9d549a7818!2sBabel%20Camp!5e1!3m2!1sen!2sdk!4v1713739767342!5m2!1sen!2sdk"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="section-wrapper">
          <h2>Támogatóink</h2>
        </section>
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
                  </li>{" "}
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
                      <InstragramIcon />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
