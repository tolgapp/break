import { filterOptions } from "../data/helper";

type FilterProps = {
  toggle: boolean;
  setSelectedOption: (option: string) => void;
};

const FilterOptions: React.FC<FilterProps> = ({toggle, setSelectedOption}) => {

  const options = filterOptions.map((option, id) => {

    return (
      <div
        onClick={() => setSelectedOption(option)}
        key={id}
        className={`flex cursor-pointer items-center border rounded-lg py-2 px-6 mt-24 max-h-20 ${toggle ? "bg-white border-slate-800" : "bg-slate-800"}`}
      >
        <p className={`${toggle ? "text-black" : "text-white"} text-2xl`}>{option}</p>
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
