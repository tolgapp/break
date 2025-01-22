import { backgroundColor, Product, toggleTextColor } from "../data/helper";

type ProductContainerProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
  addToCart?: (product: Product) => void;
  handleClick: (id: number) => void;
  id: number;
  name: string;
  image: string;
  prices: number[];
} & Product;

const ProductContainer: React.FC<ProductContainerProps> = ({
  toggle,
  getClassNames,
  handleClick,
  id,
  name,
  image,
  prices,
}) => {
  
  const allPrices = prices.map((price) => price);
  const smallPrice = allPrices[0];

  return (
    <div
      className={`cursor-pointer border ${
        toggle ? "border-slate-400" : "border-gray-300"
      } h-fit w-[16.1rem] rounded-xl flex flex-col ${getClassNames(toggle)}`}
    >
      <img
        className="rounded-t-xl pt-3 pb-6 bg-gray-100"
        src={image}
        alt="coffee cup"
      />
      <h3 className="text-3xl font-semibold text-left translate-y-3 px-3">
        {name}
      </h3>
      <div className="flex items-center justify-between w-full px-2 py-2 mt-4">
        {/* TODO: Re-Design or Price with extra "+" Button to open the detail page? */}
        {/* <h4 className="text-2xl font-light">
          from <strong className="text-2xl font-semibold">{smallPrice}</strong>
          €
        </h4> */}
        <button
          onClick={() => handleClick(id)}
          className={`pointer rounded-lg px-4 py-4 w-full text-2xl font-semibold hover:bg-gray-400 hover:text-white ${toggleTextColor(
            toggle
          )} ${backgroundColor(toggle)}`}
        >
          from <strong className="text-2xl font-semibold">{smallPrice}</strong>
          €
        </button>
      </div>
    </div>
  );
};
export default ProductContainer;
