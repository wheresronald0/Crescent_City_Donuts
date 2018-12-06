import React from "react";
import blueberrySideView from "../../Assests/blueberry-side.jpeg";
import "./Donut-Order-Tile.css";

import { Button, Glyphicon } from "react-bootstrap";

const blueberryOrderTile = props => {
  return (
    <div className="donutTileContainer">
      <div className="donutTileWrapper">
        <Button className="itemIncrement" onClick={props.incrementDonut}>
          <Glyphicon glyph="plus" />
        </Button>
        <img src={blueberrySideView} className="donutTileImage" alt="donut" />
        <Button className="itemIncrement" onClick={props.decrementDonut}>
          <Glyphicon glyph="minus" />
        </Button>
      </div>
      <p>Bayou Bluberry</p>
    </div>
  );
};

export default blueberryOrderTile;
