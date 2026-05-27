import React from "react";

function SearchHistory({ history, fetchWeather }) {

  return (
    <div className="history-container">

      <h2>Search History</h2>

      {history.map((city, index) => (
        <button
          key={index}
          onClick={() => fetchWeather(city)}
        >
          {city}
        </button>
      ))}

    </div>
  );
}

export default SearchHistory;