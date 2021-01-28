const Price = (props) => {
  if (props.type === 2 || props.type === 3) {
    return (
      <div className="card-price" data-testid="price-test-id">
        ${Math.ceil(props.rate)} <span className="card-price-month">/ mo</span>
      </div>
    );
  } else {
    return null;
  }
};

export default Price;
