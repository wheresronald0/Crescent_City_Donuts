import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import Donut from "../../Components/Donut/Donut";
import ItemCount from "../../Components/Item-Count/Item-Count";
import DonutBoxCount from "../../Components/Donut-Box-Count/Donut-Box-Count";
import CounterOutput from "../../Components/Counter-Output/Counter-Output";
import OrderSummary from "../../Components/Order-Summary/Order-Summary";

import "./Order-Entry.css";
import { Button } from "react-bootstrap";

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
    //accessing global state after combining reducers in index.js
    counterFromReducerState: state.total.totalDonutCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearCounter: () => dispatch({ type: actions.CLEAR_COUNTER }),
    onIncrementOneCounter: () => dispatch({ type: actions.INCREMENT_ONE }),
    onIncrementSixCounter: () => dispatch({ type: actions.INCREMENT_SIX }),
    onIncrementTwelveCounter: () =>
      dispatch({ type: actions.INCREMENT_TWELVE }),
    onIncrementDonutCounter: () => dispatch({ type: actions.INCREMENT_DONUT })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEntry);
