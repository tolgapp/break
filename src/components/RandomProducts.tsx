import { useState, useEffect } from "react";
import coffeeData from "../data/coffee.json";
import ProductContainer from "./ProductContainer";
import { getClassNames, Product } from "../data/helper";

type RandomProductsProps = {
  toggle: boolean;
  addToCart: (product: Product) => void;
} & Product;

const RandomProducts: React.FC<RandomProductsProps> = ({
  toggle,
  handleClick,
  addToCart,
}) => {
  const [randomProducts, setRandomProducts] = useState<any[]>([]);

  useEffect(() => {
    const selectRandomProducts = () => {
      const selectedProducts: any[] = [];
      const specialties = coffeeData.coffeeSpecialties;

      while (selectedProducts.length <= 5) {
        const randomIndex = Math.floor(Math.random() * specialties.length);
        const product = specialties[randomIndex];

        if (!selectedProducts.includes(product)) {
          selectedProducts.push(product);
        }
      }

      setRandomProducts(selectedProducts);
    };

    selectRandomProducts();
  }, []);

  return (
    <div className="px-8 flex flex-col gap-4">
      <h1 className="mt-6 text-slate-500 text-3xl font-medium">
        Selected Coffee Specialties
      </h1>
      <ul className="flex flex-wrap overflow-auto justify-between items-center gap-11">
        {randomProducts.map((coffee) => (
          <ProductContainer
            key={coffee.id}
            id={coffee.id}
            getClassNames={getClassNames}
            toggle={toggle}
            name={coffee.name}
            image={coffee.image}
            price={coffee.prices}
            handleClick={() => handleClick(coffee.id)}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default RandomProducts;
