import React, { Component } from "react";
import NavBar from "../../Components/Nav-Bar/Nav-Bar";
import CustomerSelect from "../../Components/Customer-Select/Customer-Select";

class POSSystem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />

        <CustomerSelect />
      </div>
    );
  }
}

export default POSSystem;
