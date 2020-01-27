import React, { useState, ChangeEvent } from "react";
import "./Searchbar.style.scss";

interface Props {
  updateSearchedFilm: (string) => void;
}

const Searchbar: React.FC<Props> = ({ updateSearchedFilm }) => {
  const [term, setTerm] = useState<string>("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setTerm(term);
    updateSearchedFilm(term);
  };

  return (
    <div className="search-bar">
      <input
        onChange={onChangeHandler}
        value={term}
        type="search"
        placeholder="Keyword"
      />
    </div>
  );
};

export default Searchbar;
