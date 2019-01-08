const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.SERVER_PORT || 5000;

// Import mock data
const dateEvents = require("./mocks/dayEvents.js");
const monthEvents = require("./mocks/monthEvents.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get by year
app.get("/getEvents/:year", (req, res) => {
  const { year } = req.params;
  res.send({ year });
});

// Get by month
app.get("/getEvents/:year/:month", (req, res) => {
  setTimeout(() => {
    res.send(monthEvents);
  }, 500);
});

// Get by date
app.get("/getEvents/:year/:month/:date", (req, res) => {
  // const { year, month, date } = req.params;
  res.send(dateEvents);
});

console.log("Starting backend server to host the APIs ")
app.listen(port, () => console.log(`Backend server started on port ${port}`));
