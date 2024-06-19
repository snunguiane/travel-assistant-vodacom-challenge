import React from "react";
import { useTranslation } from "react-i18next";

const WeatherCard = ({ weather }) => {
  const { t } = useTranslation();
  if (!weather) return null;

  return (
    <div className="card">
      <h2>
        {t("weatherIn")} {weather.city}, {weather.country}
      </h2>
      <p>
        {t("description")}: {weather.description}
      </p>
      <p>
        {t("temperature")}: {weather.temperature}°C
      </p>
      <p>
        {t("feelsLike")}: {weather.feels_like}°C
      </p>
      <p>
        {t("minTemperature")}: {weather.temp_min}°C
      </p>
      <p>
        {t("maxTemperature")}: {weather.temp_max}°C
      </p>
      <p>
        {t("humidity")}: {weather.humidity}%
      </p>
      <p>
        {t("windSpeed")}: {weather.wind_speed} m/s
      </p>
    </div>
  );
};

export default WeatherCard;
