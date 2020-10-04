import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../styles/PlanetDetails.css";

const PlanetDetails = ({ planet, setCurrentPlanet }) => {
  const handleNameClick = () => {
    setCurrentPlanet(planet);
  };
  return planet === undefined ? (
    <Loading />
  ) : (
    <div className="planetdetails">
      {/* name:
            num_moons:
            color:
        */}

      <Link to="/specific" onClick={handleNameClick}>
        {planet.name}
      </Link>
      <div className="text">
        <p>Number of moons: {planet.num_moons}</p>
        <p>color: {planet.color}</p>
      </div>
    </div>
  );
};

export default PlanetDetails;
