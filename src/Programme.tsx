import { Fragment } from "react";

import { parseAnnotatedString, renderDateOnTwoLines } from "./utility";

import type { LanguagePack } from "./languagePack";

import "./Programme.css";

interface ProgrammeProps {
  languagePack: LanguagePack;
}

interface ScheduleTableProps {
  schedule: {
    day: string;
    schedule: {
      time: string;
      name: string;
      location?: string;
    }[];
  }[];
  showLocation?: boolean;
}

const ScheduleTable = ({
  schedule,
  showLocation = false,
}: ScheduleTableProps) => (
  <>
    <table className="desktop-schedule">
      <thead>
        <tr>
          <th />
          {schedule.map((daySchedule) => (
            <th key={daySchedule.day}>
              {renderDateOnTwoLines(daySchedule.day)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {schedule[0].schedule.map((timeSlot, timeSlotIndex) => (
          <tr key={timeSlotIndex}>
            <th>{timeSlot.time}</th>
            {schedule.map((daySchedule) => (
              <td key={daySchedule.day}>
                {daySchedule.schedule[timeSlotIndex].name !== "" ? (
                  <>
                    <div className="act">
                      {daySchedule.schedule[timeSlotIndex].name}
                    </div>
                    {showLocation && (
                      <div className="location">
                        {daySchedule.schedule[timeSlotIndex].location}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="act"></div>
                    {showLocation && <div className="location"></div>}
                  </>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <table className="mobile-schedule">
      <tbody>
        {schedule.map((daySchedule) => (
          <Fragment key={daySchedule.day}>
            <tr className="header-row">
              <th colSpan={2}>{daySchedule.day}</th>
            </tr>
            {daySchedule.schedule.map(
              (timeSlot) =>
                timeSlot.name !== "" && (
                  <Fragment key={timeSlot.time}>
                    <tr>
                      <th>{timeSlot.time}</th>
                      <td>
                        <div className="act">{timeSlot.name}</div>
                        {showLocation && (
                          <div className="location">{timeSlot.location}</div>
                        )}
                      </td>
                    </tr>
                  </Fragment>
                )
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  </>
);

const Programme = ({ languagePack }: ProgrammeProps) => (
  <section className="section-wrapper">
    <div className="section-inner-wrapper schedule-wrapper">
      <h2>{languagePack.programmeHeading}</h2>
      <ScheduleTable schedule={languagePack.programme} showLocation={true} />
      <h3>{languagePack.furtherProgrammeHeading}</h3>
      <ScheduleTable
        schedule={languagePack.morningProgramme}
        showLocation={false}
      />
      {parseAnnotatedString(languagePack.furtherProgrammeText)}
    </div>
  </section>
);

export default Programme;
