import React from "react";
import Logo from "../../Assests/no-logo.png";
import POS from "../../Assests/POS.jpg";
import "./Nav-Bar.css";

const navBar = props => {
  return (
    <div className="mainContainer">
      <div className="logoContainer">
        <img className="logoImage" src={Logo} />
        <h1 className="nameFont">Cresent City</h1>
        <h1 className="donutFont">Donuts</h1>
      </div>
      <div>
        <img className="posImage" src={POS} />
      </div>
    </div>
  );
};

export default navBar;
