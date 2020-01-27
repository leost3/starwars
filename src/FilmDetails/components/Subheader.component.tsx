import React, { useState } from "react";

import Options from "./Options.component";
import "./Subheader.style.scss";
import { useParams } from "react-router";

interface Props {}

const Subheader: React.FC<Props> = props => {
  const options = ["characters", "starships", "planets"];

  const { navigateto } = useParams();

  const [selectedOption, setSelectedOption] = useState(navigateto);

  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="subheader">
      {options.map((option: string, i: number) => (
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
