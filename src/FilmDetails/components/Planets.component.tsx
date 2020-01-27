import React from "react";
import "./Planets.style.scss";

const Planets: React.FC<{ data: Planet }> = ({ data }) => {
  console.log(data);
  return (
    <div className="result-item">
      <span>{data.name}</span>
      <span>{data.rotation_period}</span>
      <span>{data.orbital_period}</span>
      <span>{data.diameter}</span>
      <span>{data.climate}</span>
      <span>{data.gravity}</span>
      <span>{data.terrain}</span>
      <span>{data.surface_water}</span>
    </div>
  );
};

export default Planets;
interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
}
