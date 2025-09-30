import { Link } from 'react-router-dom';
import { CheckoutProps } from '../data/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Checkout: React.FC<CheckoutProps> = ({ total, handleCheckout }) => {
  const toggle = useSelector((state: RootState) => state.toggle.toggle);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <div
      className={`flex rounded-t-3xl h-auto justify-between w-full fixed bottom-32 px-8 py-4 items-center mx-auto mt-10 gap-4 ${
        toggle ? 'bg-gray-100' : 'bg-slate-300'
      }`}
    >
      {isLoggedIn ? (
        <>
          <span className={`text-3xl font-semibold text-slate-900`}>
            Total: {(total ?? 0).toFixed(2)} €
          </span>
          <button
            onClick={handleCheckout}
            className="px-6 py-3 text-3xl font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Checkout
          </button>
        </>
      ) : (
        <>
          <span className={`text-3xl font-semibold text-slate-900`}>
            Total: {(total ?? 0).toFixed(2)} €
          </span>
          <Link
            to={'/login'}
            className="px-6 py-3 text-3xl font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Order? Login →
          </Link>
        </>
      )}
    </div>
  );
};

export default Checkout;
