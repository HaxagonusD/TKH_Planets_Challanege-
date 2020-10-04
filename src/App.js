//library imports
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
//Custom components
import Planets from "./components/Planets";
import Home from "./components/Home";
import ErrorComponent from "./components/ErrorComponent";
import RandomPlanet from "./components/RandomPlanet";
import NavBar from "./components/NavBar";
import SpecificPlanet from "./components/SpecificPlanet";
//css
import "./App.css";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState(undefined);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/planets">
          <Planets setCurrentPlanet={setCurrentPlanet}></Planets>
        </Route>
        <Route exact path="/planets/random">
          <RandomPlanet setCurrentPlanet={setCurrentPlanet} />
        </Route>
        <Route exact path="/specific">
          <SpecificPlanet currentPlanet={currentPlanet} />
        </Route>
        <Route>
          {" "}
          <ErrorComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
