import React from "react";
import SugarGlazed from "../../Assests/sugar-glazed-side.jpeg";
import "./Donut.css";

const donut = props => {
  return (
    <div className="donutContainer">
      <p>+</p>
      <img src={SugarGlazed} className="donutImage" alt="donut" />
      <p>-</p>
    </div>
  );
};

export default donut;
