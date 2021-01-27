const FeaturesListDropdown = (props) => {
  console.log(props.features);
  if (props.features) {
    return (
      <div>
        <h2>Features</h2>
        <div />
        <p dangerouslySetInnerHTML={{ __html: props.features }}></p>
      </div>
    );
  } else {
    return null;
  }
};

export default FeaturesListDropdown;
