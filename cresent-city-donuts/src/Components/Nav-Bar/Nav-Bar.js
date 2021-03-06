import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assests/no-logo.png";
import POS from "../../Assests/POS.jpg";
import "./Nav-Bar.css";

const navBar = props => {
  return (
    <NavLink to="/order" style={{ textDecoration: "none" }}>
      <div className="mainContainer">
        <div className="logoContainer">
          <img className="logoImage" src={Logo} alt="Flor de lis" />

          <h1 className="nameFont">Cresent City</h1>
          <h1 className="donutFont">Donuts</h1>
        </div>
        <div>
          <img className="posImage" src={POS} alt="POS Vendor Company Logo" />
        </div>
      </div>
    </NavLink>
  );
};

export default navBar;
