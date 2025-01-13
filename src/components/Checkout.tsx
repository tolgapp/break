type CheckoutProps = {
  total: number;
};

const Checkout: React.FC<CheckoutProps> = ({ total }) => {
  return (
    <div className="flex rounded-t-lg h-auto justify-between w-full fixed bottom-32 px-8 py-4 items-center mx-auto mt-10 gap-4 bg-gray-200">
      <span className="text-3xl text-slate-900 font-semibold">
        Total: {total} €
      </span>
      <button className="px-6 py-3 text-2xl font-medium text-gray-900 bg-green-500 rounded-lg hover:bg-green-600">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
