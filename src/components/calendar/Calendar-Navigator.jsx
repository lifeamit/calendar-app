import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FIRST_MONTH, LAST_MONTH } from "../../utils/constants.js";
import { getMonthString } from "../../utils/date.js";

const getPrev = ({ year, month }) => {
  if (month === FIRST_MONTH) {
    month = LAST_MONTH;
    year--;
  } else {
    month--;
  }

  return { year, month };
};

const getNext = ({ year, month }) => {
  if (month === LAST_MONTH) {
    month = FIRST_MONTH;
    year++;
  } else {
    month++;
  }

  return { year, month };
};

class CalendarNavigator extends Component {
  render() {
    const { month, year } = this.props;
    const monthString = getMonthString(month);
    const yearString = year;
    const prev = getPrev({ year, month });
    const next = getNext({ year, month });

    return (
      <h3 className="text-center calendar-navigator">
        {/* TODO: Move navigation icons to icon library */}
        <Link
          className="nav-anchor"
          to={`/calendar/${prev.year}/${prev.month}`}
        >
          {" ← "}
        </Link>
        <span className="navigation-label">
          {monthString} {yearString}
        </span>
        <Link
          className="nav-anchor"
          to={`/calendar/${next.year}/${next.month}`}
        >
          {" → "}
        </Link>
      </h3>
    );
  }
};

CalendarNavigator.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
};

export default CalendarNavigator;
