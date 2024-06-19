import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import PopulationGDPCard from "../components/PopulationGDPCard";
import ExchangeRateCard from "../components/ExchangeRateCard";
import BlurredContent from "../components/BlurredContent";
import Map from "../components/Map";
import { useTranslation } from "react-i18next";
import HistoricalDataChart from "../components/HistoricalDataChart";

const HomePage = ({ isAuthenticated }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const handleSearch = async (city) => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      const response = await fetch(`/api/data/${city}`, {
        // Use relative URL
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 404) {
        throw new Error(t("cityNotFound"));
      }
      if (!response.ok) {
        throw new Error(t("networkResponseNotOk"));
      }
      const result = await response.json();
      setData(result);
      setError(null); // Clear any previous error
    } catch (error) {
      setData(null); // Clear previous data
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <br></br>
      {error && <p className="error">{error}</p>}
      {data && (
        <>
          <div className="flex-container">
            <div className="flex-item">
              <WeatherCard weather={data.weather} />
            </div>
            <div className="flex-item">
              <BlurredContent isAuthenticated={isAuthenticated}>
                <PopulationGDPCard data={data.populationGdp} />
                <ExchangeRateCard rates={data.exchangeRates} />
              </BlurredContent>
            </div>
            <div className="flex-item">
              <BlurredContent isAuthenticated={isAuthenticated}>
                <HistoricalDataChart data={data.populationGdp.historicalData} />
              </BlurredContent>
            </div>

            <Map
              location={{
                lat: data.weather.lat,
                lon: data.weather.lon,
                city: data.weather.city,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
