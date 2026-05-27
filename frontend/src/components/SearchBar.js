import React, { useState } from "react";

function SearchBar({ fetchWeather, getLocationWeather }) {

  const [city, setCity] = useState("");

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => fetchWeather(city)}>
        Search
      </button>

      <button onClick={getLocationWeather}>
        My Location
      </button>

    </div>
  );
}

export default SearchBar;