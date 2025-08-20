import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function UnitToggle() {
  const { unit, setUnit } = useContext(WeatherContext);

  return (
    <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
      {unit === "metric" ? "Cambiar a °F" : "Cambiar a °C"}
    </button>
  );
}

export default UnitToggle;
