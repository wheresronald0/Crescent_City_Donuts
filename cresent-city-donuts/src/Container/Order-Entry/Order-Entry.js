import React, { Component } from "react";
import Donut from "../../Components/Donut/Donut";
import "./Order-Entry.css";
import ItemCount from "../../Components/Item-Count/Item-Count";
import DonutBoxCount from "../../Components/Donut-Box-Count/Donut-Box-Count";

class OrderEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="orderContainer">
        <h1>New Order for: insert name from db</h1>
        <section>
          <h3>Number of Donuts:</h3>
          <button>Single</button>
          <button>Half-Dozen</button>
          <button>Dozen</button>
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

        <section>
          <a href="/">
            <button>Enter or Lookup Customer</button>
          </a>
          <a href="/order-summary">
            <button>Order Summary</button>
          </a>
          <button>Clear Order</button>
        </section>
      </div>
    );
  }
}

export default OrderEntry;
