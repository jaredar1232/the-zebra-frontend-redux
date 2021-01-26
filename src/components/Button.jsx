import React from "react";

const Button = (props) => {
  console.log(props.data);
  return (
    <a href={props.data.link} target="_blank" rel="noopener noreferrer">
      {props.data.link_text ? props.data.link_text : props.data.link_copy}
    </a>
  );
};

export default Button;
