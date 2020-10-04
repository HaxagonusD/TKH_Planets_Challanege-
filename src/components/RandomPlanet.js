import React, { useState, useEffect } from "react";
import PlanetDetails from "./PlanetDetails";
import { getRandomPlanet } from "../services/getPlanets";
import Loading from "./Loading";
import "../styles/RandomPlanet.css";

const RandomPlanet = ({setCurrentPlanet}) => {
  const [randomPlanet, setRandomPlanet] = useState(undefined);
  useEffect(() => {
    (async () => {
      setRandomPlanet(await getRandomPlanet());
    })();
  }, []);

  return randomPlanet === undefined ? (
    <Loading />
  ) : (
    <div className="random-planet">
      <PlanetDetails setCurrentPlanet={setCurrentPlanet} planet={randomPlanet.data.planet}></PlanetDetails>
    </div>
  );
};

export default RandomPlanet;
