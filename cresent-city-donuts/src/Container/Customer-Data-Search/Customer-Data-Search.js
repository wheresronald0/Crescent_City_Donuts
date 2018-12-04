import React, { Component } from "react";
import "./Customer-Data-Search.css";
import axios from "axios";
import {
  Form,
  FormGroup,
  Button,
  ControlLabel,
  FormControl
} from "react-bootstrap";

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

  selectThisCustomerHandler = id => {
    //store the customer selected
    console.log("hi from handler");
    const newId = id;
    console.log(newId);
    //expand beyond just id, adn give all the infromation to Redux
  };

  render() {
    const searchResults = this.state.responseData;
    const eachResult = searchResults.map(customers => {
      return (
        <ul key={customers._id}>
          <li onClick={event => this.selectThisCustomerHandler(customers)}>
            {customers.firstName}&nbsp;
            {customers.lastName}&nbsp;
            {customers.street}&nbsp;
            {customers.city}&nbsp;
            {customers.state}&nbsp;
            {customers.zip}&nbsp;
            {customers.email}&nbsp;
          </li>
        </ul>
      );
    });

    return (
      <div className="formContainer">
        <Form inline>
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
          <Button href="/" bsStyle="warning">
            Back
          </Button>
        </Form>
        <hr />
        {eachResult}
      </div>
    );
  }
}
export default CustomerDataSearch;
