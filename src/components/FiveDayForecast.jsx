function FiveDayForecast({ forecast }) {
    if (!forecast) return null;
  
    // OpenWeather devuelve cada 3 horas, agrupamos por día
    const days = {};
    forecast.list.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString("es-ES", {
        weekday: "short",
      });
      if (!days[date]) days[date] = [];
      days[date].push(item);
    });
  
    return (
      <div>
        <h3>Pronóstico 5 días</h3>
        {Object.keys(days).map((day, i) => {
          const avgTemp =
            days[day].reduce((acc, curr) => acc + curr.main.temp, 0) /
            days[day].length;
          return (
            <div key={i}>
              <p>{day}</p>
              <p>{Math.round(avgTemp)}°</p>
              <p>{days[day][0].weather[0].main}</p>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default FiveDayForecast;
  