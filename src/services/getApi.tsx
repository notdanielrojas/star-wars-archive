import axios from "axios";

const API_URL = "https://swapi.info/api";

const getPlanets = async () => {
  const response = await axios.get(`${API_URL}/planets`);
  return response.data;
};

const getStarships = async () => {
  const response = await axios.get(`${API_URL}/starships`);
  return response.data;
};

const getPeople = async () => {
  const response = await axios.get(`${API_URL}/people`);
  return response.data;
};

const getVehicles = async () => {
  const response = await axios.get(`${API_URL}/vehicles`);
  return response.data;
};

const getSpecies = async () => {
  const response = await axios.get(`${API_URL}/species`);
  return response.data;
};

const getFilms = async () => {
  const response = await axios.get(`${API_URL}/films`);
  return response.data;
};

const getPlanetName = async (url: string) => {
  const response = await axios.get(url);
  return response.data.name;
};

export default { getFilms, getPeople, getPlanets, getSpecies, getStarships, getVehicles, getPlanetName };
