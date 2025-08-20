function CurrentWeather({ weather }) {
    if (!weather) return <p>Cargando clima...</p>;
  
    return (
      <div>
        <h2>{weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <h3>{Math.round(weather.main.temp)}°</h3>
        <p>Sensación térmica: {Math.round(weather.main.feels_like)}°</p>
      </div>
    );
  }
  
  export default CurrentWeather;
  