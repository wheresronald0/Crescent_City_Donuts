import React, { Component } from "react";
import { connect } from "react-redux";

import Donut from "../../Components/Donut/Donut";
import "./Order-Entry.css";
import ItemCount from "../../Components/Item-Count/Item-Count";
import DonutBoxCount from "../../Components/Donut-Box-Count/Donut-Box-Count";
import CounterOutput from "../../Components/Counter-Output/Counter-Output";

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
          <Button bsStyle="warning" onClick={this.props.onIncrementOneCounter}>
            Single
          </Button>
          <Button bsStyle="warning" onClick={this.props.onIncrementSixCounter}>
            Half-Dozen
          </Button>
          <Button
            bsStyle="warning"
            onClick={this.props.onIncrementTwelveCounter}
          >
            Dozen
          </Button>
          <Button bsStyle="danger" onClick={this.props.onClearCounter}>
            Reset
          </Button>
          <CounterOutput count={this.props.counterFromReducerState} />
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

const mapStateToProps = state => {
  return {
    counterFromReducerState: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearCounter: () => dispatch({ type: "CLEAR_COUNTER" }),
    onIncrementOneCounter: () => dispatch({ type: "INCREMENT_ONE" }),
    onIncrementSixCounter: () => dispatch({ type: "INCREMENT_SIX" }),
    onIncrementTwelveCounter: () => dispatch({ type: "INCREMENT_TWELVE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEntry);
