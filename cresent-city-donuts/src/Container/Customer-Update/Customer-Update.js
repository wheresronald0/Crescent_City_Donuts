import React, { Component } from "react";
import * as actions from "../../store/actions";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import "../Customer-Update/Customer-Update.css";
import backgroundLight from "../../Assests/background3.jpg";
import {
  Form,
  FormGroup,
  Button,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class CustomerUpdate extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      street: this.props.street,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      email: this.props.email,
      _id: this.props.id,
      updateRedirect: false,
      deleteRedirect: false
    });
  }
  componentWillUnmount() {
    const customers = this.state;
    this.props.onCustomerSelect(customers);
  }

  customerUpdateHandler = () => {
    const data = this.state;
    axios
      .put("http://localhost:4000/customer/" + this.state.id, data)
      .then(response => {
        this.updateRedirect();
      });
  };

  customerDeleteHandler = () => {
    axios
      .delete("http://localhost:4000/customer/" + this.props.id)
      .then(response => {
        this.deleteRedirect();
      });
  };

  updateRedirect = () => {
    this.setState({ updateRedirect: true });
  };
  deleteRedirect = () => {
    this.setState({ deleteRedirect: true });
  };

  renderOnUpdateRedirect = () => {
    if (this.state.updateRedirect) {
      return <Redirect to={"/customer/" + this.props.id} />;
    }
  };
  renderOnDeleteRedirect = () => {
    if (this.state.deleteRedirect) {
      return <Redirect to="/customer" />;
    }
  };

  updateStateWithNewFormData = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
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
            <strong>Edit Customer </strong>
          </h3>
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              name="firstName"
              type="text"
              placeholder="Jane"
              onChange={this.updateStateWithNewFormData}
              value={this.state.firstName}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              name="lastName"
              type="text"
              placeholder="Doe"
              onChange={this.updateStateWithNewFormData}
              value={this.state.lastName}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Street Address</ControlLabel>
            <FormControl
              name="street"
              type="text"
              placeholder="123 Spooner Street"
              onChange={this.updateStateWithNewFormData}
              value={this.state.street}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>City</ControlLabel>
            <FormControl
              name="city"
              type="text"
              placeholder="Springfield"
              onChange={this.updateStateWithNewFormData}
              value={this.state.city}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>State</ControlLabel>
            <FormControl
              name="state"
              type="text"
              placeholder="MO"
              onChange={this.updateStateWithNewFormData}
              value={this.state.state}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl
              name="zip"
              type="text"
              placeholder="33322"
              onChange={this.updateStateWithNewFormData}
              value={this.state.zip}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              name="email"
              type="text"
              placeholder="japple@gmail.com"
              onChange={this.updateStateWithNewFormData}
              value={this.state.email}
            />
          </FormGroup>
          <Button bsStyle="warning" onClick={this.customerUpdateHandler}>
            Save Changes
          </Button>
          <Button
            bsStyle="danger"
            id="deleteCustomerBtn"
            onClick={this.customerDeleteHandler}
          >
            Delete Customer
          </Button>
          <NavLink to={"/customer"}>
            <Button bsStyle="warning">Back</Button>
          </NavLink>
        </Form>

        {this.renderOnUpdateRedirect()}
        {this.renderOnDeleteRedirect()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // localState: state,
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
)(CustomerUpdate);
