import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../Components/Nav-Bar/Nav-Bar";
import CustomerSelect from "../../Components/Customer-Select/Customer-Select";
import CustomerDataSearch from "../Customer-Data-Search/Customer-Data-Search";

class POSSystem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={CustomerSelect} />
          <Route path="/customer-data-search" component={CustomerDataSearch} />
        </Switch>
      </div>
    );
  }
}

export default POSSystem;
