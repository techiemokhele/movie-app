import React from "react";
//import "./input";

/* Ensure user is able to enter chars on input field */
const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default Input;
