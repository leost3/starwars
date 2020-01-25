import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./SinginSingup.scss";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Button from "../../shared/components/FormComponents/Button";
import SocialmediaSigninButton from "../../shared/components/FormComponents/SocialmediaSigninButton";
import TabsContainer from "../Components/TabsContainer";

const SigninSignup = ({ closeLogin, login }) => {
  const [useSelectedTab, setUseSelectedTab] = useState("signin");
  // const [useSelectedTab, setUseSelectedTab] = useState("signup")

  const updatedSelectedTab = tab => setUseSelectedTab(tab);
  const signinTabSelected = useSelectedTab === "signin";

  const onSigninHandler = () => {
    if (signinTabSelected) {
      login();
      closeLogin();
    } else {
      alert("signup");
      // closeLogin()
    }
  };

  const content = (
    <div className="signin-signup">
      <div className="form-container">
        <TabsContainer
          updatedSelectedTab={updatedSelectedTab}
          signinTabSelected={signinTabSelected}
        />
        <form className="signin-signup-form">
          {signinTabSelected && <Signin />}
          {!signinTabSelected && <Signup />}
          <div className="buttons-container">
            <div className="buttons-container-signin-close">
              <Button onClick={onSigninHandler} size="full">
                {signinTabSelected ? "Sign In" : "Sign Up"}
              </Button>
              <Button onClick={closeLogin} size="full" danger>
                Close
              </Button>
            </div>
            {signinTabSelected && (
              <SocialmediaSigninButton socialmedia="google" />
            )}
            {signinTabSelected && (
              <SocialmediaSigninButton socialmedia="facebook" />
            )}
          </div>
        </form>
      </div>
      <div className="side-picture">
        <img src={`${require("../../images/canada.jpg")}`} alt="" />
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("sign-hook"));
};

export default SigninSignup;
