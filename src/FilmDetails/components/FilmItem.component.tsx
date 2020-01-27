import React from "react";
import "./FilmItem.style.scss";
import { selectedFilmAction } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

const FilmItem = ({ film }) => {
  const dispatch = useDispatch();
  const selectedFilm = useSelector(state => state.selectedFilm.selectedFilm);

  const isThisFilmSelected = selectedFilm.title === film.title;

  const onHandleClick = () => {
    dispatch(selectedFilmAction(film));
  };

  return (
    <div
      className={`film-item ${isThisFilmSelected && "selected"}`}
      onClick={onHandleClick}
    >
      <div className="image-container">
        <img
          src={require(`../../images/${film.title.toLowerCase()}.jpg`)}
          alt={`${film.title}`}
        />
      </div>
      <span className="title">{film.title}</span>
    </div>
  );
};
export default FilmItem;
