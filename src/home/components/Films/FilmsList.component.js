import React, { useEffect, useState } from "react";
import "./FilmsList.style.scss";
import starwars from "../../../shared/apis/starwars.api";
import { fetchFilmsAction } from "../../../Redux/actions";
import { connect } from "react-redux";

import FilmCard from "./FilmCard.component";
import Panel from "./Panel.component";
import Skeleton from "../../../shared/components/skeleton/Skeleton.component";

const useFetch = (endpoint, action) => {
  const [startWarsFilms, setStarwarFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function fetchData() {
      const response = await starwars.get(endpoint);
      // console.log(response.data.results);
      setStarwarFilms(response.data.results);
    })();
    setLoading(false);
  }, []);

  return { startWarsFilms, loading };
};
const FilmsList = ({ searchedFilm, fetchFilmsAction }) => {
  const { startWarsFilms, loading } = useFetch("/", fetchFilmsAction);

  const [isPanelSet, setIsPanelSet] = useState(false);
  const [selectedFilm, setSelectedFilme] = useState(null);

  const togglePanel = boolean => {
    if (!boolean) {
      setSelectedFilme(null);
    }
    setIsPanelSet(boolean);
  };

  const updateSelectedFilme = film => {
    setSelectedFilme(film);
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

const mapStateToProps = state => ({
  starWarsFilmList: state
});

export default connect(mapStateToProps, { fetchFilmsAction })(FilmsList);
