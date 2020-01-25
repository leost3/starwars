import React, { useEffect, useState } from "react";
import "./FilmsList.style.scss";
import { fetchFilmsAction } from "../../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

import FilmCard from "./FilmCard.component";
import Panel from "./Panel.component";
import Skeleton from "../../../shared/components/skeleton/Skeleton.component";

const FilmsList = ({ searchedFilm }) => {
  const [loading, setLoading] = useState(true);

  const starWarsFilms = useSelector(state => state.films.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
    setLoading(false);
  }, [dispatch]);

  const [isPanelSet, setIsPanelSet] = useState(false);

  const togglePanel = boolean => {
    setIsPanelSet(boolean);
  };

  const filterCard = () =>
    starWarsFilms.filter(film => {
      return film.title.toLowerCase().includes(searchedFilm.toLowerCase());
    });

  return (
    <div className="film-list">
      <div className="film-list__container">
        <div className={`film-list__content ${isPanelSet && "shrink"}`}>
          {loading ? (
            <Skeleton />
          ) : (
            filterCard().map(film => (
              <FilmCard
                filmData={film}
                key={film.episode_id}
                togglePanel={togglePanel}
              />
            ))
          )}
        </div>
      </div>
      <Panel isPanelSet={isPanelSet} togglePanel={togglePanel} />
    </div>
  );
};

export default FilmsList;
