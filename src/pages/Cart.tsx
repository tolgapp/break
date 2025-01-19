import axios from "axios";
import { Product } from "../data/helper";
import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import CartItemContainer from "../components/CartItemContainer";
import Checkout from "../components/Checkout";

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
  const handleCheckout = () => {
    axios
      .post("http://localhost:5002/api/checkout", addedProducts)
      .then((response) => {
        console.log("Checkout successful:", response.data);
      })
      .catch((error) => {
        console.error("Checkout error:", error);
      });
    setAddedProducts([]);
    localStorage.clear();
  };

  return (
    <main
      className={`relative flex flex-col min-h-screen bg-gray-900 text-white ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
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
      <Checkout total={total} handleCheckout={handleCheckout} toggle={toggle} />
    </main>
  );
};

export default Cart;
