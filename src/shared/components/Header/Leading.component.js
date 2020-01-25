import React from "react";
import "./Leading.style.scss";
import { Link } from "react-router-dom";
const Leading = props => {
  return (
    <Link to="/">
      <div className="leading">
        <img src={require(`../../../images/star-wars-logo.jpg`)} alt="logo" />
      </div>
    </Link>
  );
};

export default Leading;
