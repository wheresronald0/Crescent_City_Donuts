import React from "react";
import chocolateSideView from "../../Assests/chocolate-side.jpeg";
import "./Donut-Order-Tile.css";

import { Button, Glyphicon } from "react-bootstrap";

const chocolateOrderTile = props => {
  return (
    <div className="donutTileContainer">
      <div className="donutTileWrapper">
        <Button className="itemIncrement" onClick={props.incrementDonut}>
          <Glyphicon glyph="plus" />
        </Button>
        <img src={chocolateSideView} className="donutTileImage" alt="donut" />
        <Button className="itemIncrement" onClick={props.decrementDonut}>
          <Glyphicon glyph="minus" />
        </Button>
      </div>
      <p>Classic Chocolate</p>
    </div>
  );
};

export default chocolateOrderTile;
