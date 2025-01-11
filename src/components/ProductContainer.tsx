import { backgroundColor, Product, toggleTextColor } from "../data/helper";

type ProductContainerProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
  handleClick: () => void;
  id: number;
  name: string;
  image: string;
  price: number[];
  addToCart: (product: Product) => void; 
} & Product;

const ProductContainer: React.FC<ProductContainerProps> = ({
  toggle,
  getClassNames,
  handleClick,
  id,
  name,
  image,
  price,
  addToCart,
}) => {
  return (
    <div
      className={`cursor-pointer border ${
        toggle ? "border-black" : "border-white"
      } h-fit w-64 rounded-xl flex flex-col ${getClassNames(toggle)}`}
    >
      <img
        onClick={handleClick}
        className="rounded-t-xl"
        src="/coffeemock.png"
        alt="coffee cup"
      />
      <h3 className="text-3xl font-semibold text-left translate-y-3 px-4">
        {name}
      </h3>
      <div className="flex items-center justify-between w-full px-4 py-2 mt-4">
        <h4 className="text-3xl">{"from " + price[0]} €</h4>
        <button
          onClick={() =>
            addToCart({
              id,
              name,
              image,
              price,
            })
          }
          className={`pointer rounded-lg px-4 py-2 text-2xl hover:bg-gray-400 hover:text-white ${toggleTextColor(
            toggle
          )} ${backgroundColor(toggle)}`}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ProductContainer;
