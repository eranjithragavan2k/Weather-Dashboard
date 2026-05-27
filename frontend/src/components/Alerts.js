import React from "react";

function Alerts({ weather }) {

  return (
    <div className="alert-box">

      {weather.main.temp > 35 && (
        <p>⚠️ High Temperature Alert</p>
      )}

      {weather.wind.speed > 15 && (
        <p>⚠️ Strong Wind Alert</p>
      )}

    </div>
  );
}

export default Alerts;