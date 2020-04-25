import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home";
import UserInfoPage from "./components/user";
import NotFoundPage from "./components/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Home" component={HomePage} />
        <Route
          exact
          path="/:username/:gistId"
          name="User Information"
          component={UserInfoPage}
        />
        <Route path="*" name="User Information" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
