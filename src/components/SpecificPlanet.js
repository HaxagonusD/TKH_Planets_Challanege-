import React from 'react';
import PlanetDetails from "./PlanetDetails";
import "../styles/RandomPlanet.css"

const SpecificPlanet = ({currentPlanet}) => {
  return (
    <div className="random-planet">
      <PlanetDetails planet={currentPlanet}/>
    </div>
  );
};

export default SpecificPlanet;
