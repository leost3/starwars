import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FilmCard.style.scss";
import { withRouter } from "react-router-dom";

import { selectedFilmAction } from "../../../Redux/actions";

const FilmCard = ({ filmData, togglePanel, history }) => {
  const dispatch = useDispatch();
  const selectedFilm = useSelector(state => state.selectedFilm.selectedFilm);

  const isFilmSected = selectedFilm.title === filmData.title;

  const selectFilm = e => {
    togglePanel(true);
    dispatch(selectedFilmAction(filmData));
  };

  const navigateTo = e => {
    const navigateTo = e.target.dataset.navigation;
    dispatch(selectedFilmAction(filmData));
    history.push(
      `/film/${filmData.title}/${filmData.episode_id}/${navigateTo}`
    );
    e.stopPropagation();
  };

  return (
    <div
      className={`film-card ${isFilmSected && "selected"}`}
      onClick={selectFilm}
    >
      <span className="title">{filmData.title}</span>
      <div className="image-container">
        <img
          src={require(`../../../images/${filmData.title.toLowerCase()}.jpg`)}
          alt={`${filmData.title}`}
        />
      </div>
      <div className="buttons-container">
        <button data-navigation="characters" onClick={navigateTo}>
          Characters
        </button>
        <button data-navigation="starships" onClick={navigateTo}>
          Starships
        </button>
        <button data-navigation="planets" onClick={navigateTo}>
          Planets
        </button>
      </div>
      <div className="production">
        <span className="director">
          <b>Director</b>: {filmData.director}
        </span>
        <span className="productor">
          <b>Producer:</b> {filmData.producer}
        </span>
      </div>
    </div>
  );
};

export default withRouter(FilmCard);
