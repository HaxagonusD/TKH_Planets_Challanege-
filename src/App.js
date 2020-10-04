//library imports
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//Custom components
import Planets from "./components/Planets";
import Home from "./components/Home";
import ErrorComponent from "./components/ErrorComponent";
import RandomPlanet from "./components/RandomPlanet";
import NavBar from "./components/NavBar";
//services
import { getPlanets } from "./services/getPlanets";
//css
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
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/planets">
          <Planets response={response}></Planets>
        </Route>
        <Route exact path="/planets/random">
          <RandomPlanet />
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
