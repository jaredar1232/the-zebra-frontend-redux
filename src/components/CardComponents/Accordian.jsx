import FeaturesListDropdown from "./FeaturesListDropdown";
import DetailsDropdown from "./DetailsDropdown";

const Accordian = (props) => {
  return (
    <>
      {props.features || props.details ? (
        <>
          <FeaturesListDropdown features={props.features} />
          <DetailsDropdown name={props.name} details={props.details} />
        </>
      ) : null}
    </>
  );
};

export default Accordian;
