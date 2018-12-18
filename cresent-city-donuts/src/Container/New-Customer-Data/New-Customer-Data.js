import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { NavLink, Redirect } from "react-router-dom";
import "./New-Customer-Data.css";
import axios from "axios";
import {
  Form,
  FormGroup,
  Button,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import backgroundLight from "../../Assests/background3.jpg";

class NewCustomerData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      responseData: []
    };
  }

  customerDataHandler = () => {
    const data = this.state;
    axios.post("http://localhost:4000/customer", data).then(response => {
      if (response) {
        this.setState({ responseData: response.data });
        this.updateRedirect();
      }
    });
  };

  //redirect control
  updateRedirect = () => {
    this.setState({ redirect: true });
  };
  renderOnUpdateRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/order/new" />;
    }
  };

  render() {
    const customers = this.state.responseData;
    this.props.onCustomerSelect(customers);

    return (
      <div
        className="newCustomerFormContainer"
        style={{
          backgroundImage: "url(" + backgroundLight + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Form className="newCustomerForm">
          <h3>
            <strong>Enter New Crescent City Customer</strong>
          </h3>
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
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              placeholder="japple@gmail.com"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </FormGroup>
          <Button
            bsStyle="warning"
            id="saveCustomerBtn"
            onClick={this.customerDataHandler}
          >
            Save Customer
          </Button>
          <NavLink to={"/order"}>
            <Button bsStyle="warning">Back</Button>
          </NavLink>
        </Form>

        {this.renderOnUpdateRedirect()}
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
)(NewCustomerData);
