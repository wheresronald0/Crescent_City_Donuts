import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../store/actions";

import SugarGlazedOrderTile from "../../Components/Donut-Order-Tile/Sugar-Glazed-Order-Tile";
import ChocolateOrderTile from "../../Components/Donut-Order-Tile/Chocolate-Order-Tile";
import BlueberryOrderTile from "../../Components/Donut-Order-Tile/Blueberry-Order-Tile";
import StrawberryOrderTile from "../../Components/Donut-Order-Tile/Strawberry-Order-Tile";
import ConfettiOrderTile from "../../Components/Donut-Order-Tile/Confetti-Order-Tile";
import ItemCount from "../../Components/Item-Count/Item-Count";
import SugarGlazedDonut from "../../Components/Donut/Sugar-Glazed-Donut";
import ChocolateDonut from "../../Components/Donut/Chocolate-Donut";
import BlueberryDonut from "../../Components/Donut/Blueberry-Donut";
import StrawberryDonut from "../../Components/Donut/Strawberry-Donut";
import ConfettiDonut from "../../Components/Donut/Confetti-Donut";
import DonutPlaceholder from "../../Components/Donut-Placeholder/Donut-Placeholder";
import CounterOutput from "../../Components/Counter-Output/Counter-Output";
import OrderSummary from "../../Components/Order-Summary/Order-Summary";

import "./Order-Entry.css";
import { Button } from "react-bootstrap";

