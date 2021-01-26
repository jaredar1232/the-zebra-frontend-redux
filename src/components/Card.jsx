import React from "react";
import Stars from "./Stars";
import Logo from "./Logo";
import Features from "./Features";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // bind methods here
  }
  componentDidMount() {
    console.log(this.props.aCardData);
  }

  render() {
    let carrier = this.props.aCardData;
    return (
      <div className="card-container">
        <Logo />
        <div>{carrier.name}</div>

        {carrier.stars !== undefined && carrier.stars !== null ? (
          <Stars stars={carrier.stars} />
        ) : null}

        {carrier.features !== undefined && carrier.features !== null ? (
          <Features features={carrier.features} />
        ) : null}

        <div>
          {carrier.tagline !== undefined && carrier.tagline !== null
            ? carrier.tagline
            : null}
        </div>
      </div>
    );
  }
}
