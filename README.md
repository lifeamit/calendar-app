This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About
This is a simple calendar grid app that shows current month view in a grid on page load. User can navigate between months. Month view shows events for all the days.

## How to run locally
```
$ npm i
$ npm run start
```

## How to run tests
```
$ npm test
```

## Features done
- Render the calendar
- Navigate across months
- Render events in the month view
- Decent UI to call it an MVP
- Routing is well handled.
- Decouping of code into proper files and folders. (Connected vs not-Connected, Utils)

## Features NOT done
- Nothing happens upon clicking on event. It could show a tooltip to show more details about the event.
- Layout will break if too many events show up for a given day.
- It is not ADA Compliant.
- Assuming that the events are day based and not time based, I haven't done interval mergings.
- Poor Tests coverage.
- Analytics beacons are missing
