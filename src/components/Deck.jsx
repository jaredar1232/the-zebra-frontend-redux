import Card from "./Card";

const Deck = (props) => {
  // Takes in sort formValue. Updates carrierCardData in state
  const sortData = (formValue, unsortedData) => {
    let sortedCarrierCardData;

    switch (formValue) {
      case "highest":
        sortedCarrierCardData = unsortedData.sort((a, b) => {
          return b.card_order_price - a.card_order_price;
        });
        break;
      case "lowest":
        sortedCarrierCardData = unsortedData.sort((a, b) => {
          return a.card_order_price - b.card_order_price;
        });
        break;
      case "best":
        sortedCarrierCardData = unsortedData.sort((a, b) => {
          // These temp variables are needed to sort undefined/null without modifying original values
          let tempA = a.stars === undefined || a.stars === null ? 0 : a.stars,
            tempB = b.stars === undefined || b.stars === null ? 0 : b.stars;
          return tempB - tempA;
        });
        break;
      case "worst":
        sortedCarrierCardData = unsortedData.sort((a, b) => {
          // These temp variables are needed to sort undefined/null without modifying original values
          let tempA = a.stars === undefined || a.stars === null ? 0 : a.stars,
            tempB = b.stars === undefined || b.stars === null ? 0 : b.stars;
          return tempA - tempB;
        });
        break;
      case "alphabeticalA":
        sortedCarrierCardData = unsortedData.sort((a, b) => {
          // Fixed typos in provided "card_order_a_to_z" data.
          return a.card_order_a_to_z - b.card_order_a_to_z;
        });
        break;
      case "alphabeticalZ":
        sortedCarrierCardData = unsortedData.sort((a, b) => {
          // Fixed typos in provided "card_order_a_to_z" data
          return b.card_order_a_to_z - a.card_order_a_to_z;
        });
        break;
      default:
        sortedCarrierCardData = unsortedData.sort((a, b) => {
          return a.card_order_price - b.card_order_price;
        });
    }

    return sortedCarrierCardData;
  };

  return (
    <div className="card-container">
      {sortData(props.formValue, props.carrierCardData).map((aCardData) => (
        <Card
          aCardData={aCardData}
          key={aCardData.name}
          data-testid="card-test-id"
        />
      ))}
    </div>
  );
};

export default Deck;
