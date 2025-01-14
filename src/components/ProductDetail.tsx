import coffeeData from "../data/coffee.json";

type ProductDetail = {
  handleClick: (id: number | null) => void;
  openDetail: boolean;
  productId: number | null;
};

const ProductDetail: React.FC<ProductDetail> = ({
  handleClick,
  openDetail,
  productId,
}) => {
  const selectedCoffee = coffeeData.coffeeSpecialties.find(
    (coffee) => coffee.id === productId
  );

  if (!selectedCoffee) {
    return null;
  }

  return (
    <div
      className={`fixed flex flex-col justify-center items-center bottom-0 z-[100] h-[94%] w-full bg-slate-50 rounded-t-3xl translate-x-[-2rem] rounded-xl ${
        openDetail ? "fade-in" : "fade-out"
      }`}
    >
      <button
        onClick={() => handleClick(null)} // Aktualisiert den Status, um die Detailansicht zu schließen.
        className="absolute top-4 right-4 w-12 h-12 flex justify-center items-center border border-white text-white text-3xl rounded-full bg-black z-50"
      >
        X
      </button>

      <div className="w-full px-8">
        <img
          className="top-0 rounded-t-3xl absolute left-0"
          src={selectedCoffee.image}
          alt="coffee mockup cup"
        />
        {/* TODO: Dynamic Src Selector */}
        {/* <img
          src={`/images/${selectedCoffee.image}`}
          alt={selectedCoffee.name}
          className="w-32 h-32 object-contain mb-4"
        /> */}
        <h2 className=" mt-96 text-black text-6xl font-bold">
          {selectedCoffee.name}
        </h2>
        <p className="text-gray-700 text-2xl mt-2 mb-8">
          {selectedCoffee.description}
        </p>
      </div>
      <div className="flex justify-between text-black mt-4 w-full px-8">
        <div>
          <h3 className="text-3xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {selectedCoffee.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600 text-2xl">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-2">Sizes and Prices:</h3>
          <ul>
            {selectedCoffee.sizes.map((size, index) => (
              <li key={index} className="text-gray-600 text-2xl">
                {size}: {selectedCoffee.prices[index].toFixed(2)} €
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
