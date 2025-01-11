import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import RandomProducts from "../components/RandomProducts";

type HomeProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getLogoSrc: (value: boolean) => string;
  getClassNames: (value: boolean) => string;
  addToCart: (value: any) => void;
  setAddedProducts: (value: ArrayLike) => void;
};

const Home: React.FC<HomeProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
  addToCart
}) => {

  return (
    <div className={`relative flex flex-col ${getClassNames(toggle)} min-h-dvh overflow-y-scroll pb-48 `}>
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      {/* Outsourcing the img elt as component with automatic slider every 4s without arrows */}
      <div className="mt-24 grid grid-cols-2 gap-5 px-8" style={{ gridTemplateRows: 'auto auto' }}>
        <img
          src="/offer01.jpg"
          className="col-span-2 rounded-3xl w-[35rem]"
        />
        <img
          src="/offer02.jpg"
          className="mx-auto mt-2 rounded-3xl w-[17rem]"
        />
        <img
          src="/offer03.jpg"
          className="mx-auto mt-2 rounded-3xl w-[17rem]"
        />
      </div>
      <RandomProducts toggle={toggle} addToCart={addToCart}/>
      {/* <RandomProducts toggle={toggle} getClassNames={getClassNames} /> */}
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};

export default Home;
