import React from "react";
import { motion } from "framer-motion";

function WeatherCard({ weather }) {

  return (
    <motion.div
      className="weather-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <h2>{weather.name}</h2>

      <h1>{weather.main.temp}°C</h1>

      <p>{weather.weather[0].main}</p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt=""
      />

    </motion.div>
  );
}

export default WeatherCard;