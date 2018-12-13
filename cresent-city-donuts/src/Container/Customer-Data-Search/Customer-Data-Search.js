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
import backgroundLight from "../../Assests/background3.jpg";

class CustomerDataSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParameter: "",
      responseData: []
    };
  }

  customerSearchHandler = () => {
    const data = this.state.searchParameter;
    axios.get("http://localhost:4000/customer/" + data).then(response => {
      if (response) {
        this.setState({ responseData: response.data });
      }
    });
  };

  selectThisCustomerHandler = data => {
    //store the customer selected
    console.log("hi from handler");
    const newId = data;
    console.log(newId);
    //expand beyond just id, and give all the infromation to Redux
  };

  render() {
    const searchResults = this.state.responseData;
    const eachResult = searchResults.map(customers => {
      return (
        <div key={customers._id}>
          {customers.firstName}&nbsp;
          {customers.lastName}&nbsp;
          {customers.street}&nbsp;
          {customers.city}&nbsp;
          {customers.state}&nbsp;
          {customers.zip}&nbsp;
          {customers.email}&nbsp;
          <div>
            <NavLink to={"/customer/" + customers._id}>
              <Button onClick={event => this.props.onCustomerSelect(customers)}>
                Select Customer
              </Button>
            </NavLink>
          </div>
        </div>
      );
    });

    return (
      <div className="searchFormContainer">
        <div>
          <Form inline className="customerLookupForm">
            <FormGroup controlId="formInlineName">
              <ControlLabel>
                Customer Lookup by First Name, Last Name, or Email{" "}
              </ControlLabel>{" "}
              <FormControl
                type="text"
                placeholder="Jane Doe"
                onChange={event =>
                  this.setState({ searchParameter: event.target.value })
                }
              />
            </FormGroup>{" "}
            <Button bsStyle="warning" onClick={this.customerSearchHandler}>
              Search for Customer
            </Button>
            <NavLink to={"customer/new"}>
              <Button bsStyle="warning">Enter New Customer</Button>
            </NavLink>
            <NavLink to={"/order"}>
              <Button bsStyle="warning">Back</Button>
            </NavLink>
          </Form>
          {/* <hr id="searchHR" /> */}
        </div>

        <div
          className="seachContainer"
          style={{
            backgroundImage: "url(" + backgroundLight + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
            // opacity: "0.5"
          }}
        >
          <ul>{eachResult}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
  //not sure that I need to know additional state outside of what's already in this component
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
