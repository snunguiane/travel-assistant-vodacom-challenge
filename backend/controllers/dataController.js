const axios = require("axios");
const {
  getWeatherData,
  getExchangeRates,
  getPopulationGDP,
} = require("../services/externalApiService");
const redis = require("redis");
const client = redis.createClient();

exports.getData = async (req, res) => {
  const city = req.params.city;

  try {
    const weather = await getWeatherData(city);
    const populationGdp = await getPopulationGDP(weather.country);
    const exchangeRates = await getExchangeRates(weather.country);

    const data = { weather, populationGdp, exchangeRates };

    // Store data in Redis with an expiration time 1 hour
    client.setex(city, 3600, JSON.stringify(data));

    res.json(data);
  } catch (error) {
    if (error.message === "City not found") {
      return res.status(404).json({ error: "City not found" });
    }
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
