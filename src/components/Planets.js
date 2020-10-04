import React from "react";
import PlanetDetails from "./PlanetDetails"

export default ({response}) => {
  if(response  === undefined) return <div><h1>Loading Planet List...</h1></div>;
  const  planetList = response.data.planets;
  return (
    <div>
      {planetList.map((planet)=>{return <PlanetDetails planet={planet} key={planet.id}></PlanetDetails>})}
    </div>
  );
};
