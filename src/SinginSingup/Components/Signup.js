import React from 'react'
import InputForm from "../../shared/components/FormComponents/InputForm";
import { VALIDATOR__REQUIRED,VALIDATOR_PASSWORD_CONFIRM } from "../../shared/utils/validators";
import "./Signup.scss"

const Singup = props => {
    const formState = "123"
    const onInputChangeHandler = e => {
        console.log(e.target);
      };

    return <React.Fragment>
    <InputForm
      name="name"
      type="name"
      label="Name"
      errorMessage="Please, enter your name"
      onInputChangeHandler={onInputChangeHandler}
      validators={[VALIDATOR__REQUIRED()]}
    />
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
    <InputForm
      name="password-confirm"
      type="password-confirm"
      label="Confirm Password"
      errorMessage="Password can not be empty"
      onInputChangeHandler={onInputChangeHandler}
      validators={[VALIDATOR__REQUIRED(),VALIDATOR_PASSWORD_CONFIRM(formState)]}
    />
  </React.Fragment>
}

export default Singup