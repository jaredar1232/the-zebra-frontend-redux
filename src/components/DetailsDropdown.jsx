import React from "react";

const DetailsDropdown = (props) => {
  if (props.details) {
    return (
      <div>
        <h2>Why {props.name}?</h2>
        <div />
        <p>{props.details}</p>
      </div>
    );
  }
  return null;
};

export default DetailsDropdown;
