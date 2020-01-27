import React from "react";
import "./Options.style.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const Options: React.FC<Props> = ({
  updateSelectedOption,
  selectedOption,
  option,
  history
}) => {
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
interface Props {
  updateSelectedOption: (string) => void;
  selectedOption: string;
  option: string;
  history: RouteComponentProps;
}
