import React from "react";
import "./EmptyState.style.scss"

const EmptyState = props => {
  return (
    <div className="empty-state">
      <img src={require("../../images/empty-state.jpg")} alt="not found" />;
    </div>
  );
};

export default EmptyState;
