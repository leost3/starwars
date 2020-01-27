import React, { useEffect, useState } from "react";
import "./FilmsList.style.scss";
import { fetchFilmsAction } from "../../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

import FilmCard from "./FilmCard.component";
import Panel from "./Panel.component";
import Skeleton from "../../../shared/components/skeleton/Skeleton.component";
import EmptyState from "../../../shared/UIElements/EmptyState.component";

const FilmsList: React.FC<{ searchedFilm: string }> = ({ searchedFilm }) => {
  const starWarsFilms = useSelector(state => state.films.films);
  const dispatch = useDispatch();
  const isPending = useSelector(state => state.films.isPending);

  useEffect(() => {
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  const [isPanelSet, setIsPanelSet] = useState<boolean>(false);

  const togglePanel = (element: boolean) => {
    setIsPanelSet(element);
  };

  const filterCard = () =>
    starWarsFilms.filter((film: FilmData) => {
      return film.title.toLowerCase().includes(searchedFilm.toLowerCase());
    });

  return (
    <div className="film-list">
      <div className="film-list__container">
        <div className={`film-list__content ${isPanelSet && "shrink"}`}>
          {isPending ? (
            <Skeleton />
          ) : filterCard().length === 0 ? (
            <EmptyState />
          ) : (
            filterCard().map((film: FilmData) => (
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
export interface FilmData {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
