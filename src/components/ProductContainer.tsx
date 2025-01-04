type ProductContainerProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
  handleClick: () => void;
};

const ProductContainer: React.FC<ProductContainerProps> = ({
  toggle,
  getClassNames,
  handleClick
}) => {

  return (
    <div
      className={`border border-white h-fit w-64 rounded-xl flex flex-col ${getClassNames(
        toggle
      )}`}
    >
      <img onClick={handleClick} className="rounded-xl" src="/coffeemock.png" alt="coffee cup" />
      <h3 className="text-xl font-semibold text-center translate-y-2">
        Fresh brewed Coffee
      </h3>
      <div className="flex items-center justify-between w-full px-6 py-3 mt-3">
        <h4 className="text-3xl">3.45 €</h4>
        <button className="pointer bg-white rounded-lg px-4 py-2 text-black text-2xl hover:bg-gray-400 hover:text-white">
          +
        </button>
      </div>
    </div>
  );
};
export default ProductContainer;
