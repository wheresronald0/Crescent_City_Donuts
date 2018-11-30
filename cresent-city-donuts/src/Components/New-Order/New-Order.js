import React from "react";
import "./New-Order.css";

const newOrder = () => {
  return (
    <div className="selectorContainer">
      <a href="/customer-data-search">
        <div className="existingCustomer">
          <p className="searchLable"> Search Existing Customer</p>
        </div>
      </a>
      <a href="/new-customer-data">
        <div className="newCustomer">
          <p className="searchLable">Enter New Customer</p>
        </div>
      </a>
      <a href="/order-entry">
        <div className="orderEntry">
          <p className="searchLable">Order Now</p>
        </div>
      </a>
    </div>
  );
};

export default newOrder;
