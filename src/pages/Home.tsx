import FilterOptions from "../components/FilterOptions";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

type HomeProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getLogoSrc: (value: boolean) => string;
  getClassNames: (value: boolean) => string;
};

const Home: React.FC<HomeProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
}) => {
  return (
    <div className={`flex flex-col ${getClassNames(toggle)} h-dvh`}>
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <FilterOptions toggle={toggle}/>
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};

export default Home;
