import React from "react";

const counterOutput = props => {
  return (
    <div>
      <strong>
        <h4>
          Donuts Ordered: <strong> {props.totalCount} </strong>
        </h4>
      </strong>
    </div>
  );
};

export default counterOutput;
