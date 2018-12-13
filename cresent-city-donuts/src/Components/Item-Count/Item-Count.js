import React from "react";
import "./Item-Count.css";
import CounterOutput from "../Counter-Output/Counter-Output";

const itemCount = props => {
  return (
    <div className="itemCountContainer">
      <CounterOutput totalCount={props.totalCount} />
      <hr />
      <p>
        Sugar Glazed:
        <strong> {props.sugarGlazedCount} </strong>
      </p>
      <p>
        Classic Chocolate:
        <strong> {props.chocolateCount} </strong>
      </p>
      <p>
        Bayou Bluberry:
        <strong> {props.blueberryCount} </strong>
      </p>
      <p>
        St. Charles Strawberry:
        <strong> {props.strawberryCount} </strong>
      </p>
      <p>
        Mardi Gras Confetti:
        <strong> {props.confettiCount} </strong>
      </p>
      <hr />
      <h4>
        Donuts in your box: <strong>{props.individualCounter}</strong>
      </h4>
    </div>
  );
};
export default itemCount;
