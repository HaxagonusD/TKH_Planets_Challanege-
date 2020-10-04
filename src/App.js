import React, { useState, useEffect } from "react";
import {Route, Switch} from "react-router-dom"
import Planets from "./components/Planets";
import Home from "./components/Home";
import PlanetDetail from "./components/RandomPlanet"
import { getPlanets, getRandomPlanet } from "./services/getPlanets";
import "./App.css";

function App() {
  const [response, setPlanets] = useState(undefined);

  useEffect(() => {
    (async () => {
      setPlanets(await getPlanets());
    })();
  }, []);
  
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home} />

      </Switch>
      <Planets response={response}></Planets>
    </div>
  );
}

export default App;
