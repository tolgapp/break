import { useSelector } from 'react-redux';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import { getClassNames, toggleTextColor } from '../data/helper';
import { RootState } from '../store/store';

const NotFound = () => {
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  return (
    <main
      className={`flex flex-col h-dvh justify-center items-center w-full gap-3 px-8 ${getClassNames(
        toggle
      )}`}
    >
      <Logo />
      <BackButton />
      <h2
        className={`absolute text-9xl font-black rotate-45 -translate-x-30 -translate-y-40 ${toggleTextColor(
          !toggle
        )}`}
      >
        404
      </h2>
      <h3
        className={`text-9xl font-black -rotate-45 -translate-y-20 translate-x-16  ${toggleTextColor(
          !toggle
        )}`}
      >
        Not Found
      </h3>
    </main>
  );
};

export default NotFound;
