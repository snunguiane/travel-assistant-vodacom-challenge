import React from "react";
import { useTranslation } from "react-i18next";

const PopulationGDPCard = ({ data }) => {
  const { t } = useTranslation();
  if (!data) return null;

  return (
    <div className="card">
      <h2>
        {t("population")} & {t("gdp")}
      </h2>
      <p>
        {t("population")}: {data.population}
      </p>
      <p>
        {t("gdpPerCapita")}: {data.gdpPerCapita}
      </p>
    </div>
  );
};

export default PopulationGDPCard;
