import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import Map from "../../Components/Map/Map";
import "../Customer-Summary/Customer-Summary.css";

class CustomerSummary extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      redirect: false,
      zoom: 15,
      gotGeo: false
    };
  }

  //Geocodio API for lat and lng to give to Google Maps
  componentWillMount() {
    var address = `${this.props.street}, ${this.props.city} ${
        this.props.state
      } ${this.props.zip}`,
      apiKey = "caef51c0755c405b20828ba0b81762f8f1ccadc";
    axios
      .get(
        "https://api.geocod.io/v1.3/geocode?q=" + address + "&api_key=" + apiKey
      )
      .then(response => {
        this.setState({
          center: response.data.results[0].location,
          gotGeo: true
        });
      });
  }

  render() {
    let showMap = null;
    if (this.state.gotGeo) {
      showMap = (
        <div>
          <Map center={this.state.center} zoom={this.state.zoom} />
        </div>
      );
    }

    return (
      <Table responsive id="customerSummaryContainer">
        <tbody>
          <tr>
            <th>
              <h3>Customer Summary</h3>
            </th>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>{showMap}</td>
            <td>
              <p>
                <strong>First Name: </strong>
                {this.props.firstName}
              </p>
              <p>
                <strong>Last Name: </strong>
                {this.props.lastName}
              </p>
              <p>
                <strong>Street: </strong>
                {this.props.street}{" "}
              </p>
              <p>
                <strong>City: </strong>
                {this.props.city}{" "}
              </p>
              <p>
                <strong>State: </strong>
                {this.props.state}
              </p>
              <p>
                <strong>Zip: </strong>
                {this.props.zip}{" "}
              </p>
              <p>
                <strong>Email: </strong>
                {this.props.email}{" "}
              </p>
              <p>
                <strong>Birthday: </strong>{" "}
              </p>
              <p>
                <strong>Recent Orders: </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={"/order/new"}>
                <Button bsStyle="success">Select Customer & Go To Order</Button>
              </NavLink>

              <NavLink
                to={"/customer/" + this.props.id + "/edit"}
                id="updateCustomerButton"
              >
                <Button bsStyle="warning">Update Customer</Button>
              </NavLink>
              <NavLink to={"/customer"}>
                <Button bsStyle="warning">Back</Button>
              </NavLink>
            </td>
          </tr>
        </tbody>
      </Table>
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
