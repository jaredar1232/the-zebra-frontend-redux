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

  handleAccordianClick = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const carrier = this.props.aCardData;

    return (
      <div className="card" data-testid="card-test-id">
        <VerifiedMark isVerified={carrier.tag} />

        <div className="card__topfold-container">
          <div className="card__topfold-subcontainer--1">
            <Logo />
          </div>

          <div className="card__topfold-subcontainer--2">
            <h1 className="card__carrier-name">{carrier.name}</h1>
            <Stars stars={carrier.stars} />
            <Features features={carrier.features} />
            {carrier.tagline ? (
              <div className="card__carrier-tagline">{carrier.tagline}</div>
            ) : null}
          </div>

          <div className="card__topfold-subcontainer--3">
            <div className="card__verified-tag">{carrier.tag}</div>
            <Price rate={carrier.rate} type={carrier.type} />
            <Button data={carrier.action} type={carrier.type} />
          </div>
        </div>

        <div
          className={
            this.state.isExpanded
              ? "card__accordion--down"
              : "card__accordion--up"
          }
        >
          <FeaturesListDropdown features={carrier.features} />
          <DetailsDropdown name={carrier.name} details={carrier.detail_body} />
        </div>

        {carrier.features?.length > 0 || carrier?.details ? (
          <button
            className="card__chevron-button"
            onClick={(e) => this.handleAccordianClick(e)}
          >
            <Chevron
              className={
                this.state.isExpanded
                  ? "card__chevron--up"
                  : "card__chevron--down"
              }
            />
          </button>
        ) : (
          <div className="card__chevron-placeholder"></div>
        )}
      </div>
    );
  }
}
