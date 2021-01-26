import React from "react";

const DetailsDropdown = (props) => {
  return (
    <div>
      <h2>Why {props.name}?</h2>
      <div />
      <p>{props.details}</p>
    </div>
  );
};

export default DetailsDropdown;
