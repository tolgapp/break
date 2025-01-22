import { getClassNames, Product } from "../data/helper";

type CartItemContainerProps = {
  toggle: boolean;
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const CartItemContainer: React.FC<CartItemContainerProps> = ({
  toggle,
  addedProducts,
  setAddedProducts,
}) => {
  const handleRemove = (instanceId: string | undefined) => {
    setAddedProducts((prev) =>
      prev.filter((product) => product.instanceId !== instanceId)
    );
  };

  if (addedProducts.length === 0) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <h3 className={`text-3xl text-center ${getClassNames(toggle)}`}>
          No caffeine detected
        </h3>
      </div>
    );
  }

  return (
    <ul
      className={`item-container mt-4 w-full max-w-3xl py-3 px-8 h-fit pb-80 flex gap-3 overflow-scroll flex-col`}
    >
      {addedProducts.map((product) => (
        <li
          key={product.instanceId}
          className={`rounded-lg shadow-lg flex items-center justify-between py-4 px-3 ${
            toggle ? "bg-slate-600  text-white" : "bg-slate-200 shadow-sm text-black"
          }`}
        >
          <span className="text-2xl">{product.name} - {product.size}</span>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-semibold">{product.price} €</span>
            <button
              onClick={() => handleRemove(product.instanceId)}
              className={`p-2 px-4 text-lg text-black bg-slate-50 rounded-lg hover:bg-red-600 hover:text-white`}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemContainer;
