/**
 * The design doc specifically asks for "features_html" nodes but the mockup
 * seems to show "features.name" from the "features" node. This is something I would
 * double check with the designer to see if it was a mistake. I went with features.name
 * as it seems to be the more logical choice.
 */

const FeaturesListDropdown = (props) => {
  // Return an empty div for grid formatting purposes
  let featuresExist = props.features !== undefined && props.features.length > 0;
  if (featuresExist) {
    return (
      <div className="card__featureslistdropdown">
        <h2>Features</h2>
        <div className="card__dropdown-divider" />
        <ul className="card__featureslistdropdown-unorderedlist">
          {props.features.map((aFeatureObject) => (
            <li key={aFeatureObject.name}>{aFeatureObject.name}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div className="card__featureslistdropdown"></div>;
  }
};

export default FeaturesListDropdown;
