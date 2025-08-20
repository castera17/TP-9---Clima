function HourlyForecast({ forecast }) {
    if (!forecast) return null;
  
    // Primeras 6 horas
    const hours = forecast.list.slice(0, 6);
  
    return (
      <div>
        <h3>Pronóstico por horas</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          {hours.map((h, i) => (
            <div key={i}>
              <p>{new Date(h.dt * 1000).getHours()}:00</p>
              <p>{Math.round(h.main.temp)}°</p>
              <p>{h.weather[0].main}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default HourlyForecast;
  