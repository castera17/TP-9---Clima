import { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [unit, setUnit] = useState("metric");
  const [lastCity, setLastCity] = useState("Helsinki");

  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity");
    if (savedCity) setLastCity(savedCity);
  }, []);

  const changeCity = (city) => {
    setLastCity(city);
    localStorage.setItem("lastCity", city);
  };

  return (
    <WeatherContext.Provider
      value={{ theme, setTheme, unit, setUnit, lastCity, changeCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext };
