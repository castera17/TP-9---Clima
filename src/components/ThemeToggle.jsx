import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function ThemeToggle() {
  const { theme, setTheme } = useContext(WeatherContext);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}

export default ThemeToggle;
