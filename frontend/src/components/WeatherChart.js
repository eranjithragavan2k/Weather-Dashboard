import React from "react";

import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

function WeatherChart({ forecast }) {

  const data = {
    labels: forecast.slice(0, 8).map(item =>
      item.dt_txt
    ),

    datasets: [
      {
        label: "Temperature",
        data: forecast.slice(0, 8).map(item =>
          item.main.temp
        ),
        borderColor: "cyan"
      }
    ]
  };

  return (
    <div className="chart-container">
      <Line data={data} />
    </div>
  );
}

export default WeatherChart;