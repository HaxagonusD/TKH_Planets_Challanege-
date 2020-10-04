# React & React Router

#### This assignment involves implementing React Router and a Planets API

![](https://media.giphy.com/media/RLV26ucdod4ek/giphy.gif)

**The base URL is**: `https://wdi-nyc-planets-api.herokuapp.com`  
Available endpoints: `/planets` and `/planets/random`

## Getting Started
1. Fork
1. Clone this repo

Install the necessary dependencies

```sh
npm install
```

Use `npm start` to start a server that will serve your new React application:

```bash
npm start
```

- [React Router](https://www.npmjs.com/package/react-router-dom) has already been installed
- The following components have already been created for you: `Planets`, `PlanetDetail`, `RandomPlanet` and `Home`.

## Requirements
- Your app should have routes for your **Planets, PlanetDetail, RandomPlanet and Home** components
- **Planets** should render all the planet names.
- **PlanetDetail** should render the data for an individual planet's color and number of moons.
- **RandomPlanet** should route to an endpoint `/planets/random` and render a random planet.
- Welcome should be a welcome page for the user showing the Link to **PlanetList** and **RandomPlanet**.

- In the **Planets** component, turn each planet name list into a link; when people click on the link, they should be navigated to the **PlanetDetail** page for the selected planet
- Use fetch or [axios](https://github.com/axios/axios) your API requests
