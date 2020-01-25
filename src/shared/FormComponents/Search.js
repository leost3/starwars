import React, { useContext, useCallback } from "react";

import "./Search.scss";
import Input from "./Input";
import { SearchContext } from "../../context/SearchContext";

const Search = props => {
  const searchContext = useContext(SearchContext);

  const searchedPlaceHandler = useCallback(place => {
    searchContext.updateSeachedPlace(place);
  }, []);

  return (
    <div className="search">
      <Input
        width="825"
        type="search"
        placeholder="Ex: Ontario"
        searchedPlaceHandler={searchedPlaceHandler}
      />
      <span className="icon icon-magnifier">O</span>
    </div>
  );
};

export default Search;
