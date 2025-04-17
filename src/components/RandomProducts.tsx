import { useState, useEffect } from 'react';
import coffeeData from '../data/coffee.json';
import ProductContainer from './ProductContainer';
import { getClassNames } from '../data/helper';
import { Product, RandomProductsProps } from '../data/types';

const RandomProducts: React.FC<RandomProductsProps> = ({ toggle, handleClick }) => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    const selectRandomProducts = () => {
      const selectedProducts: Product[] = [];
      const specialties = coffeeData.coffeeSpecialties;

      while (selectedProducts.length < 6) {
        const randomIndex = Math.floor(Math.random() * specialties.length);
        const product = specialties[randomIndex];
        if (!selectedProducts.find(p => p.id === product.id)) {
          selectedProducts.push({
            ...product,
            price: product.prices[0] || 0,
          });
        }
      }

      setRandomProducts(selectedProducts);
    };

    selectRandomProducts();
  }, []);

  return (
    <div className="px-8 flex flex-col gap-4">
      <h2 className={`mt-6 text-3xl font-medium ${getClassNames(toggle)}`}>
        Selected Coffee Specialties
      </h2>
      <ul className="flex flex-wrap overflow-auto justify-between gap-10">
        {randomProducts.map(coffee => (
          <ProductContainer
            key={coffee.id}
            id={coffee.id}
            getClassNames={getClassNames}
            toggle={toggle}
            name={coffee.name}
            image={coffee.image}
            prices={coffee.prices}
            handleClick={() => handleClick(coffee.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RandomProducts;
