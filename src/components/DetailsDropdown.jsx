import React from "react";

const DetailsDropdown = (props) => {
  // Return an empty div for grid formatting purposes
  if (props.details) {
    return (
      <div
        className="card-detailsdropdown"
        data-testid="detailsdropdown-test-id"
      >
        <h2>Why {props.name}?</h2>
        <div />
        <p>{props.details}</p>
      </div>
    );
  }
  return <div className="card-detailsdropdown"></div>;
};

export default DetailsDropdown;
