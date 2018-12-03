import React, { Component } from "react";
import Donut from "../../Components/Donut/Donut";
import "./Order-Entry.css";
import ItemCount from "../../Components/Item-Count/Item-Count";
import DonutBoxCount from "../../Components/Donut-Box-Count/Donut-Box-Count";

import { Button } from "react-bootstrap";
import OrderSummary from "../../Components/Order-Summary/Order-Summary";

class OrderEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="orderContainer">
        <h2>New Order for: insert name from db</h2>
        <section className="orderAmount">
          <h3>Number of Donuts for Order</h3>
          <Button bsStyle="warning">Single</Button>
          <Button bsStyle="warning">Half-Dozen</Button>
          <Button bsStyle="warning">Dozen</Button>
          <p>count will appear here</p>
        </section>
        <section className="donutThumbnails">
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
        </section>
        <section className="countContainer">
          <ItemCount />

          <DonutBoxCount />
          <DonutBoxCount />
          <DonutBoxCount />
          <DonutBoxCount />
          <DonutBoxCount />
          <DonutBoxCount />
          <DonutBoxCount />
        </section>

        <section className="orderButtons">
          <Button href="/" bsStyle="warning">
            Enter or Lookup Customer
          </Button>

          <OrderSummary />

          <Button bsStyle="danger">Clear Order</Button>
        </section>
      </div>
    );
  }
}

export default OrderEntry;
