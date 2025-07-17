import { useLocation } from 'react-router-dom';
import { LogoProps } from '../data/types';
import { useEffect, useState } from 'react';

const Logo: React.FC<LogoProps> = ({ toggle, setToggle, getLogoSrc, isLoggedIn }) => {
  const { pathname } = useLocation();
  const [change, setChange] = useState(false)

 const changeLogoColor = () => {
   const height = window.scrollY;
   setChange(height > 20);
 };

  useEffect(() => {
    changeLogoColor();

    window.addEventListener("scroll", changeLogoColor);

    return () => window.removeEventListener('scroll', changeLogoColor);

  }, [])

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
        onClick={() => setToggle(prevToggle => !prevToggle)}
      />
    );
  }

  return (
    <img
      className={`
  fixed z-[101] cursor-pointer w-32 top-0 left-1/2 translate-x-[-50%] translate-y-6
  transition-opacity duration-500 ${change ? 'opacity-0 pointer-events-none' : 'opacity-100'}
`}
      src={getLogoSrc(toggle)}
      alt="Logo"
      onClick={() => setToggle(prevToggle => !prevToggle)}
    />
  );
};

export default Logo;
