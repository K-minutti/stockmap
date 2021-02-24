import React from "react";
import { Link } from "react-router-dom";

function changeTheme() {
  document.getElementById("style-theme").href = "/dark.css";
}

const Navbar = () => {
  return (
    <nav id="navbar" className="row">
      <Link to="/">
        <h1
          style={{
            fontSize: "1.5rem",
            color: "#5F5CFF",
            textShadow: "0.5px 0.5px lightSlateGrey",
          }}
        >
          Stockmap
        </h1>
      </Link>
      <i className="fas fa-cog settings" onClick={() => changeTheme()}></i>
    </nav>
  );
};

export default Navbar;
