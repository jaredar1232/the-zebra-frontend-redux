import React from "react";
import image from "../assets/logo-carrier-sm-default.png";

const Logo = () => {
  return (
    <div className="logo-container" data-testid="logo-test-id">
      <img className="logo" alt="" src={image}></img>
    </div>
  );
};

export default Logo;
