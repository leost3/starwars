import React from "react";

import "./SocialmediaSigninButton.scss";

const SocialmediaSigninButton = ({ socialmedia, onClick }) => {
  const upperSocialmedia =
    socialmedia.charAt(0).toUpperCase() + socialmedia.substring(1);

  const onClickHandler = e => {
    e.preventDefault();
    onClick();
  }

  return (
    <div className="gSignInWrapper" onClick={onClickHandler}>
      <div className={`socialmedia-button socialmedia-button-${socialmedia} customGPlusSignIn `}>
        <span className={`icon-${socialmedia}`}></span>
        <span className="buttonText">{upperSocialmedia}</span>
      </div>
    </div>
  );
};

export default SocialmediaSigninButton;
