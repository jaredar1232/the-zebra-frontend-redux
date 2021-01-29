import Card from "./Card";
import sortData from "../helpers/sortData";

// Helpers:
// sortData takes in string keyword and unstorted data array. Returns sorted data array

// Container for mapping and holding all carrier cards
const Deck = (props) => {
  return (
    <div className="deck__card-container">
      {sortData(props.formValue, props.carrierCardData).map((aCardData) => (
        <Card aCardData={aCardData} key={aCardData.name} />
      ))}
    </div>
  );
};

export { Deck, sortData };
