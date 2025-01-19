import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

type NotFoundProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
  setToggle: (value: boolean) => void;
  getLogoSrc: (value: boolean) => string;
};

const NotFound: React.FC<NotFoundProps> = ({ toggle, getClassNames, setToggle, getLogoSrc }) => {
  const textColorClass = toggle ? "text-gray-900" : "text-white"; 
  
  const navigate = useNavigate()

  setTimeout(() => {
    navigate(-1)
  }, 2000)

  return (
    <main
      className={`flex flex-col h-dvh justify-center items-center w-full gap-3 px-8 ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc}/>
      <BackButton toggle={toggle}/>
      <h2 className={`absolute text-9xl font-black rotate-45 -translate-x-30 -translate-y-40 ${textColorClass}`}>404</h2>
      <h3 className={`text-9xl font-black -rotate-45 -translate-y-20 translate-x-16 ${textColorClass}`}>Not Found</h3>
      <p className="text-xl translate-y-16">Redirecting to the previous page in 2s</p>
    </main>
  );
};

export default NotFound;
