import React, { Component } from "react";
import "./Customer-Data-Search.css";
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
  }
  render() {
    return (
      <div className="formContainer">
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Customer Lookup by Name</ControlLabel>{" "}
            <FormControl type="text" placeholder="Jane Doe" />
          </FormGroup>{" "}
          <Button bsStyle="warning" type="submit">
            Search for Customer
          </Button>
          <Button href="/" bsStyle="warning" type="submit">
            Back
          </Button>
        </Form>
        <hr />
      </div>
    );
  }
}
export default CustomerDataSearch;
