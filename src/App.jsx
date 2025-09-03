import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherContext";
import { fetchWeatherByCity, fetchForecastByCity } from "./api/weather";

import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import UnitToggle from "./components/UnitToggle";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import FiveDayForecast from "./components/FiveDayForecast";

import "./App.css";

function App() {
  const { lastCity, unit, theme } = useContext(WeatherContext);

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeatherByCity(lastCity, unit);
        const forecastData = await fetchForecastByCity(lastCity, unit);
        setWeather(data);
        setForecast(forecastData);
      } catch (error) {
        console.error("Error cargando clima:", error);
      }
    };

    loadWeather();
  }, [lastCity, unit]);

  return (
    <div className="app-container">
      <header className="header">
        <SearchBar />
        <div className="controls">
          <ThemeToggle />
          <UnitToggle />
        </div>
      </header>

      <main className="main">
        <aside className="city-list">
          <CityList />
        </aside>

        <section className="weather-section">
          <div className="card">
            <CurrentWeather weather={weather} />
          </div>
          <div className="card">
            <HourlyForecast forecast={forecast} />
          </div>
          <div className="card forecast">
            <FiveDayForecast forecast={forecast} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
