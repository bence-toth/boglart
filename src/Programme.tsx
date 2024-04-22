import { Fragment } from "react";

import { programme } from "./constants";

import "./Programme.css";

const Programme = () => (
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat
        quas ea! Quaerat quas ipsum recusandae cum repellat, exercitationem
        voluptatibus ullam labore architecto necessitatibus possimus eaque
        impedit in iure. Sint. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. At libero incidunt illum et cumque laborum quae
        pariatur blanditiis voluptate, maiores itaque facilis eos vel quibusdam
        laboriosam ratione ducimus esse ea. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Velit quam a vero blanditiis, aliquam ex
        esse! Velit itaque vitae atque qui eum, et quaerat quod beatae magnam
        repellendus alias quas. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vel voluptate soluta nobis? Eligendi quibusdam modi at
        optio illum, sunt ad dicta. Tenetur nulla quod ab tempora atque libero
        nisi laboriosam?
      </p>
    </div>
  </section>
);

export default Programme;
