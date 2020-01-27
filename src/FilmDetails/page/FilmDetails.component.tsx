import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./FilmDetails.style.scss";
import Subheader from "../components/Subheader.component";
import Characters from "../components/Characters.component";
import Planets from "../components/Planets.component";
import Starships from "../components/Starships.component";
import FilmsList from "../components/FilmsList.component";
import Loading from "../../shared/UIElements/Loading.component";

import { fetchCharacters } from "../../Redux/actions";

const notAnEndPoint = (object: { any }, key: string) => {
  return typeof object[key] !== "object" && !object[key].includes("https://");
};

interface Props {}

const FilmDetails: React.FC<Props> = props => {
  const { id, navigateto } = useParams();

  const dispatch = useDispatch();
  const starWarsFilms = useSelector(state => state.films.films);
  const characters = useSelector(state => state.characters.characters);
  const selectedFilme = useSelector(state => state.selectedFilm.selectedFilm);

  useEffect(() => {
    const movie = selectedFilme;
    const charsApiUrlArrayCalls = movie[navigateto].map(char =>
      axios.get(char)
    );
    dispatch(fetchCharacters(charsApiUrlArrayCalls));
  }, [dispatch, id, starWarsFilms, selectedFilme, navigateto]);

  let headings: string[] = [];
  if (characters.length > 0) {
    const value = characters[0];
    const filtered: string[] = [];
    for (const key in value) {
      if (notAnEndPoint(value, key)) {
        filtered.push(key);
      }
    }
    headings = filtered;
  }

  if (headings.length > 0) {
    headings = headings.map((header: string) =>
      header.includes("_") ? header.replace("_", " ") : header
    );
  }

  const rows = characters.map(character => {
    const filtered = {};

    for (const key in character) {
      if (notAnEndPoint(character, key)) {
        filtered[key] = character[key];
      }
    }
    return filtered;
  });

  const MAX_HEADINGS = 8;

  const renderHeadings = () => {
    if (headings.length === 0) return <Loading />;

    return headings.splice(0, MAX_HEADINGS).map(heading => {
      if (heading !== "created" && heading !== "edited") {
        return (
          <div className="header-block">
            <span>{heading}</span>
          </div>
        );
      }
      return null;
    });
  };

  const renderRows = rows.map((data, i) => {
    if (navigateto === "characters") {
      return (
        <div className="results-rows">
          <Characters data={data} key={i} />
        </div>
      );
    }
    if (navigateto === "planets") {
      return (
        <div className="results-rows">
          <Planets data={data} key={i} />
        </div>
      );
    }

    return (
      <div className="results-rows">
        <Starships data={data} key={i} />
      </div>
    );
  });

  return (
    <div className="film-details">
      <FilmsList />
      <h2 className="selected-film-title">
        {selectedFilme.title.toUpperCase()}
      </h2>
      <div className="results-page">
      <Subheader />
        <div className="results-header">{renderHeadings()}</div>
        {renderRows}
      </div>
    </div>
  );
};

export default FilmDetails;
