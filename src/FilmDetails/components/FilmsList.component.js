import React from "react";
import "./FilmsList.style.scss";
import { useSelector } from "react-redux";

import FilmItem from "./FilmItem.component";

const FilmList = props => {
  const filmList = useSelector(state => state.films.films);

  return (
    <div className="list">
      {filmList.map(film => {
        return <FilmItem film={film} />;
      })}
    </div>
  );
};

export default FilmList;
