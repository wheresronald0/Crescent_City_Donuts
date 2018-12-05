import React from "react";
import greyedOutDonut from "../../Assests/grey-donut-top.png";
import "./Donut-Placeholder.css";

const donutPlaceholder = props => {
  return (
    <div className="greyDonutContainer">
      <img
        className="greyDonutImage"
        src={greyedOutDonut}
        alt="Greyed Out Donut"
      />
    </div>
  );
};

export default donutPlaceholder;
