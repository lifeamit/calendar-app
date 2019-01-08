import { arrangeEventsByDate } from "../utils/events-process.js";
export default (
  state = {},
  action
) => {
  switch (action.type) {
    case "FETCH_MONTH":
      return {
        ...state,
        isFetchingMonth: true
      };

    case "FETCH_MONTH_SUCCESS":
      const events = arrangeEventsByDate(action.data);
      return {
        ...state,
        events,
        monthEventsError: null,
        isFetchingMonth: false
      };

    case "FETCH_MONTH_ERROR":
      return {
        ...state,
        monthEventsError: action.data,
        isFetchingMonth: false
      };

    default:
      return state;
  }
};
