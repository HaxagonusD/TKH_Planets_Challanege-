import React from "react";

const PlanetDetails = ({ planet }) => {
  if (planet === undefined) return <div>Loading...</div>;
  return (
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
