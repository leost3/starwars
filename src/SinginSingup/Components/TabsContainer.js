import React from "react";
import "./TabsContainer.scss";
const TabsContainer = ({updatedSelectedTab, signinTabSelected}) => {
  return (
    <div className="tabs-container">
      <div className={`signin-container ${!signinTabSelected&&"unactive"}`} onClick={() => updatedSelectedTab("signin")}>
        <span className="signin-buttons">Sign In</span>
      </div>
      <div className={`signup-container ${signinTabSelected&&"unactive"}`} onClick={() => updatedSelectedTab("signup")}>
        <span className="signup-buttons">Sign Up</span>
      </div>
    </div>
  );
};

export default TabsContainer;
