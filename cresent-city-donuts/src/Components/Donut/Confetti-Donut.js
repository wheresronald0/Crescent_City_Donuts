import React from "react";
import confettiTopView from "../../Assests/confetti-top.jpeg";
import "./Donut.css";

const confettiDonut = props => {
  return (
    <div className="aDonutContainer">
      <img className="aDonutImage" src={confettiTopView} alt="Donut" />
    </div>
  );
};

export default confettiDonut;
