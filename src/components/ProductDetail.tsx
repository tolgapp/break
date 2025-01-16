import React, { useState } from "react";
import coffeeData from "../data/coffee.json";
import { Product } from "../data/helper";

type ProductDetail = {
  closeDetail: (id: number | null) => void;
  addToCart: (product: Product) => void;
  openDetail: boolean;
  productId: number | null;
};

const ProductDetail: React.FC<ProductDetail> = ({
  closeDetail,
  openDetail,
  productId,
  addToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const selectedCoffee = coffeeData.coffeeSpecialties.find(
    (coffee) => coffee.id === productId
  );

  if (!selectedCoffee) {
    return null;
  }

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      const sizeIndex = selectedCoffee.sizes.indexOf(selectedSize);
      const price = selectedCoffee.prices[sizeIndex];
      const productWithDetails = {
        ...selectedCoffee,
        size: selectedSize,
        price, 
      };
      addToCart(productWithDetails);
    } else {
      alert("Please select a size before adding to the cart.");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] ${openDetail ? "fade-in" : "fade-out"}`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl"></div>
      <div className="fixed flex flex-col justify-center items-center bottom-0 z-[200] h-[75%] w-full bg-slate-50 rounded-t-3xl rounded-xl">
        <button
          onClick={() => closeDetail(null)}
          className="absolute top-4 right-4 w-12 h-12 flex justify-center items-center border border-white text-white text-3xl rounded-full bg-black z-50 hover:bg-red-700"
        >
          X
        </button>
        <div className="w-full px-8">
          <img
            className="top-0 rounded-t-3xl translate-y-[-20rem] absolute left-0"
            src={selectedCoffee.image}
            alt="coffee mockup cup"
          />
          <h2 className="mt-10 text-black text-6xl font-bold">
            {selectedCoffee.name}
          </h2>
          <p className="text-gray-700 text-2xl mt-2 mb-8">
            {selectedCoffee.description}
          </p>
        </div>
        <div className="flex flex-col justify-between text-black mt-4 w-full px-8">
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
          <div className="w-full mt-10">
            <h3 className="text-3xl font-semibold mb-4">Sizes and Prices:</h3>
            <div className="flex gap-4 flex-wrap">
              {selectedCoffee.sizes.map((size, index) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={index}
                    onClick={() => handleSizeClick(size)}
                    className={`px-5 py-3 rounded-lg border-2 text-lg font-semibold ${
                      isSelected
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    } hover:bg-black hover:text-white transition-all`}
                  >
                    {size}: {selectedCoffee.prices[index].toFixed(2)} €
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-8 bg-black text-white text-2xl px-6 py-3 rounded-lg hover:bg-orange-800 hover:text-white"
        >
          In den Warenkorb
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
