import React from "react";
import "./Characters.style.scss";

const Characters: React.FC<{ data: Character }> = ({ data }) => {
  return (
    <div className="result-item">
      <span>{data.name}</span>
      <span>{data.height}</span>
      <span>{data.mass}</span>
      <span>{data.hair_color}</span>
      <span>{data.skin_color}</span>
      <span>{data.eye_color}</span>
      <span>{data.birth_year}</span>
      <span>{data.gender}</span>
    </div>
  );
};

export default Characters;
interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
