import React, { useState, useEffect } from "react";
import "./Input.scss";

const Input = ({ type, width, height, fontSize, placeholder, ...props }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const { searchedPlaceHandler } = props;

  useEffect(() => {
    searchedPlaceHandler(inputValue);
  },[inputValue,searchedPlaceHandler]);

  return (
    <input
      onChange={onChangeHandler}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`
      }}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
