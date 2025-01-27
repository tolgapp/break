import { useLocation } from "react-router-dom";

type LogoProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getLogoSrc: (toggle: boolean) => string;
  isLoggedIn?: boolean;
};
const Logo: React.FC<LogoProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  isLoggedIn,
}) => {
  const { pathname } = useLocation();

  if (pathname === "/profile") {
    return (
      <img
        className="fixed z-50 cursor-pointer w-32 top-0 left-1/2 translate-x-[-50%] translate-y-6"
        src={
          isLoggedIn && toggle
            ? "/logo/breakwhite.png"
            : !isLoggedIn
            ? "/logo/breakwhite.png"
            : "/logo/breakblack.png"
        }
        alt="Logo"
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      />
    );
  }

  return (
    <img
      className="fixed z-50 cursor-pointer w-32 top-0 left-1/2 translate-x-[-50%] translate-y-6"
      src={getLogoSrc(toggle)}
      alt="Logo"
      onClick={() => setToggle((prevToggle) => !prevToggle)}
    />
  );
};

export default Logo;
