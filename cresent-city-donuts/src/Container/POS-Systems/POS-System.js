import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../Components/Nav-Bar/Nav-Bar";
import NewOrder from "../../Components/New-Order/New-Order";
import CustomerDataSearch from "../Customer-Data-Search/Customer-Data-Search";
import NewCustomerData from "../New-Customer-Data/New-Customer-Data";
import OrderEntry from "../Order-Entry/Order-Entry";
import OrderSummary from "../../Components/Order-Summary/Order-Summary";
import CustomerSummary from "../../Container/Customer-Summary/Customer-Summary";
import CustomerUpdate from "../../Container/Customer-Update/Customer-Update";

import "../POS-Systems/POS-Systems.css";
class POSSystem extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div>
          <Switch>
            <Route path="/order-summary" component={OrderSummary} />
            <Route path="/customer/new" component={NewCustomerData} />
            <Route path="/order/new" component={OrderEntry} />
            <Route path="/customer/:id/edit" component={CustomerUpdate} />
            <Route path="/customer/:id" component={CustomerSummary} />
            <Route path="/customer" component={CustomerDataSearch} />
            <Route path="/order" component={NewOrder} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default POSSystem;
