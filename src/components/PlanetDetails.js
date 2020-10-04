import React from "react";
import Loading from "./Loading";
import "../styles/PlanetDetails.css";

const PlanetDetails = ({ planet }) => {
  return planet === undefined ? (
    <Loading />
  ) : (
    <div className="planetdetails">
      {/* name:
            num_moons:
            color:
        */}
      <h1> {planet.name}</h1>
      <div className="text">
        <p>Number of moons: {planet.num_moons}</p>
        <p>color: {planet.color}</p>
      </div>
    </div>
  );
};

export default PlanetDetails;
