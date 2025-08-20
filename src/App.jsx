import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import { fetchWeatherByCity, fetchForecastByCity } from "./api/weather";

// Componentes (los vas a ir creando en /components)
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import FiveDayForecast from "./components/FiveDayForecast";
import CityList from "./components/CityList";
import ThemeToggle from "./components/ThemeToggle";
import UnitToggle from "./components/UnitToggle";

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
    <div className="app">
      {/* Barra superior con búsqueda y toggles */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
        <SearchBar />
        <ThemeToggle />
        <UnitToggle />
      </div>

      {/* Clima actual */}
      <CurrentWeather data={weather} />

      {/* Pronóstico por horas */}
      {forecast && <HourlyForecast data={forecast} />}

      {/* Pronóstico 5 días */}
      {forecast && <FiveDayForecast data={forecast} />}

      {/* Lista de ciudades importantes */}
      <CityList />
    </div>
  );
}

export default App;