class OrderEntry extends Component {
  render() {
    //loops greyed-out placeholder donuts as a visual representation corresponding with total donuts ordered count
    const donutPlaceholder = [];
    const placeholderCnt = this.props.placeholderCounter;
    for (let i = 0; i < placeholderCnt; i++) {
      donutPlaceholder.push(<DonutPlaceholder key={i} />);
    }

    //Displays top-view of donuts, and loops donuts as a visual representation as a replacement for a greyed-out placeholder
    const sugarGlazedDonut = [];
    const sugarGlazedDonutCnt = this.props.sugarGlazedCount;
    for (let j = 0; j < sugarGlazedDonutCnt; j++) {
      sugarGlazedDonut.push(<SugarGlazedDonut key={j} />);
    }
    const chocolateDonut = [];
    const chocolateDonutCnt = this.props.chocolateCount;
    for (let j = 0; j < chocolateDonutCnt; j++) {
      chocolateDonut.push(<ChocolateDonut key={j} />);
    }
    const blueberryDonut = [];
    const blueberryDonutCnt = this.props.blueberryCount;
    for (let j = 0; j < blueberryDonutCnt; j++) {
      blueberryDonut.push(<BlueberryDonut key={j} />);
    }
    const strawberryDonut = [];
    const strawberryDonutCnt = this.props.strawberryCount;
    for (let j = 0; j < strawberryDonutCnt; j++) {
      strawberryDonut.push(<StrawberryDonut key={j} />);
    }
    const confettiDonut = [];
    const confettiDonutCnt = this.props.confettiCount;
    for (let j = 0; j < confettiDonutCnt; j++) {
      confettiDonut.push(<ConfettiDonut key={j} />);
    }
    //displays individual count (can delete)
    // console.log("placeholder", this.props.placeholderCounter);
    // console.log("individual", this.props.individualCounter);
    // console.log("sugar", this.props.sugarGlazedCount);
    // console.log("chocolate", this.props.chocolateCount);
    return (
      <div className="orderContainer">
        <h2>
          New Order for: {this.props.firstName}
          {this.props.lastName}
        </h2>
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
          <SugarGlazedOrderTile
            incrementDonut={this.props.onIncrementSugarGlazedCounter}
            decrementDonut={this.props.onDecrementSugarGalzedCounter}
          />
          <ChocolateOrderTile
            incrementDonut={this.props.onIncrementChocolateCounter}
            decrementDonut={this.props.onDecrementChocolateCounter}
          />
          <BlueberryOrderTile
            incrementDonut={this.props.onIncrementBlueberryCounter}
            decrementDonut={this.props.onDecrementBlueberryCounter}
          />
          <StrawberryOrderTile
            incrementDonut={this.props.onIncrementStrawberryCounter}
            decrementDonut={this.props.onDecrementStrawberryCounter}
          />
          <ConfettiOrderTile
            incrementDonut={this.props.onIncrementConfettiCounter}
            decrementDonut={this.props.onDecrementConfettiCounter}
          />
        </section>
        <section className="countContainer">
          <div>
            <ItemCount
              sugarGlazedCount={this.props.sugarGlazedCount}
              chocolateCount={this.props.chocolateCount}
              blueberryCount={this.props.blueberryCount}
              strawberryCount={this.props.strawberryCount}
              confettiCount={this.props.confettiCount}
              individualCounter={this.props.individualCounter}
            />
          </div>

          <div className="vitualDonutBox">
            {sugarGlazedDonut}
            {chocolateDonut}
            {blueberryDonut}
            {strawberryDonut}
            {confettiDonut}
            {donutPlaceholder}
          </div>
        </section>

        <section className="orderButtons">
          <NavLink to={"/order"}>
            <Button bsStyle="warning"> Enter or Lookup Customer</Button>
          </NavLink>

          <OrderSummary
            sugarGlazedCount={this.props.sugarGlazedCount}
            chocolateCount={this.props.chocolateCount}
            blueberryCount={this.props.blueberryCount}
            strawberryCount={this.props.strawberryCount}
            confettiCount={this.props.confettiCount}
            individualCounter={this.props.individualCounter}
            firstName={this.props.firstName}
            lastName={this.props.lastName}
            street={this.props.street}
            city={this.props.city}
            state={this.props.state}
            zip={this.props.zip}
            email={this.props.email}
          />

          <Button bsStyle="danger" onClick={this.props.onClearOrder}>
            Clear Order
          </Button>
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
    sugarGlazedCount: state.sugarGlazed,
    chocolateCount: state.chocolate,
    blueberryCount: state.blueberry,
    strawberryCount: state.strawberry,
    confettiCount: state.confetti,
    firstName: state.firstName,
    lastName: state.lastName,
    street: state.street,
    city: state.city,
    state: state.state,
    zip: state.zip,
    email: state.email,
    id: state.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //total donut count actions:
    onClearCounter: () => dispatch({ type: actions.CLEAR_COUNTER }),
    onClearOrder: () => dispatch({ type: actions.CLEAR_ORDER }),
    onIncrementOneCounter: () => dispatch({ type: actions.INCREMENT_ONE }),
    onIncrementSixCounter: () => dispatch({ type: actions.INCREMENT_SIX }),
    onIncrementTwelveCounter: () =>
      dispatch({ type: actions.INCREMENT_TWELVE }),
    //individual donut count actions:
    onIncrementSugarGlazedCounter: () =>
      dispatch({ type: actions.INCREMENT_SUGAR_GLAZED }),
    onDecrementSugarGalzedCounter: () =>
      dispatch({ type: actions.DECREMENT_SUGAR_GLAZED }),
    onIncrementChocolateCounter: () =>
      dispatch({ type: actions.INCREMENT_CHOCOLATE }),
    onDecrementChocolateCounter: () =>
      dispatch({ type: actions.DECREMENT_CHOCOLATE }),
    onIncrementBlueberryCounter: () =>
      dispatch({ type: actions.INCREMENT_BLUEBERRY }),
    onDecrementBlueberryCounter: () =>
      dispatch({ type: actions.DECREMENT_BLUEBERRY }),
    onIncrementStrawberryCounter: () =>
      dispatch({ type: actions.INCREMENT_STRAWBERRY }),
    onDecrementStrawberryCounter: () =>
      dispatch({ type: actions.DECREMENT_STRAWBERRY }),
    onIncrementConfettiCounter: () =>
      dispatch({ type: actions.INCREMENT_CONFETTI }),
    onDecrementConfettiCounter: () =>
      dispatch({ type: actions.DECREMENT_CONFETTI })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEntry);
