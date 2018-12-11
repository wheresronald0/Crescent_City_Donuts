import React, { Component } from "react";
import * as actions from "../../store/actions";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Button } from "react-bootstrap";
import Map from "../../Components/Map/Map";
import "../Customer-Summary/Customer-Summary.css";

class CustomerSummary extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: false
    };
  }

  //   updateRedirect = () => {
  //     this.setState({ redirect: true });
  //   };

  //   renderOnUpdateRedirect = () => {
  //     if (this.state.redirect) {
  //       return <Redirect to="/customer" />;
  //     }
  //   };

  render() {
    return (
      <div id="customerSummaryContainer">
        <h3>Customer Summary</h3>
        <div>
          {this.props.firstName}
          {this.props.lastName}
          {this.props.street}
          {this.props.city}
          {this.props.state}
          {this.props.zip}
          {this.props.email}
        </div>
        <Map />

        <NavLink to={"/order/new"}>
          <Button bsStyle="success">Select Customer & Go To Order</Button>
        </NavLink>

        <NavLink to={"/customer/" + this.props.id + "/edit"}>
          <Button bsStyle="warning">Update Customer</Button>
        </NavLink>
        <NavLink to={"/customer"}>
          <Button bsStyle="warning">Back</Button>
        </NavLink>
        {/* {this.renderOnUpdateRedirect()} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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

export default connect(mapStateToProps)(CustomerSummary);
