import React from "react";
import sugarGlazedSideView from "../../Assests/sugar-glazed-side.jpeg";
import "./Donut-Order-Tile.css";

import { Button, Glyphicon } from "react-bootstrap";

const donutOrderTile = props => {
  return (
    <div className="donutTileContainer">
      <div className="donutTileWrapper">
        <Button className="itemIncrement" onClick={props.incrementDonut}>
          <Glyphicon glyph="plus" />
        </Button>
        <img src={sugarGlazedSideView} className="donutTileImage" alt="donut" />
        <Button className="itemIncrement" onClick={props.decrementDonut}>
          <Glyphicon glyph="minus" />
        </Button>
      </div>
      <p>Sugar Glazed</p>
    </div>
  );
};

export default donutOrderTile;
