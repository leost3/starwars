import React, { useState } from "react";
import "./Searchbar.style.scss";
const Searchbar = ({ updateSearchedFilm }) => {
  const [term, setTerm] = useState("");

  const onChangeHandler = e => {
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
