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
};

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
      className={`border ${
        toggle ? "border-slate-400" : "border-gray-300"
      } h-fit w-[16.1rem] rounded-xl flex flex-col ${getClassNames(
        toggle
      )} relative`}
    >
      <div className="absolute top-1 bg-slate-300 rounded-lg left-1 p-2 z-50 text-slate-700">
        4 for 3
      </div>
      <img
        className="rounded-t-xl pt-3 pb-6 bg-gray-100"
        src={image}
        alt="coffee cup"
      />
      <h3 className="text-2xl text-center translate-y-3 px-3">{name}</h3>
      <div className="flex items-center justify-between w-full px-2 py-2 mt-4">
        <button
          onClick={() => handleClick(id)}
          className={`cursor-pointer rounded-lg px-4 py-4 w-full text-2xl font-semibold hover:bg-gray-400 hover:text-white ${toggleTextColor(
            toggle
          )} ${backgroundColor(toggle)}`}
        >
          from <strong className="text-2xl font-semibold">{smallPrice}</strong>€
        </button>
      </div>
    </div>
  );
};
export default ProductContainer;
