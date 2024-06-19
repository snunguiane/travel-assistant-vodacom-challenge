import React from "react";
import { useTranslation } from "react-i18next";

const ExchangeRateCard = ({ rates }) => {
  const { t } = useTranslation();
  if (!rates) return null;

  return (
    <div className="card">
      <h2>{t("exchangeRates")}</h2>
      <p>USD: {rates.usd}</p>
      <p>EUR: {rates.eur}</p>
      <p>MZN: {rates.mzn}</p>
    </div>
  );
};

export default ExchangeRateCard;
