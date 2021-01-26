import React from "react";
import { ReactComponent as IconArrowDown } from "../assets/IconArrowDown.svg";
import { ReactComponent as IconBoltWhite } from "../assets/IconBoltWhite.svg";

/**
 * Type determines color
 * Text determines icon
 */
const Button = (props) => {
  if (props.type === 0 || props.type === 1) {
    return (
      <a href={props.data.link} target="_blank" rel="noopener noreferrer">
        {props.data.link_copy === "Buy Online Now" ? (
          <IconBoltWhite />
        ) : (
          <IconArrowDown />
        )}
        {props.data.link_text ? props.data.link_text : props.data.link_copy}
      </a>
    );
  } else if (props.type === 3) {
    return (
      <a href={props.data.link} target="_blank" rel="noopener noreferrer">
        {props.data.link_copy === "Buy Online Now" ? (
          <IconBoltWhite />
        ) : (
          <IconArrowDown />
        )}
        {props.data.link_text ? props.data.link_text : props.data.link_copy}
      </a>
    );
  } else if (props.type === 2) {
    return null;
  }
};

export default Button;
