import React from "react";
import "./Panel.style.scss";

const Panel = ({ togglePanel, isPanelSet, selectedFilm }) => {
  return (
    <div className={`panel ${isPanelSet && "toggled"}`}>
      <div className="panel-header">
        <span className="title">{selectedFilm}</span>
        <span onClick={() => togglePanel(false)} className="close">
          close
        </span>
      </div>
    </div>
  );
};

export default Panel;
