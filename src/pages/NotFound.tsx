import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

type NotFoundProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
  setToggle: (value: boolean) => void;
  getLogoSrc: (value: boolean) => string;
};

const NotFound: React.FC<NotFoundProps> = ({ toggle, getClassNames, setToggle, getLogoSrc }) => {
  const textColorClass = toggle ? "text-gray-900" : "text-white"; // Dunkle Farbe bei true, sonst weiß
  
  return (
    <main
      className={`flex flex-col h-dvh justify-center items-center w-full gap-3 ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc}/>
      <BackButton />
      <h2 className={`text-8xl font-semibold ${textColorClass}`}>404</h2>
      <h3 className={`text-2xl font-black ${textColorClass}`}>Not Found</h3>
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </main>
  );
};

export default NotFound;
