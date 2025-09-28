import { useLocation } from 'react-router-dom';
import { LogoProps } from '../data/types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSwitch } from '../store/reducers/toggleSlice';
import type { RootState } from '../store/store';
import { getLogoSrc } from '../data/helper';

const Logo: React.FC<LogoProps> = () => {
  const { toggle } = useSelector((state: RootState) => state.toggle);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [change, setChange] = useState(false);

  const changeLogoColor = () => {
    const height = window.scrollY;
    setChange(height > 20);
  };

  useEffect(() => {
    changeLogoColor();
    window.addEventListener('scroll', changeLogoColor);
    return () => window.removeEventListener('scroll', changeLogoColor);
  }, []);

  const handleLogoClick = () => {
    dispatch(toggleSwitch());
  };

  if (pathname === '/profile') {
    return (
      <img
        className="fixed z-50 cursor-pointer w-32 top-0 left-1/2 translate-x-[-50%] translate-y-6"
        src={
          isLoggedIn && toggle
            ? '/logo/breakwhite.png'
            : !isLoggedIn
              ? '/logo/breakwhite.png'
              : '/logo/breakblack.png'
        }
        alt="Logo"
        onClick={handleLogoClick}
      />
    );
  }

  return (
    <img
      className={`fixed z-[101] cursor-pointer w-32 top-0 left-1/2 translate-x-[-50%] translate-y-6
        transition-opacity duration-700 ${
          change ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      src={getLogoSrc(toggle)}
      alt="Logo"
      onClick={handleLogoClick}
    />
  );
};

export default Logo;
