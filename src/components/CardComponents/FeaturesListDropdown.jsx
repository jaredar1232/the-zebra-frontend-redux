const FeaturesListDropdown = (props) => {
  // Return an empty div for grid formatting purposes
  if (props.features) {
    return (
      <div
        className="card-featureslistdropdown"
        data-testid="featureslistdropdown-test-id"
      >
        <h2>Features</h2>
        <div className="dropdown-divider" />
        <p dangerouslySetInnerHTML={{ __html: props.features }}></p>
      </div>
    );
  } else {
    return <div className="card-featureslistdropdown"></div>;
  }
};

export default FeaturesListDropdown;
