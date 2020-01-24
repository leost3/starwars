import React from "react";
import "./FilmCard.style.scss";

const FilmCard = ({
  filmData,
  togglePanel,
  updateSelectedFilme,
  selectedFilm
}) => {
  const isFilmSected = selectedFilm === filmData.title;

  const selectFilme = () => {
    isFilmSected ? alert("gogogog") : updateSelectedFilme(filmData.title);
  };

  return (
    <div
      className={`film-card ${isFilmSected && "selected"}`}
      onClick={selectFilme}
    >
      <span className="title">{filmData.title}</span>
      <div className="image-container">
        <img
          src={require(`../../../images/${filmData.title.toLowerCase()}.jpg`)}
          alt={`${filmData.title}`}
        />
      </div>
      <div className="buttons-container"></div>
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

export default FilmCard;
