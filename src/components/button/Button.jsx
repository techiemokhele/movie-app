import React from "react";
import PropTypes from "prop-types";
//import "./button.scss";

/* Used to click on movie option */
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick() ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

/* Unique button decoration */
export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick() ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

/* Ensure prop is a function onClick */
Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
