import { useDispatch, useSelector } from 'react-redux';
import { getClassNames, toggleTextColor } from '../data/helper';
import BackButton from './BackButton';
import Logo from './Logo';
import type { RootState } from '../store/store';
import { toggleSwitch } from '../store/reducers/toggleSlice';

const ToggleTheme= () => {
  const dispatch = useDispatch()
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center w-full gap-3 px-8 ${getClassNames(
        toggle
      )}`}
    >
      <Logo />
      <BackButton />
      <h2 className={`text-8xl font-black ${toggleTextColor(!toggle)}`} onClick={() => dispatch(toggleSwitch())}>Click</h2>
    </div>
  );
};

export default ToggleTheme;
