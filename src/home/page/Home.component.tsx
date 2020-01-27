import React, { useState } from "react";

import Searchbar from "../../shared/components/Searchbar/Searchbar.component";
import FilmsList from "../components/Films/FilmsList.component";
interface Props {}

const Home: React.FC<Props> = props => {
  const [searchedFilm, setSearchedFilm] = useState<string>("");

  const updateSearchedFilm = (term: string) => setSearchedFilm(term);

  return (
    <div className="home">
      <Searchbar updateSearchedFilm={updateSearchedFilm} />
      <FilmsList searchedFilm={searchedFilm} />
    </div>
  );
};

export default Home;
