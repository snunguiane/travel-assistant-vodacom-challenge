import React from "react";
import RegisterModal from "../components/RegisterModal";

const RegisterPage = ({ setIsAuthenticated }) => {
  return (
    <div className="container">
      <RegisterModal setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
};

export default RegisterPage;
