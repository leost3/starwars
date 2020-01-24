import React from "react";
import "./Skeleton.style.scss";

const Skeleton = () => {
  return (
    <div className="skeleton-content">
      <div className="skeleton-block"></div>
      <div className="skeleton-block"></div>
      <div className="skeleton-block"></div>
      <div className="skeleton-block"></div>
      <div className="skeleton-block"></div>
      <div className="skeleton-block"></div>
      <div className="skeleton-block"></div>
    </div>
  );
};

export default Skeleton;
