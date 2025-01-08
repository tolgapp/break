import BackButton from "../components/BackButton";
import ItemContainer from "../components/ItemContainer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

type CartProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
};

const Cart: React.FC<CartProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
}) => {
  return (
    <div className={`flex flex-col min-h-screen bg-gray-900 text-white ${getClassNames(toggle)}`}>
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <Navbar toggle={toggle} getClassNames={getClassNames} />
      <BackButton toggle={toggle} />
      <h1 className={` mt-32 mb-4 text-5xl font-bold text-left pl-8 ${getClassNames(toggle)}`}>Your items:</h1>
      <ItemContainer toggle={toggle} />
      <div className="flex rounded-t-lg h-32 justify-between w-full bottom-32 fixed px-8 py-4 items-center mx-auto mt-10 gap-4 bg-gray-300">
        <span className="text-3xl text-slate-900 font-semibold">Total: 4,95 €</span>
        <button className="px-6 py-3 text-2xl font-medium text-gray-900 bg-green-500 rounded-lg hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
