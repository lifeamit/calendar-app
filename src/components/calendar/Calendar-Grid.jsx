import React, { Component } from "react";
import PropTypes from "prop-types";
import CalendarCell from "./Calendar-Cell";
import { convertToTwoDigits, numOfDaysInMonth } from "../../utils/date.js";

const DayLabels = () => {
  return (
    <div className="header">
      <div className="cal-cell inline day-label">Sun</div>
      <div className="cal-cell inline day-label">Mon</div>
      <div className="cal-cell inline day-label">Tue</div>
      <div className="cal-cell inline day-label">Wed</div>
      <div className="cal-cell inline day-label">Thu</div>
      <div className="cal-cell inline day-label">Fri</div>
      <div className="cal-cell inline day-label">Sat</div>
    </div>
  );
};

class CalendarGrid extends Component {
  render() {
    let { month, year, events = {} } = this.props;
    var daysCount = numOfDaysInMonth(month, year);
    let cells = [];

    var firstDate = new Date(year, month - 1, 1);
    var dayOfFirstDate = firstDate.getDay();
    while (dayOfFirstDate) {
      cells.push(<CalendarCell isEmpty={true} />);
      dayOfFirstDate--;
    }

    for (var i = 1; i <= daysCount; i++) {
      const formatedDate = convertToTwoDigits(i);
      const formatedMonth = convertToTwoDigits(month);
      const dateEvents = events[`${year}-${formatedMonth}-${formatedDate}`];
      cells.push(<CalendarCell events={dateEvents} date={i} />);
    }

    var lastDate = new Date(year, month - 1, daysCount);
    var dayOfLastDate = lastDate.getDay();
    while (dayOfLastDate < 6) {
      cells.push(<CalendarCell isEmpty={true} />);
      dayOfLastDate++;
    }

    return (
      <div className="calendar-grid">
        <DayLabels />
        <div className="body">{cells}</div>
      </div>
    );
  }
}

CalendarGrid.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  events: PropTypes.object
};

CalendarGrid.defaultProps = {
  events: {}
};

export default CalendarGrid;
