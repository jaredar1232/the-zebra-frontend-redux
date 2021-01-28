import React from "react";
import Stars from "./CardComponents/Stars";
import Logo from "./CardComponents/Logo";
import Features from "./CardComponents/Features";
import Button from "./CardComponents/Button";
import VerifiedMark from "./CardComponents/VerifiedMark";
import FeaturesListDropdown from "./CardComponents/FeaturesListDropdown";
import DetailsDropdown from "./CardComponents/DetailsDropdown";
import Price from "./CardComponents/Price";
import { ReactComponent as Chevron } from "../assets/IconChevronDown.svg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  // Toggles isExpanded state
  handleAccordianClick = () => {
    /**
     * I originally wanted to toggle the accordian with clicks to certain
     * parts of the parent but that will take more set up to filter each
     * element clicked
     */

    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    let carrier = this.props.aCardData;

    return (
      <div className="card">
        <VerifiedMark isVerified={carrier.tag} />

        <div className="card-topfold-container">
          <div className="card-topfold-subcontainer-1">
            <Logo />
          </div>

          <div className="card-topfold-subcontainer-2">
            <h1 className="carrier-name" data-testid="carriername-test-id">
              {carrier.name}
            </h1>
            <Stars stars={carrier.stars} />
            <Features features={carrier.features} />
            {carrier.tagline ? (
              <div className="carrier-tagline" data-testid="tagline-test-id">
                {carrier.tagline}
              </div>
            ) : null}
          </div>

          <div className="card-topfold-subcontainer-3">
            <div className="card-tag" data-testid="tag-test-id">
              {carrier.tag}
            </div>
            <Price rate={carrier.rate} type={carrier.type} />
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

        <button
          className="chevron-button"
          onClick={(e) => this.handleAccordianClick(e)}
        >
          <Chevron
            data-testid="chevron-test-id"
            className={this.state.isExpanded ? "chevron-up" : "chevron-down"}
          />
        </button>
      </div>
    );
  }
}
