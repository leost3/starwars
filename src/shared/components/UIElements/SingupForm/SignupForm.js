import React from "react";
import "./Signupform.scss";

const SignupForm = props => {
  return (
    <div className="sigup-container">
      <form className="signup-form">
        <div className="inputs-container">{props.children}</div>
        <div className="buttons-container">{props.buttons}</div>
      </form>
    </div>
  );
};

export default SignupForm;
