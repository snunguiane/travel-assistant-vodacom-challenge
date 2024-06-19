import React from "react";
import LoginModal from "../components/LoginModal";

const LoginPage = ({ setIsAuthenticated }) => {
  return (
    <div className="container">
      <LoginModal setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
};

export default LoginPage;
