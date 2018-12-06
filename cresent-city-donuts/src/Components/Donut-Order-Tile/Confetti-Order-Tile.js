import React from "react";
import confettiSideView from "../../Assests/confetti-side.jpeg";
import "./Donut-Order-Tile.css";

import { Button, Glyphicon } from "react-bootstrap";

const confettiOrderTile = props => {
  return (
    <div className="donutTileContainer">
      <div className="donutTileWrapper">
        <Button className="itemIncrement" onClick={props.incrementDonut}>
          <Glyphicon glyph="plus" />
        </Button>
        <img src={confettiSideView} className="donutTileImage" alt="donut" />
        <Button className="itemIncrement" onClick={props.decrementDonut}>
          <Glyphicon glyph="minus" />
        </Button>
      </div>
      <p>Mardi Gras Confetti:</p>
    </div>
  );
};

export default confettiOrderTile;
