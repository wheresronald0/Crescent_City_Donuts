import React, { Component } from "react";
import ItemCount from "../Item-Count/Item-Count";
import { Modal, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class OrderSummary extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      alert: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleAlert = () => {
    this.setState({ alert: true });
  };

  render() {
    const cost = +(this.props.individualCounter * 1.5).toFixed(2);
    const tax = +(cost * 0.05).toFixed(2);
    const totalCost = +(cost + tax).toFixed(2);
    let displayAlert = null;
    if (this.state.alert) {
      displayAlert = (
        <Alert bsStyle="success">
          <strong>Order Completed</strong> Your delicious Crescent City Donuts
          are on the way!
        </Alert>
      );
    }

    return (
      <div>
        <Button bsStyle="success" onClick={this.handleShow}>
          Order Summary
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            {displayAlert}
            <Modal.Title>
              <strong>
                Order for {this.props.firstName}&nbsp;{this.props.lastName}
              </strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Customer Address:</h4>
            <div>
              {this.props.street}, &nbsp;
              {this.props.city}, &nbsp;
              {this.props.state}&nbsp;
              {this.props.zip}
            </div>
            <hr />
            <ItemCount
              totalCount={this.props.totalCount}
              sugarGlazedCount={this.props.sugarGlazedCount}
              chocolateCount={this.props.chocolateCount}
              blueberryCount={this.props.blueberryCount}
              strawberryCount={this.props.strawberryCount}
              confettiCount={this.props.confettiCount}
              individualCounter={this.props.individualCounter}
            />
            <h4>
              <p>Cost $ {cost} </p>
              <p>Tax $ {tax} </p>
              <strong>Total Cost $ {totalCost} </strong>
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.handleClose}>
              Go Back- It's Not Quite Right
            </Button>
            <Button bsStyle="success" onClick={this.handleAlert}>
              Submit Order
            </Button>
            <NavLink to={"/order"}>
              <Button
                bsStyle="success"
                onClick={this.handleAlert}
                style={{ marginLeft: "92px" }}
              >
                Start a New Order
              </Button>
            </NavLink>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default OrderSummary;
