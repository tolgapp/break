type LogoProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getLogoSrc: (toggle: boolean) => string;
};

const Logo: React.FC<LogoProps> = ({ toggle, setToggle, getLogoSrc }) => {
  return (
    <img
      className="fixed z-50 cursor-pointer w-32 top-0 left-1/2 translate-x-[-50%] translate-y-6"
      src={getLogoSrc(toggle)}
      alt="Logo"
      onClick={() => setToggle(!toggle)}
    />
  );
};

export default Logo;
