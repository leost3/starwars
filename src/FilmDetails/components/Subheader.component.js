import React, { useState } from "react";

import Options from "./Options.component";
import "./Subheader.style.scss";
import { useParams } from "react-router";

const Subheader = () => {
  const options = ["characters", "starships", "planets"];

  const { navigateto } = useParams();

  const [selectedOption, setSelectedOption] = useState(navigateto);

  const updateSelectedOption = option => {
    setSelectedOption(option);
  };

  return (
    <div className="subheader">
      {options.map((option, i) => (
        <Options
          updateSelectedOption={updateSelectedOption}
          selectedOption={selectedOption}
          key={i}
          option={option}
        />
      ))}
    </div>
  );
};

export default Subheader;
