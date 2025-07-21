import { useSelector } from 'react-redux';
import { getClassNames, toggleTextColor } from '../data/helper';
import BackButton from './BackButton';
import Logo from './Logo';
import type { RootState } from '../store/store';

const ToggleTheme= () => {
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center w-full gap-3 px-8 ${getClassNames(
        toggle
      )}`}
    >
      <Logo />
      <BackButton />
      <div className="text-8xl">⬆</div>
      <h2 className={`text-8xl font-black ${toggleTextColor(!toggle)}`}>Click on</h2>
      <h3 className={`text-7xl font-black ${toggleTextColor(!toggle)}`}>the Logo</h3>
      <h4 className="text-6xl w-1/2 text-center font-semibold">and see the magic</h4>
    </div>
  );
};

export default ToggleTheme;
