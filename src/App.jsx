import React, { Component } from "react";
import "./styles/App.scss";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Calendar from "./components/calendar/Calendar";
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <Router>
          <div className="main-app">
            <Switch>
              <Route exact path="/calendar/:year/:month" component={Calendar} />
              <Route exact path="/*" component={Home} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
