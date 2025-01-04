import { filterOptions } from "../data/helper";

type FilterProps = {
  toggle: boolean;
};

const FilterOptions: React.FC<FilterProps> = () => {



  const options = filterOptions.map((option, id) => {
    return (
      <div
        key={id}
        className={`flex cursor-pointer items-center border rounded-lg py-2 px-6 mt-24 bg-slate-800`}
      >
        <p className="text-2xl">{option}</p>
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
