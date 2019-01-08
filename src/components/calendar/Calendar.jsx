import React, { Component } from "react";
import { connect } from "react-redux";
import get from "lodash/get";
import CalendarNavigator from "./Calendar-Navigator";
import CalendarGrid from "./Calendar-Grid";
import Spinner from "../spinner";
import { fetchMonth } from "../../actions/calendar";
import Home from "../Home";
import {
    isValidMonth,
    isValidYear,
    getCurrentYear,
    getCurrentMonth
} from "../../utils/date";

class Calendar extends Component {
    componentDidMount() {
        this.onRouteChanged();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        let { year, month } = get(this.props, "match.params", {});
        year = year || getCurrentYear();
        month = month || getCurrentMonth();
        this.props.fetchMonth(year, month);
    }

    redirectToHome() {
        return <Home />;
    }

    render() {
        let { year, month } = get(this.props, "match.params", {});
        month = parseInt(month, 10);
        year = parseInt(year, 10);
        if (!isValidMonth(month) || !isValidYear(year)) {
            return this.redirectToHome();
        }
        const {
            calendar: { isFetchingMonth, events }
        } = this.props;

        return (
            <div className="calendar-main">
                <CalendarNavigator month={month} year={year} />
                <CalendarGrid month={month} year={year} events={events} />
                {isFetchingMonth && <Spinner />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => ({
    fetchMonth: (month, year) => {
        dispatch(fetchMonth(month, year));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
