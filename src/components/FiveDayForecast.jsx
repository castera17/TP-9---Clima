function FiveDayForecast({ forecast }) {
  if (!forecast) return null;

  // Agrupar por día
  const grouped = forecast.list.reduce((acc, item) => {
    const d = new Date(item.dt * 1000);
    const key = d.toLocaleDateString("es-ES", { weekday: "short" });
    (acc[key] ||= []).push(item);
    return acc;
  }, {});

  // Convertir a arreglo (primeros 5 días)
  const days = Object.entries(grouped).slice(0, 5).map(([day, arr]) => {
    const temps = arr.map(a => a.main.temp);
    const avg = Math.round(temps.reduce((s, t) => s + t, 0) / temps.length);
    const min = Math.round(Math.min(...temps));
    const max = Math.round(Math.max(...temps));
    // uso el primer icono/desc del día
    const { icon, description } = arr[0].weather[0];
    return { day, avg, min, max, icon, desc: description };
  });

  return (
    <div>
      <h3>Pronóstico 5 días</h3>
      <div className="forecast-grid">
        {days.map((d, i) => (
          <div className="forecast-item" key={i}>
            <div className="fi-day">{d.day}</div>
            <img
              className="fi-icon"
              src={`https://openweathermap.org/img/wn/${d.icon}@2x.png`}
              alt={d.desc}
            />
            <div className="fi-temp">{d.avg}°</div>
            <div className="fi-range">
              <span>{d.min}°</span>
              <span className="sep">/</span>
              <span>{d.max}°</span>
            </div>
            <div className="fi-desc">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiveDayForecast;
