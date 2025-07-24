import { filterOptions } from '../data/helper';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setFilter } from '../store/reducers/filterSlice';

const FilterOptions: React.FC = () => {
  const dispatch = useDispatch();
  const activeOption = useSelector((state: RootState) => state.filter.selectedOption);
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  const handleClick = (option: string) => {
    dispatch(setFilter(option));
  };

  const options = filterOptions.map(option => (
    <div
      onClick={() => handleClick(option)}
      key={uuidv4()}
      className={`flex cursor-pointer items-center border rounded-lg py-2 ${
        activeOption === option ? 'bg-slate-400' : ''
      } ${option === 'All' ? 'px-11' : 'px-7'} mt-24 max-h-20`}
    >
      <p
        className={` ${activeOption === option && toggle ? 'text-white' : ''}  ${
          toggle ? 'text-white' : ''
        } text-2xl`}
      >
        {option}
      </p>
    </div>
  ));

  return <div className="flex gap-4 overflow-auto no-scrollbar ">{options}</div>;
};

export default FilterOptions;
