import React, { useState, useEffect } from "react";
import API from "./api";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import WeatherChart from "./components/WeatherChart";
import SearchHistory from "./components/SearchHistory";
import Alerts from "./components/Alerts";

function App() {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchWeather = async (city) => {
    try {

      const res = await API.get(`/${city}`);

      setWeather(res.data.current);
      setForecast(res.data.forecast.list);

      const updatedHistory = [
        city,
        ...history.filter(item => item !== city)
      ];

      setHistory(updatedHistory);

      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );

    } catch (err) {
      alert("City not found");
    }
  };

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("history")) || [];

    setHistory(savedHistory);

    fetchWeather("Chennai");

  }, []);

  const getLocationWeather = () => {

    navigator.geolocation.getCurrentPosition(async (position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY&units=metric`
      );

      const data = await response.json();

      fetchWeather(data.name);

    });

  };

  return (
    <div>

      <Navbar />

      <SearchBar
        fetchWeather={fetchWeather}
        getLocationWeather={getLocationWeather}
      />

      {weather && (
        <>
          <WeatherCard weather={weather} />
          <Alerts weather={weather} />
          <WeatherChart forecast={forecast} />
          <Forecast forecast={forecast} />
        </>
      )}

      <SearchHistory
        history={history}
        fetchWeather={fetchWeather}
      />

    </div>
  );
}

export default App;