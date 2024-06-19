import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder={t("enterCityName")}
      />
      <button onClick={handleSearch}>{t("search")}</button>
    </div>
  );
};

export default SearchBar;
