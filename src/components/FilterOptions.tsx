import { useState } from "react";
import { filterOptions } from "../data/helper";

type FilterProps = {
  toggle: boolean;
  setSelectedOption: (option: string) => void;
};

const FilterOptions: React.FC<FilterProps> = ({
  toggle,
  setSelectedOption,
}) => {
  const [activeOption, setActiveOption] = useState<string>("");

  const handleClick = (option: string) => {
    setActiveOption(option); 
    setSelectedOption(option);
  };

  const options = filterOptions.map((option, id) => {
    return (
      <div
        onClick={() => handleClick(option)}
        key={id}
        className={`flex cursor-pointer items-center border rounded-lg py-2 ${
          activeOption === option ? "bg-slate-400" : ""
        } ${
          option === "All" ? "px-11" : "px-7"
        } mt-24 max-h-20`}
      >
        <p className={` ${
          activeOption === option && toggle ? "text-white" : "" 
        }  ${toggle ? "text-white" : ""} text-2xl`}>
          {option}
        </p>
      </div>
    );
  });

  return (
    <div className={`flex gap-4 overflow-auto no-scrollbar px-8`}>
      {options}
    </div>
  );
};

export default FilterOptions;
