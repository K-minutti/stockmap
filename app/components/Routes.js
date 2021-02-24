import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Analysis from "./Analysis";
import Dummy from "./Dummy";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/analysis" component={Analysis} />
          <Route exact path="/dummy" component={Dummy} />
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
