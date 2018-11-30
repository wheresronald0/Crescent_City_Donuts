import React, { Component } from "react";
import Donut from "../../Components/Donut/Donut";
import "./Order-Entry.css";

class OrderEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>New Order for: insert name from db</h1>
        <div>
          <h3>Number of Donuts</h3>
          <button>Single</button>
          <button>Half-Dozen</button>
          <button>Dozen</button>
        </div>
        <section className="donutThumbnails">
          <Donut />
          <Donut />
          <Donut />
          <Donut />
          <Donut />
        </section>
        <a href="/">
          <button>Enter or Lookup Customer</button>
        </a>
      </div>
    );
  }
}

export default OrderEntry;
