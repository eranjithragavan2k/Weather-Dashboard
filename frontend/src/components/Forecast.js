import React from "react";

function Forecast({ forecast }) {

  return (
    <div className="forecast-container">

      {forecast.slice(0, 5).map((item, index) => (

        <div className="forecast-card" key={index}>
          <h3>{item.main.temp}°C</h3>
          <p>{item.weather[0].main}</p>
        </div>

      ))}

    </div>
  );
}

export default Forecast;