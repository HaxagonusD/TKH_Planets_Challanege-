const axios = require("axios");

const baseURLS = {
  planets: "https://wdi-nyc-planets-api.herokuapp.com/planets",
  randomPlanet: "https://wdi-nyc-planets-api.herokuapp.com/planets/random",
};

const getPlanets = async () => await axios.get(baseURLS.planets);
const getRandomPlanet = async () => await axios.get(baseURLS.randomPlanet);

export { getPlanets, getRandomPlanet };
