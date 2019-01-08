import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class CalendarCell extends Component {
  render() {
    const { isEmpty, events, date } = this.props;
    const cellContent = [];

    // Render date
    cellContent.push(<div className="bold date-label"> {date} </div>);

    // Render events
    for (const event of events) {
      cellContent.push(
        <div title={event.title} className="event-title">
          {event.title}
        </div>
      );
    }

    const cellClass = classNames("cal-cell", "inline", "day-cell", {
      "empty-cell": isEmpty
    });
    return <div className={cellClass}> {cellContent} </div>;
  }
}

CalendarCell.propTypes = {
  date: PropTypes.number,
  events: PropTypes.array,
  isEmpty: PropTypes.bool
};

CalendarCell.defaultProps = {
  date: "",
  events: [],
  isEmpty: false
};
export default CalendarCell;
