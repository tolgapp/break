import { useDispatch, useSelector } from 'react-redux';
import { getClassNames, toggleTextColor } from '../data/helper';
import BackButton from './BackButton';
import Logo from './Logo';
import type { RootState } from '../store/store';
import { toggleSwitch } from '../store/reducers/toggleSlice';

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  return (
    <div
      className={`flex flex-col h-dvh justify-center items-center w-full gap-3 px-8 ${getClassNames(
        toggle
      )}`}
    >
      <Logo />
      <BackButton />
      <div className="flex justify-center items-center w-full">
        <h2
          className={`text-4xl font-black cursor-pointer ${toggleTextColor(!toggle)}`}
          onClick={() => dispatch(toggleSwitch())}
        >
          Change theme color
        </h2>
      </div>
    </div>
  );
};

export default ToggleTheme;
