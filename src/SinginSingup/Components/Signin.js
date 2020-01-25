import React from "react";
import InputForm from "../../shared/components/FormComponents/InputForm";
import { VALIDATOR__REQUIRED } from "../../shared/utils/validators";
import "./Signin.scss";

const Signin = props => {
  const onInputChangeHandler = e => {
    console.log(e.target);
  };

  return (
    <React.Fragment>
      <InputForm
        name="e-mail"
        type="e-mail"
        label="E-mail"
        errorMessage="Please, enter a valid e-mail"
        onInputChangeHandler={onInputChangeHandler}
        validators={[VALIDATOR__REQUIRED()]}
      />
      <InputForm
        name="password"
        type="password"
        label="Password"
        errorMessage="Password can not be empty"
        onInputChangeHandler={onInputChangeHandler}
        validators={[VALIDATOR__REQUIRED()]}
      />
    </React.Fragment>
  );
};

export default Signin;
