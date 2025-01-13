import BackButton from "../components/BackButton";
import CartItemContainer from "../components/CartItemContainer";
import Checkout from "../components/Checkout";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { Product } from "../data/helper";

type CartProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
};

const Cart: React.FC<CartProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
  addedProducts,
  setAddedProducts,
  total,
}) => {
  console.log(typeof addedProducts);

  return (
    <div
      className={`flex flex-col min-h-screen bg-gray-900 text-white ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <Navbar toggle={toggle} getClassNames={getClassNames} />
      <BackButton toggle={toggle} />
      <h1
        className={` mt-32 mb-4 text-5xl font-bold text-left pl-8 ${getClassNames(
          toggle
        )}`}
      >
        Your items:
      </h1>
      <CartItemContainer
        toggle={toggle}
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
      />
      <Checkout total={total} />
    </div>
  );
};

export default Cart;
