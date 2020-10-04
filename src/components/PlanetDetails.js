import React from "react";
import Loading from "./Loading"

const PlanetDetails = ({ planet }) => {
  return planet === undefined ? (
    <Loading />
  ) : (
    <div>
      {/* name:
            num_moons:
            color:
        */}
      <h1>{planet.name}</h1>
      <p>{planet.num_moons}</p>
      <p>{planet.color}</p>
    </div>
  );
};

export default PlanetDetails;
