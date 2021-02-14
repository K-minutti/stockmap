import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Home />
      </main>
    </Router>
  );
};

export default Routes;
