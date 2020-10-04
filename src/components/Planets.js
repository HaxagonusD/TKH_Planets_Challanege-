import React from "react";
import PlanetDetails from "./PlanetDetails";
import Loading from "./Loading";

export default ({ response }) => {
  if (response === undefined) return <Loading />;

  return (
    <div>
      {response.data.planets.map((planet) => {
        return <PlanetDetails planet={planet} key={planet.id}></PlanetDetails>;
      })}
    </div>
  );
};
