import React from "react";
import sugarGlazedTopView from "../../Assests/sugar-glazed-top.jpeg";
import "./Donut.css";

const sugarGlazedDonut = props => {
  return (
    <div className="aDonutContainer">
      <img className="aDonutImage" src={sugarGlazedTopView} alt="Donut" />
    </div>
  );
};

export default sugarGlazedDonut;
