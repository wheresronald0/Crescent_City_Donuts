import React from "react";
import SugarGlazed from "../../Assests/sugar-glazed-side.jpeg";
import "./Donut.css";

import { Button, Glyphicon } from "react-bootstrap";

const donut = props => {
  return (
    <div className="donutContainer">
      <div className="donutWrapper">
        <Button className="itemIncrement">
          <Glyphicon glyph="plus" />
        </Button>
        <img src={SugarGlazed} className="donutImage" alt="donut" />
        <Button className="itemIncrement">
          <Glyphicon glyph="minus" />
        </Button>
      </div>
      <p>Sugar Glazed</p>
    </div>
  );
};

export default donut;

// const donut = props => {
//     return (
//       <div className="donutContainer">
//         <div className="donutWrapper">
//           <Button className="itemIncrement">+</Button>
//           <img src={SugarGlazed} className="donutImage" alt="donut" />
//           <Button className="itemIncrement">-</Button>
//         </div>
//         <p>Sugar Glazed</p>
//       </div>
//     );
//   };
