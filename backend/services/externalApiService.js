const axios = require("axios");

exports.getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
    );
    const { coord, weather, main, wind, sys, name } = response.data;
    return {
      city: name,
      description: weather[0].description,
      temperature: main.temp,
      feels_like: main.feels_like,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      humidity: main.humidity,
      wind_speed: wind.speed,
      country: sys.country,
      lon: coord.lon,
      lat: coord.lat,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("City not found");
    }
    console.error(
      "Error fetching weather data:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

async function getCurrencyCode(countryCode) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const countryData = response.data[0];
    const currencyCode = Object.keys(countryData.currencies)[0];
    return currencyCode;
  } catch (error) {
    console.error("Error fetching currency code:", error.message);
    return null;
  }
}

exports.getExchangeRates = async (countryCode) => {
  try {
    const baseCurrency = await getCurrencyCode(countryCode);
    if (!baseCurrency) {
      throw new Error("Invalid country code or currency mapping not found.");
    }
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
    );
    const rates = response.data.rates;

    return {
      usd: rates["USD"],
      eur: rates["EUR"],
      mzn: rates["MZN"],
    };
  } catch (error) {
    console.error(
      "Error fetching exchange rates:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Utility function to get the first non-null value from an array of entries
const getFirstNonNullValue = (data) => {
  if (data) {
    for (const entry of data) {
      if (entry.value !== null) {
        return entry.value;
      }
    }
  }
  return null;
};

exports.getPopulationGDP = async (countryCode) => {
  try {
    const gdpResponse = await axios.get(
      `https://api.worldbank.org/v2/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json`
    );
    const gdp = getFirstNonNullValue(gdpResponse.data[1]);

    const populationResponse = await axios.get(
      `https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.TOTL?format=json`
    );
    const population = getFirstNonNullValue(populationResponse.data[1]);

    const gdpPerCapita = gdp && population ? gdp / population : null;
    const historicalData = await getCountryData(countryCode);

    return {
      countryCode,
      gdp,
      population,
      gdpPerCapita,
      historicalData,
    };
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw new Error("Failed to fetch country data");
  }
};

async function getCountryData(countryCode) {
  try {
    const gdpResponse = await axios.get(
      `https://api.worldbank.org/v2/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json&per_page=100`
    );
    const gdpData = gdpResponse.data[1];

    const populationResponse = await axios.get(
      `https://api.worldbank.org/v2/country/${countryCode}/indicator/SP.POP.TOTL?format=json&per_page=100`
    );
    const populationData = populationResponse.data[1];

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (v, i) =>
      (currentYear - i).toString()
    );

    const historicalData = gdpData
      .filter((entry) => years.includes(entry.date))
      .map((entry) => {
        const populationEntry = populationData.find(
          (p) => p.date === entry.date
        );
        return {
          year: entry.date,
          gdp: entry.value,
          population: populationEntry ? populationEntry.value : null,
        };
      });

    return historicalData.reverse(); // Ensure data is in chronological order
  } catch (error) {
    console.error("Error fetching country data:", error);
    throw new Error("Failed to fetch country data");
  }
}
