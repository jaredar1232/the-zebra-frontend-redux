const Price = (props) => {
  if (props.type === 2 || props.type === 3) {
    return (
      <div className="card__price">
        ${Math.ceil(props.rate)} <span className="card__price-month">/ mo</span>
      </div>
    );
  } else {
    return null;
  }
};

export default Price;
