import { Product } from "../data/helper";

type CartItemContainerProps = {
  toggle: boolean;
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>; 
}

const CartItemContainer: React.FC<CartItemContainerProps> = ({
  toggle,
  addedProducts,
  setAddedProducts,
}) => {
  const handleRemove = (productId: number) => {
    // Filtert das Produkt mit der gegebenen ID aus der Liste
    setAddedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  if (addedProducts.length === 0) {
    return <h3 className="text-3xl mx-auto  text-slate-900 text-center">Your daily coffee cart is empty</h3>;
  }

  return (
    <ul
      className={`item-container mt-4 w-full max-w-3xl py-3 px-8 h-fit pb-80 flex gap-3 overflow-scroll flex-col`}
    >
      {addedProducts.map((product) => (
        <li key={product.id} className={`rounded-lg shadow-md flex items-center justify-between py-4 px-3 ${
        toggle ? "bg-gray-400" : "bg-gray-800"
      }`}>
          <span className="text-2xl font-medium">{product.name}</span>
          <div className="flex items-center space-x-4">
            <span className="text-xl">{product.price[0]} €</span>
            <button
              onClick={() => handleRemove(product.id)}
              className="p-2 px-4 text-lg bg-red-500 rounded-lg hover:bg-red-600"
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
