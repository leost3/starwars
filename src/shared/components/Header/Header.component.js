import React from "react";
import "./Header.style.scss";

import Leading from "./Leading.component";
import Trailing from "./Trailing.component";

const Header = props => {
  return (
    <div className="main-header">
      <Leading />
      <Trailing />
    </div>
  );
};

export default Header;
