import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-selector">
      <button
        className={`language-button ${i18n.language === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`language-button ${i18n.language === "pt" ? "active" : ""}`}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </button>
      <button
        className={`language-button ${i18n.language === "fr" ? "active" : ""}`}
        onClick={() => changeLanguage("fr")}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
