import React from "react";

// import des images
import Deliveroo from "../assets/img/deliveroo-logo.svg";

const Header = (props) => {
  return (
    <div className="bg-white">
      <div className="header container">
        <img className="logo" alt="Deliveroo Logo" src={Deliveroo} />
      </div>
    </div>
  );
};

export default Header;
