import React, { useState, useEffect } from "react";
import PlanetDetails from "./PlanetDetails";
import Loading from "./Loading";
import "../styles/Planets.css";
import { getPlanets } from "../services/getPlanets";

export default ({setCurrentPlanet}) => {
  const [response, setPlanets] = useState(undefined);

  useEffect(() => {
    (async () => {
      setPlanets(await getPlanets());
    })();
  }, []);

  return response === undefined ? (
    <Loading />
  ) : (
    <div className="list">
      {response.data.planets.map((planet) => {
        return <PlanetDetails setCurrentPlanet={setCurrentPlanet} planet={planet} key={planet.id}></PlanetDetails>;
      })}
    </div>
  );
};


