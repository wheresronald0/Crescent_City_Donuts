import React, { Component } from "react";
import "./New-Customer-Data.css";
import axios from "axios";
import {
  Form,
  FormGroup,
  Button,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class NewCustomerData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  customerDataHandler = () => {
    const data = this.state;
    axios.post("http://localhost:4000/customer", data).then(response => {
      if (response) {
        console.log(response);
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Form className="newCustomerForm">
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Jane"
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Doe"
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Street Address</ControlLabel>
            <FormControl
              type="text"
              placeholder="123 Spooner Street"
              onChange={event => this.setState({ street: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>City</ControlLabel>
            <FormControl
              type="text"
              placeholder="Springfield"
              onChange={event => this.setState({ city: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>State</ControlLabel>
            <FormControl
              type="text"
              placeholder="MO"
              onChange={event => this.setState({ state: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl
              type="text"
              placeholder="33322"
              onChange={event => this.setState({ zip: event.target.value })}
            />
          </FormGroup>
          <Button onClick={this.customerDataHandler}>Submit Customer</Button>
        </Form>
        <a href="/">
          <Button>Back</Button>
        </a>
      </div>
    );
  }
}

export default NewCustomerData;
