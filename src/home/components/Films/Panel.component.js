import React from "react";
import "./Panel.style.scss";
import { useSelector } from "react-redux";
import _ from "lodash";

const Panel = ({ togglePanel, isPanelSet }) => {
  const selectedFilm = useSelector(state => state.selectedFilm.selectedFilm);

  const hasMovieBeenSelected = _.isEmpty(selectedFilm);

  return (
    <div className={`panel ${isPanelSet && "toggled"}`}>
      <div className="panel-header">
        <span className="title">
          {!hasMovieBeenSelected ? selectedFilm.title : ""}
        </span>
        <span onClick={() => togglePanel(false)} className="panel-close-button">
          &#10006;
        </span>
      </div>
      <div className="panel-body">
        <div className="image-container">
          <img
            src={require(`../../../images/${
              !hasMovieBeenSelected
                ? selectedFilm.title.toLowerCase()
                : "default"
            }2.jpg`)}
            alt={`${!hasMovieBeenSelected ? selectedFilm.title : "default"}`}
          />
        </div>
        <div className="overview">
          <span className="opening_crawl">
            {!hasMovieBeenSelected ? selectedFilm.opening_crawl : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Panel;
