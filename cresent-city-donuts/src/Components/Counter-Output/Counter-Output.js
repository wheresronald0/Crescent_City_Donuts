import React from "react";

const counterOutput = props => {
  return (
    <div>
      <strong>
        <h2>{props.totalCount} </h2> Donuts Ordered
      </strong>
    </div>
  );
};

export default counterOutput;
