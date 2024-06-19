import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const { t } = useTranslation();
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav>
      <div className="logo">{t("travelAssistant")}</div>
      <div className="nav-links" id="navlinks">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isAuthenticated && (
            <li>
              <Link to="/login">{t("login")}</Link>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <Link to="/register">{t("register")}</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout}>{t("logout")}</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
