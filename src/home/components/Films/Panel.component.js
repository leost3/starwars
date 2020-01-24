import React from "react";
import "./Panel.style.scss";

const Panel = ({ togglePanel, isPanelSet, selectedFilm }) => {
  return (
    <div className={`panel ${isPanelSet && "toggled"}`}>
      <div className="panel-header">
        <span className="title">{selectedFilm ? selectedFilm.title : ""}</span>
        <span onClick={() => togglePanel(false)} className="panel-close-button">
          &#10006;
        </span>
      </div>
      <div className="panel-body">
        <div className="image-container">
          <img
            src={require(`../../../images/${
              selectedFilm ? selectedFilm.title.toLowerCase() : "default"
            }2.jpg`)}
            alt={`${selectedFilm ? selectedFilm.title : "default"}`}
          />
        </div>
        <div className="overview">
          <span className="opening_crawl">
            {selectedFilm ? selectedFilm.opening_crawl : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Panel;
