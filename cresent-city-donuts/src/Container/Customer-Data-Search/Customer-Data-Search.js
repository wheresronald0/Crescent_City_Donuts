import React, { Component } from "react";

class CustomerDataSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <lable>Enter Customer Name</lable>
          <input type="text" />
        </form>
      </div>
    );
  }
}
export default CustomerDataSearch;
