import React from "react";
import { NavLink } from "react-router-dom";
import "./New-Order.css";

const newOrder = () => {
  return (
    <div className="selectorContainer">
      <NavLink to={"/customer"}>
        <div className="existingCustomer">
          <p className="searchLable"> Search Existing Customer</p>
        </div>
      </NavLink>

      <NavLink to={"/customer/new"}>
        <div className="newCustomer">
          <p className="searchLable">Enter New Customer</p>
        </div>
      </NavLink>

      <NavLink to={"/order/new"}>
        <div className="orderEntry">
          <p className="searchLable">Order Now</p>
        </div>
      </NavLink>
    </div>
  );
};

export default newOrder;
