import React, { useState } from "react";

import Searchbar from "../../shared/components/Searchbar/Searchbar.component";
import FilmsList from "../components/Films/FilmsList.component";

const Home = () => {
  const [searchedFilm, setSearchedFilm] = useState("");

  const updateSearchedFilm = term => setSearchedFilm(term);

  return (
    <div className="home">
      <Searchbar updateSearchedFilm={updateSearchedFilm} />
      <FilmsList searchedFilm={searchedFilm} />
    </div>
  );
};

export default Home;
