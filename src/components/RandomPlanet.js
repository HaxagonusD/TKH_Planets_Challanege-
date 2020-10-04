import React, { useState, useEffect } from "react";
import PlanetDetails from "./PlanetDetails";
import { getRandomPlanet } from "../services/getPlanets";
import Loading from "./Loading";

const RandomPlanet = () => {
  const [randomPlanet, setRandomPlanet] = useState(undefined);
  useEffect(() => {
    (async () => {
      setRandomPlanet(await getRandomPlanet());
    })();
  }, []);

  return randomPlanet === undefined ? (
    <Loading />
  ) : (
    <div>
      <PlanetDetails planet={randomPlanet.data.planet}></PlanetDetails>
    </div>
  );
};

export default RandomPlanet;
