import React from "react";

const BlurredContent = ({ children, isAuthenticated }) => {
  return <div className={isAuthenticated ? "" : "blurred"}>{children}</div>;
};

export default BlurredContent;
