import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/planets">All Planets</Link>
      </div>
      <div className="link">
        <Link to="/planets/random">Random Planet</Link>
      </div>
    </div>
  );
};

export default NavBar;
