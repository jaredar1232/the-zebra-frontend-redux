const Price = (props) => {
  if (props.type === 2 || (props.isExpanded && props.rate)) {
    return (
      <div data-testid="price-test-id">
        ${Math.ceil(props.rate)} <span>/ mo</span>
      </div>
    );
  } else {
    return null;
  }
};

export default Price;
