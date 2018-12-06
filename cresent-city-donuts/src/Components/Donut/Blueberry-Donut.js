import React from "react";
import blueberryTopView from "../../Assests/blueberry-top.jpeg";
import "./Donut.css";

const blueberryDonut = props => {
  return (
    <div className="aDonutContainer">
      <img className="aDonutImage" src={blueberryTopView} alt="Donut" />
    </div>
  );
};

export default blueberryDonut;
