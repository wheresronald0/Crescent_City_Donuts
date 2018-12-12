import React, { Component } from "react";
import ItemCount from "../Item-Count/Item-Count";
import { Modal, Button, Alert } from "react-bootstrap";

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
    const totalCost = this.props.individualCounter * 1.5;
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
                {this.props.firstName}&nbsp;{this.props.lastName}
              </strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Customer Address</h4>
            <div>
              {this.props.street}
              {this.props.city}
              {this.props.state}
              {this.props.zip}
              {this.props.email}
            </div>
            <hr />
            <h4>Order Details:</h4>
            <ItemCount
              sugarGlazedCount={this.props.sugarGlazedCount}
              chocolateCount={this.props.chocolateCount}
              blueberryCount={this.props.blueberryCount}
              strawberryCount={this.props.strawberryCount}
              confettiCount={this.props.confettiCount}
              individualCounter={this.props.individualCounter}
            />
            <h4>Total Cost ${totalCost}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            {/* <NavLink to={"/order"}> */}
            <Button onClick={this.handleAlert}>Submit Order</Button>
            {/* </NavLink> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default OrderSummary;
