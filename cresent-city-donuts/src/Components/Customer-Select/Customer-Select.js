import React from "react";
import "./Customer-Select.css";

const customerSelect = () => {
  return (
    <div className="selectorContainer">
      <div className="existingCustomer">
        <p className="searchLable"> Search Existing Customer</p>
      </div>
      <div className="newCustomer">
        <p className="searchLable">Enter New Customer</p>
      </div>
    </div>
  );
};

export default customerSelect;
