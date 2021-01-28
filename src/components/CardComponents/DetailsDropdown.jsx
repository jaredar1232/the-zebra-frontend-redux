const DetailsDropdown = (props) => {
  if (props.details) {
    return (
      <div className="card__detailsdropdown">
        <h2>Why {props.name}?</h2>
        <div className="card__dropdown-divider" />
        <p>{props.details}</p>
      </div>
    );
  }
  // Return an empty div for grid formatting purposes
  return <div className="card__detailsdropdown"></div>;
};

export default DetailsDropdown;
