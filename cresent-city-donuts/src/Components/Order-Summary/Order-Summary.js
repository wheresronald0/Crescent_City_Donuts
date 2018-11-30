import React from "react";
import ItemCount from "../Item-Count/Item-Count";

const orderSummary = props => {
  return (
    <div>
      <h2>Customer Name and Address to be diplayed</h2>
      <ItemCount />
      <p>Total Cost:</p>
      <button>Submit Order</button>
    </div>
  );
};

export default orderSummary;
