const request = require("supertest");
const express = require("express");
const dataController = require("./dataController");
const auth = require("../middleware/auth");
const cache = require("../middleware/cache");
const redis = require("redis");

const app = express();
app.use(express.json());
app.get("/api/data/:city", cache, dataController.getData);

// Mock Redis client
jest.mock("redis", () => {
  const mClient = {
    setex: jest.fn(),
    quit: jest.fn(),
    on: jest.fn(), // Add the 'on' method to the mock
    get: jest.fn((key, callback) => callback(null, null)), // Mock 'get' method
  };
  return {
    createClient: jest.fn(() => mClient),
  };
});

const client = redis.createClient(); // Create a mock client

jest.mock("../services/externalApiService", () => ({
  getWeatherData: jest.fn(() =>
    Promise.resolve({
      city: "Maputo",
      description: "few clouds",
      temperature: 21.82,
      feels_like: 21.83,
      temp_min: 21.82,
      temp_max: 21.82,
      humidity: 68,
      wind_speed: 4.63,
      country: "MZ",
      lon: 32.5892,
      lat: -25.9653,
    })
  ),
  getPopulationGDP: jest.fn(() =>
    Promise.resolve({
      countryCode: "MZN",
      gdp: 18406835954.6695,
      population: 32969518,
      gdpPerCapita: 558.2986064482197,
      historicalData: [
        {
          year: "2022",
          gdp: 18406835954.6695,
          population: 32969518,
        },
        {
          year: "2021",
          gdp: 16168056388.9101,
          population: 32077072,
        },
      ],
    })
  ),

  getExchangeRates: jest.fn(() =>
    Promise.resolve({
      usd: 0.0157,
      eur: 0.0146,
      mzn: 1,
    })
  ),
}));

afterAll(() => {
  client.quit();
});

test("GET /api/data/:city returns data", async () => {
  const response = await request(app)
    .get("/api/data/Maputo")
    .set("Authorization", "Bearer testToken");
  expect(response.status).toBe(200);
  expect(response.body.weather.country).toBe("MZ");
  expect(response.body.populationGdp.gdp).toBe(18406835954.6695);
});
