import React from "react";
import strawberrySideView from "../../Assests/strawberry-side.jpeg";
import "./Donut-Order-Tile.css";

import { Button, Glyphicon } from "react-bootstrap";

const strawberryOrderTile = props => {
  return (
    <div className="donutTileContainer">
      <div className="donutTileWrapper">
        <Button className="itemIncrement" onClick={props.incrementDonut}>
          <Glyphicon glyph="plus" />
        </Button>
        <img src={strawberrySideView} className="donutTileImage" alt="donut" />
        <Button className="itemIncrement" onClick={props.decrementDonut}>
          <Glyphicon glyph="minus" />
        </Button>
      </div>
      <p>St. Charles Strawberry:y</p>
    </div>
  );
};

export default strawberryOrderTile;
