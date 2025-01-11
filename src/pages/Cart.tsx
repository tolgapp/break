import BackButton from "../components/BackButton";
import CartItemContainer from "../components/CartItemContainer";
import Checkout from "../components/Checkout";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

type CartProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  addedProdutcts
};

const Cart: React.FC<CartProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
  addedProdutcts
}) => {

const total = "2,95"

  return (
    <div className={`flex flex-col min-h-screen bg-gray-900 text-white ${getClassNames(toggle)}`}>
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <Navbar toggle={toggle} getClassNames={getClassNames} />
      <BackButton toggle={toggle} />
      <h1 className={` mt-32 mb-4 text-5xl font-bold text-left pl-8 ${getClassNames(toggle)}`}>Your items:</h1>
      <CartItemContainer toggle={toggle} />
      <Checkout total={total}/>
    </div>
  );
};

export default Cart;
