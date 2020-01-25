import React from "react";
import "./Button.scss";

const Button = ({
  socialmedia,
  onClick,
  size,
  inverse,
  danger,
  children,
  disabled
}) => {


  const onClickHandler = e => {
    e.preventDefault();
    onClick()
  }

  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      className={`button button-${size || "default"}  ${inverse &&
        "button-inverse"} ${danger && "button-danger"} ${socialmedia &&
        `button-${socialmedia}`}`}
    >
      {children}
    </button>
  );
};

export default Button;
