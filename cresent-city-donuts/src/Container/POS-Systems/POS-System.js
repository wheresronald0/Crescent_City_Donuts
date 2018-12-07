import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../Components/Nav-Bar/Nav-Bar";
import NewOrder from "../../Components/New-Order/New-Order";
import CustomerDataSearch from "../Customer-Data-Search/Customer-Data-Search";
import NewCustomerData from "../New-Customer-Data/New-Customer-Data";
import OrderEntry from "../Order-Entry/Order-Entry";
import OrderSummary from "../../Components/Order-Summary/Order-Summary";

class POSSystem extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div>
          <Switch>
            <Route
              path="/customer-data-search"
              component={CustomerDataSearch}
            />
            <Route path="/new-customer-data" component={NewCustomerData} />
            <Route path="/order-summary" component={OrderSummary} />
            <Route path="/order-entry" component={OrderEntry} />
            <Route path="/new-order" component={NewOrder} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default POSSystem;
