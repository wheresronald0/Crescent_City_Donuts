import React, { Component } from "react";

class NewCustomerData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <lable>Name</lable>
          <input type="text" />
          <lable>Address</lable>
          <input type="text" />
          <lable>Address</lable>
          <input type="text" />
          <lable>State</lable>
          <input type="text" />
          <lable>City</lable>
          <input type="text" />
          <lable>Zip</lable>
          <input type="text" />
          <button>Submit</button>
        </form>
        <a href="/">
          <button>Back</button>
        </a>
      </div>
    );
  }
}

export default NewCustomerData;
