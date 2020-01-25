import React from "react";
import "./Starships.style.scss";

const Starships = ({ data }) => {
  return (
    <div className="result-item">
      <span>{data.name}</span>
      <span>{data.model}</span>
      <span>{data.manufacturer}</span>
      <span>{data.cost_in_credits}</span>
      <span>{data.length}</span>
      <span>{data.max_atmosphering_speed}</span>
      <span>{data.crew}</span>
      <span>{data.passengers}</span>
    </div>
  );
};

export default Starships;
