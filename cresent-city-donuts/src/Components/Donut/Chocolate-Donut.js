import React from "react";
import chocolateTopView from "../../Assests/chocolate-top.jpeg";
import "./Donut.css";

const chocolateDonut = props => {
  return (
    <div className="aDonutContainer">
      <img className="aDonutImage" src={chocolateTopView} alt="Donut" />
    </div>
  );
};

export default chocolateDonut;
