import axios from "axios";

const API_KEY = "b680f5e4ebcbbcd6bd6025ff7cdbc6f2";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeatherByCity = async (city, unit = "metric") => {
  const res = await axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY
    }
  });
  return res.data;
};

export const fetchForecastByCity = async (city, unit = "metric") => {
  const res = await axios.get(`${BASE_URL}forecast`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY
    }
  });
  return res.data;
};