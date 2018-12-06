import React from "react";
import strawberryTopView from "../../Assests/strawberry-top.jpeg";
import "./Donut.css";

const strawberryDonut = props => {
  return (
    <div className="aDonutContainer">
      <img className="aDonutImage" src={strawberryTopView} alt="Donut" />
    </div>
  );
};

export default strawberryDonut;
