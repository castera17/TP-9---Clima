import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function SearchBar() {
  const [city, setCity] = useState("");
  const { changeCity } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      changeCity(city);
      setCity(""); // limpiar input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        placeholder="Buscar ciudad..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
