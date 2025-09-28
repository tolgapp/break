import axios from 'axios';
import { BACKEND_URL, getClassNames } from '../data/helper';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';
import CartItemContainer from '../components/CartItemContainer';
import Checkout from '../components/Checkout';
import { nanoid } from 'nanoid';
import { CartProps } from '../data/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Cart: React.FC<CartProps> = ({
  addedProducts,
  setAddedProducts,
  total,
}) => {
  const toggle = useSelector((state: RootState) => state.toggle.toggle);
  const { userId } = useSelector((state: RootState) => state.auth);
  const handleCheckout = () => {
    if (!addedProducts || addedProducts.length === 0) {
      console.error('No products to checkout.');
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
        console.log('Checkout successful:', response.data);
      })
      .catch((error) => {
        console.error('Checkout error:', error);
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
      <Logo />
      <BackButton />
      <h1
        className={` mt-32 mb-4 text-5xl font-bold text-left pl-8 ${getClassNames(toggle)}`}
      >
        Your items:
      </h1>
      <CartItemContainer
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
      />
      <Checkout total={total} handleCheckout={handleCheckout} />
    </main>
  );
};

export default Cart;
