import { getClassNames, getLogoSrc, toggleTextColor } from "../data/helper";
import BackButton from "./BackButton";
import Logo from "./Logo";

type ThemeProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
};

const ToggleTheme: React.FC<ThemeProps> = ({ toggle, setToggle }) => {
  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center w-full gap-3 px-8 ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle} />
      <h2
        className={`text-8xl font-black ${toggleTextColor(
          !toggle
        )}`}
      >
        Click on
      </h2>
      <h3
        className={`text-7xl font-black ${toggleTextColor(
          !toggle
        )}`}
      >
       the Logo
      </h3>
    </div>
  );
};

export default ToggleTheme;
