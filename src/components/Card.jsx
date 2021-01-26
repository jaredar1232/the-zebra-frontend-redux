import React from "react";
import Stars from "./Stars";
import Logo from "./Logo";
import Features from "./Features";
import Button from "./Button";
import VerifiedMark from "./VerifiedMark";
import FeaturesListDropdown from "./FeaturesListDropdown";
import DetailsDropdown from "./DetailsDropdown";
import { ReactComponent as Chevron } from "../assets/IconChevronDown.svg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  // Toggles state: this determines which accordian CSS is being used
  handleAccordianClick = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  componentDidMount() {
    // console.log(this.props.aCardData);
  }

  render() {
    let carrier = this.props.aCardData;

    return (
      <div
        className="card-container"
        onClick={() => this.handleAccordianClick()}
      >
        <VerifiedMark isVerified={carrier.tag} />

        <Logo />

        <h1>{carrier.name}</h1>

        <Stars stars={carrier.stars} />

        <Features features={carrier.features} />

        {carrier.tagline ? <div>{carrier.tagline}</div> : null}

        <div>{carrier.tag}</div>

        <Button data={carrier.action} type={carrier.type} rate={carrier.rate} />

        <div
          className={
            this.state.isExpanded ? "dropdown-shown" : "dropdown-hidden"
          }
        >
          <FeaturesListDropdown features={carrier.features_html} />
          <DetailsDropdown name={carrier.name} details={carrier.detail_body} />
        </div>

        <Chevron
          className={this.state.isExpanded ? "chevron-up" : "chevron-down"}
        />
      </div>
    );
  }
}
