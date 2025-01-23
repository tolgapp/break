import axios from "axios";
import { BACKEND_URL, Product } from "../data/helper";
import Logo from "../components/Logo";
import BackButton from "../components/BackButton";
import CartItemContainer from "../components/CartItemContainer";
import Checkout from "../components/Checkout";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

type CartProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  userId: string;
};

const Cart: React.FC<CartProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
  addedProducts,
  setAddedProducts,
  total,
  userId,
}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!addedProducts || addedProducts.length === 0) {
      console.error("No products to checkout.");
      return;
    }

    const orderId = nanoid();

    axios
      .post(`${BACKEND_URL}/checkout`, {
        userId,
        orderId,
        total,
        products: addedProducts,
      })
      .then((response) => {
        console.log("Checkout successful:", response.data);
      })
      .catch((error) => {
        console.error("Checkout error:", error);
      });

    setAddedProducts([]);
    localStorage.clear();

    setTimeout(() => {
      navigate("/user/last-orders");
    }, 2000);
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
