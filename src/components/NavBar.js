import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/planets">All Planets</Link>
      <Link to="/planets/random">Random Planet</Link>
    </div>
  );
};

export default NavBar;
