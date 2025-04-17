import { CheckoutProps } from '../data/types';

const Checkout: React.FC<CheckoutProps> = ({ total, handleCheckout, toggle }) => {
  return (
    <div
      className={`flex rounded-t-3xl h-auto justify-between w-full fixed bottom-32 px-8 py-4 items-center mx-auto mt-10 gap-4 ${
        toggle ? 'bg-gray-100' : 'bg-slate-300'
      }`}
    >
      <span className={`text-3xl font-semibold text-slate-900`}>Total: {total.toFixed(2)} €</span>
      <button
        onClick={handleCheckout}
        className="px-6 py-3 text-3xl font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
