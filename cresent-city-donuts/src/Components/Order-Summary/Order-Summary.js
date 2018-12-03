import React from "react";
import ItemCount from "../Item-Count/Item-Count";
import { Modal, Button } from "react-bootstrap";

class OrderSummary extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle="success" onClick={this.handleShow}>
          Order Summary
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Customer Name and Address to be diplayed</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Customer Information</h4>
            <p>Name</p>
            <p>Address</p>
            <hr />

            <h4>Order Details:</h4>
            <ItemCount />
            <h3>Total Cost:</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button onClick={this.handleClose}>Submit Order</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default OrderSummary;
