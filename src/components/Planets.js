import React from "react";
import PlanetDetails from "./PlanetDetails";
import Loading from "./Loading";
import "../styles/Planets.css";
export default ({ response }) => {
  if (response === undefined) return <Loading />;

  return (
    <div className="list">
      {response.data.planets.map((planet) => {
        return <PlanetDetails planet={planet} key={planet.id}></PlanetDetails>;
      })}
    </div>
  );
};
