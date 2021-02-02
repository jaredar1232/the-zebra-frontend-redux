// Takes in sort formValue and unstorted data. Returns sorted data array
const sortData = (formValue, unsortedData) => {
  // Make a deep copy instead of shallow since its array of objects
  let sortedCarrierCardData = JSON.parse(JSON.stringify(unsortedData));

  switch (formValue) {
    case "highest":
      sortedCarrierCardData.sort((a, b) => {
        return b.card_order_price - a.card_order_price;
      });
      break;
    case "lowest":
      sortedCarrierCardData.sort((a, b) => {
        return a.card_order_price - b.card_order_price;
      });
      break;
    case "best":
      sortedCarrierCardData.sort((a, b) => {
        // These temp variables are needed to sort undefined/null without modifying original values
        let tempA = a.stars === undefined || a.stars === null ? 0 : a.stars,
          tempB = b.stars === undefined || b.stars === null ? 0 : b.stars;
        return tempB - tempA;
      });
      break;
    case "worst":
      sortedCarrierCardData.sort((a, b) => {
        // These temp variables are needed to sort undefined/null without modifying original values
        let tempA = a.stars === undefined || a.stars === null ? 0 : a.stars,
          tempB = b.stars === undefined || b.stars === null ? 0 : b.stars;
        return tempA - tempB;
      });
      break;
    case "alphabeticalA":
      sortedCarrierCardData.sort((a, b) => {
        // Fixed typos in provided "card_order_a_to_z" data.
        return a.card_order_a_to_z - b.card_order_a_to_z;
      });
      break;
    case "alphabeticalZ":
      sortedCarrierCardData.sort((a, b) => {
        // Fixed typos in provided "card_order_a_to_z" data
        return a.card_order_z_to_a - b.card_order_z_to_a;
      });
      break;
    default:
      sortedCarrierCardData.sort((a, b) => {
        return a.card_order_price - b.card_order_price;
      });
  }

  return sortedCarrierCardData;
};

export default sortData;
