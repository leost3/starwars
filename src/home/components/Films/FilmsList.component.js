import React, { useEffect, useState } from "react";
import "./FilmsList.style.scss";
import { fetchFilmsAction } from "../../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

import FilmCard from "./FilmCard.component";
import Panel from "./Panel.component";
import Skeleton from "../../../shared/components/skeleton/Skeleton.component";

const FilmsList = ({ searchedFilm }) => {
  const [loading, setLoading] = useState(true);

  const startWarsFilms = useSelector(state => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
    setLoading(false);
  }, [dispatch]);

  const [isPanelSet, setIsPanelSet] = useState(false);
  const [selectedFilm, setSelectedFilme] = useState(null);

  const togglePanel = boolean => {
    if (!boolean) {
      setSelectedFilme(null);
    }
    setIsPanelSet(boolean);
  };

  const updateSelectedFilme = selectedFilmd => {
    const filmData = startWarsFilms.find(film => {
      return film.episode_id === selectedFilmd.id;
    });
    setSelectedFilme(filmData);
    setIsPanelSet(true);
  };

  const filterCard = () =>
    startWarsFilms.filter(film => {
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
                updateSelectedFilme={updateSelectedFilme}
                selectedFilm={selectedFilm}
                key={film.episode_id}
              />
            ))
          )}
        </div>
      </div>
      <Panel
        isPanelSet={isPanelSet}
        togglePanel={togglePanel}
        selectedFilm={selectedFilm}
      />
    </div>
  );
};

export default FilmsList;
