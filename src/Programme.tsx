import { Fragment } from "react";

import type { LanguagePack } from "./languagePack";

import "./Programme.css";

interface ProgrammeProps {
  languagePack: LanguagePack;
}

// TODO: Add button for "register for course"

const Programme = ({ languagePack }: ProgrammeProps) => (
  <section className="section-wrapper">
    <div className="section-inner-wrapper schedule-wrapper">
      <h2>{languagePack.programmeHeading}</h2>
      <table className="desktop-schedule">
        <thead>
          <tr>
            <th />
            {languagePack.programme.map((daySchedule) => (
              <th key={daySchedule.day}>{daySchedule.day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {languagePack.programme[0].schedule.map((timeSlot, timeSlotIndex) => (
            <tr key={timeSlotIndex}>
              <th>{timeSlot.time}</th>
              {languagePack.programme.map((daySchedule) => (
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
          {languagePack.programme.map((daySchedule) => (
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
      <h3>{languagePack.furtherProgrammeHeading}</h3>
      {languagePack.furtherProgrammeText
        .split("|")
        .map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>{paragraph}</p>
        ))}
    </div>
  </section>
);

export default Programme;
