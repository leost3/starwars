import React from "react";
import "./Planets.style.scss";

const Planets = ({ data }) => {
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
