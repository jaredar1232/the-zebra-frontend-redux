import { ReactComponent as IconArrowDown } from "../../assets/IconArrowDown.svg";
import { ReactComponent as IconBoltWhite } from "../../assets/IconBoltWhite.svg";

/**
 * Type determines color, icon, and text
 */
const Button = (props) => {
  if (props.type === 0 || props.type === 1) {
    return (
      <a
        className="card__button card__button--blue"
        href={props.data.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconArrowDown />

        <div className={"card__button-caption"}>{props.data.link_text}</div>
      </a>
    );
  } else if (props.type === 3) {
    return (
      <a
        className="card__button card__button--orange"
        href={props.data.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBoltWhite />
        <div className={"card__button-caption"}>
          {props.data.link_copy ? "Buy Now" : null}
        </div>
      </a>
    );
  } else {
    return null;
  }
};

export default Button;
