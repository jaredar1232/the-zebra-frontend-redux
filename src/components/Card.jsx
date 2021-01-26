import React from "react";
import Stars from "./Stars";
import Logo from "./Logo";
import Features from "./Features";
import Button from "./Button";
import VerifiedMark from "./VerifiedMark";

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
        <VerifiedMark isVerified={carrier.tag} />
        <Logo />
        <div>{carrier.name}</div>

        <Stars stars={carrier.stars} />

        <Features features={carrier.features} />

        <div>
          {carrier.tagline !== undefined && carrier.tagline !== null
            ? carrier.tagline
            : null}
        </div>

        <div>{carrier.tag}</div>

        <Button data={carrier.action} type={carrier.type} rate={carrier.rate} />
      </div>
    );
  }
}
