import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import { fetchWeatherByCity, fetchForecastByCity } from "./api/weather";

function App() {
  const { lastCity, unit } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeatherByCity(lastCity, unit);
      const forecastData = await fetchForecastByCity(lastCity, unit);
      setWeather(data);
      setForecast(forecastData);
    };
    loadWeather();
  }, [lastCity, unit]);

  if (!weather) return <p>Cargando clima...</p>;

  return (
    <div>
      <h1>{weather.name}</h1>
      <h2>{weather.main.temp}°</h2>
      <p>{weather.weather[0].description}</p>
      {/* acá después componés todo el dashboard con Hourly, 5Day, etc */}
    </div>
  );
}

export default App;
