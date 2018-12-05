import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import DonutOrderTile from "../../Components/Donut-Order-Tile/Donut-Order-Tile";
import ItemCount from "../../Components/Item-Count/Item-Count";
import Donut from "../../Components/Donut/Donut";
import DonutPlaceholder from "../../Components/Donut-Placeholder/Donut-Placeholder";
import CounterOutput from "../../Components/Counter-Output/Counter-Output";
import OrderSummary from "../../Components/Order-Summary/Order-Summary";

import "./Order-Entry.css";
import { Button } from "react-bootstrap";

class OrderEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //loops greyed-out placeholder donuts as a visual representation corresponding with total donuts ordered count
    const donutPlaceholder = [];
    const placeholderCnt = this.props.placeholderCounter;
    for (let i = 0; i < placeholderCnt; i++) {
      donutPlaceholder.push(<DonutPlaceholder key={i} />);
    }

    //loops donuts as a visual representation as a replacement for a greyed-out placeholder

    const donut = [];
    const donutCnt = this.props.sugarGlazedCount;
    for (let j = 0; j < donutCnt; j++) {
      donut.push(<Donut key={j} />);
    }
    //displays individual count (can delete)
    const numTest = this.props.sugarGlazedCount;
    console.log("placeholder", this.props.placeholderCounter);
    console.log("individual", this.props.individualCounter);
    return (
      <div className="orderContainer">
        <h2>New Order for: insert name from db</h2>
        <section className="orderAmount">
          <h3>Enter Number of Donuts for Order</h3>
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
          <CounterOutput totalCount={this.props.counterFromReducerState} />
        </section>
        <section className="donutThumbnails">
          <DonutOrderTile
            incrementDonut={this.props.onIncrementSugarGlazedCounter}
            decrementDonut={this.props.onDecrementSugarGalzedCounter}
          />
          {numTest}
        </section>
        <section className="countContainer">
          <ItemCount />
          {donut}
          {donutPlaceholder}
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
    counterFromReducerState: state.totalDonutCounter,
    placeholderCounter: state.placeholderCount,
    individualCounter: state.individualCount,
    sugarGlazedCount: state.sugarGlazed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //total donut count actions:
    onClearCounter: () => dispatch({ type: actions.CLEAR_COUNTER }),
    // onPlaceholderCount: () => dispatch({ type: actions.PLACEDHOLDER_COUNTER }),
    onIncrementOneCounter: () => dispatch({ type: actions.INCREMENT_ONE }),
    onIncrementSixCounter: () => dispatch({ type: actions.INCREMENT_SIX }),
    onIncrementTwelveCounter: () =>
      dispatch({ type: actions.INCREMENT_TWELVE }),
    //individual donut count actions:
    onIncrementSugarGlazedCounter: () =>
      dispatch({ type: actions.INCREMENT_SUGAR_GLAZED }),
    onDecrementSugarGalzedCounter: () =>
      dispatch({ type: actions.DECREMENT_SUGAR_GLAZED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEntry);
