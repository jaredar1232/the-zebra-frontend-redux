import React from "react";
import Stars from "./Stars";
import Logo from "./Logo";
import Features from "./Features";
import Button from "./Button";
import VerifiedMark from "./VerifiedMark";
import FeaturesListDropdown from "./FeaturesListDropdown";
import DetailsDropdown from "./DetailsDropdown";
import Price from "./Price";
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

  render() {
    let carrier = this.props.aCardData;

    return (
      <div className="card" onClick={() => this.handleAccordianClick()}>
        <VerifiedMark isVerified={carrier.tag} />

        <div className="card-topfold-container">
          <div className="card-topfold-subcontainer-1">
            <Logo />
          </div>

          <div className="card-topfold-subcontainer-2">
            <h1 className="carrier-name">{carrier.name}</h1>
            <Stars stars={carrier.stars} />
            <Features features={carrier.features} />
            {carrier.tagline ? (
              <div className="carrier-tagline">{carrier.tagline}</div>
            ) : null}
          </div>

          <div className="card-topfold-subcontainer-3">
            <div>{carrier.tag}</div>
            <Price
              rate={carrier.rate}
              type={carrier.type}
              isExpanded={this.state.isExpanded}
            />
            <Button data={carrier.action} type={carrier.type} />
          </div>
        </div>

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
