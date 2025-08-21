import { useContext, useEffect, useState } from "react";
import { fetchWeatherByCity } from "../api/weather";
import { WeatherContext } from "../context/WeatherContext";

const cities = ["New York", "Copenhagen", "Ho Chi Minh City"];

function CityList() {
  const { unit } = useContext(WeatherContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(cities.map((c) => fetchWeatherByCity(c, unit))).then(setData);
  }, [unit]);

  return (
    <div>
      <h3>Otras ciudades</h3>
      {data.map((city, i) => (
        <div key={i}>
          <p>{city.name}</p>
          <p>{Math.round(city.main.temp)}°</p>
          <p>{city.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
}

export default CityList;