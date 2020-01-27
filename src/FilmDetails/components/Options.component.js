import React from "react";
import "./Options.style.scss";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
const Options = ({ updateSelectedOption, selectedOption, option, history }) => {
  const selectedFilm = useSelector(state => state.selectedFilm.selectedFilm);

  const isThisOptionSelected = selectedOption === option;

  const handleClick = () => {
    updateSelectedOption(option);
    history.push(
      `/film/${selectedFilm.title}/${selectedFilm.episode_id}/${option}`
    );
  };

  return (
    <div
      className={`option ${isThisOptionSelected && "selected"}`}
      onClick={handleClick}
    >
      <span>{option}</span>
    </div>
  );
};

export default withRouter(Options);
