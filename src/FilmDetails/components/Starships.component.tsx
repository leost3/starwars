import React from "react";
import "./Starships.style.scss";

const Starships: React.FC<{ data: StarShip }> = ({ data }) => {
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
interface StarShip {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGTL: string;
  starship_class: string;
  created: string;
  edited: string;
}
