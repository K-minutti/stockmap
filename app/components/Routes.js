import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Analysis from "./Analysis";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Home />
        {/* <Analysis/>
        <SingleView/> */}
      </main>
    </Router>
  );
};

export default Routes;
