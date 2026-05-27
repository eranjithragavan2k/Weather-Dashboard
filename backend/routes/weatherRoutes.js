const express = require("express");
const axios = require("axios");

const router = express.Router();

const API_KEY = process.env.API_KEY;

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const currentWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    res.json({
      current: currentWeather.data,
      forecast: forecast.data
    });

  } catch (error) {
    res.status(500).json({
      message: "City not found"
    });
  }
});

module.exports = router;