import React from "react";
import sugarGlazedDonut from "../../Assests/sugar-glazed-top.jpeg";
import "./Donut.css";

const donut = props => {
  return (
    <div className="aDonutContainer">
      <img className="aDonutImage" src={sugarGlazedDonut} alt="Donut" />
    </div>
  );
};

export default donut;
