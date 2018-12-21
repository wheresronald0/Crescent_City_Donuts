import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "../Customer-Data-Search/Customer-Data-Search.css";
import axios from "axios";
import {
  Form,
  FormGroup,
  Button,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import backgroundLight from "../../Assests/background3-opacity.jpg";

class CustomerDataSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParameter: "",
      responseData: [],
      isLoaded: false,
      loader: false
    };
  }

  // componentDidMount() {
  //   this.customerSearchHandler();
  // }

  customerSearchHandler = () => {
    const data = this.state.searchParameter;
    axios
      .get(
        "https://crescent-city-donuts-backend.herokuapp.com/customer/" + data
      )
      // axios.get("http://localhost:4000/customer/" + data)
      .then(response => {
        if (response) {
          console.log(response);
          this.setState({
            responseData: response.data,
            isLoaded: true,
            loader: false
          });
        }
      });
  };

  loadingLoader = () => {
    this.setState({ loader: true });
    this.customerSearchHandler();
  };

  render() {
    console.log(this.state.responseData);
    let gotTheData = null;

    if (this.state.isLoaded) {
      gotTheData = this.state.responseData.map(customers => {
        return (
          <div key={customers._id}>
            <div className="mappedSearchResults">
              <div>
                <strong>Customer Name: &nbsp;</strong>
                {customers.firstName}&nbsp;
                {customers.lastName}&nbsp; | <strong>Address: &nbsp;</strong>
                {customers.street}&nbsp;
                {customers.city},&nbsp;
                {customers.state}&nbsp;
                {customers.zip}&nbsp; | &nbsp; <strong>Email: &nbsp;</strong>{" "}
                {customers.email}&nbsp;
              </div>

              <div>
                <NavLink to={"/customer/" + customers._id}>
                  <Button
                    bsStyle="info"
                    onClick={event => this.props.onCustomerSelect(customers)}
                  >
                    Select Customer
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      });
    }
    if (this.state.loader) {
      return (
        <div
          className="searchFormContainer"
          style={{
            backgroundImage: "url(" + backgroundLight + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div>
            <Form inline className="customerLookupForm">
              <FormGroup controlId="formInlineName">
                <ControlLabel id="searchTitle">
                  Lookup Customer by First Name, Last Name, or Email{" "}
                </ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Jane Doe"
                  onChange={event =>
                    this.setState({ searchParameter: event.target.value })
                  }
                />
              </FormGroup>
              <Button bsStyle="warning" onClick={this.loadingLoader}>
                Search for Customer
              </Button>
              <NavLink to={"customer/new"}>
                <Button bsStyle="warning">Enter New Customer</Button>
              </NavLink>
              <NavLink to={"/order"}>
                <Button bsStyle="warning">Back</Button>
              </NavLink>
            </Form>
          </div>
          <div className="spinner">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
      );
    }

    return (
      <div
        className="searchFormContainer"
        style={{
          backgroundImage: "url(" + backgroundLight + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div>
          <Form inline className="customerLookupForm">
            <FormGroup controlId="formInlineName">
              <ControlLabel id="searchTitle">
                Lookup Customer by First Name, Last Name, or Email{" "}
              </ControlLabel>
              <FormControl
                type="text"
                placeholder="Jane Doe"
                onChange={event =>
                  this.setState({ searchParameter: event.target.value })
                }
              />
            </FormGroup>
            <Button bsStyle="warning" onClick={this.loadingLoader}>
              Search for Customer
            </Button>
            <NavLink to={"customer/new"}>
              <Button bsStyle="warning">Enter New Customer</Button>
            </NavLink>
            <NavLink to={"/order"}>
              <Button bsStyle="warning">Back</Button>
            </NavLink>
          </Form>
        </div>

        <div className="seachContainer">
          <ul>{gotTheData}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onCustomerSelect: customers => {
      dispatch({ type: actions.SELECTED_CUSTOMER, customers });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerDataSearch);
