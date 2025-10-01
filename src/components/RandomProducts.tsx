import { useState, useEffect } from 'react';
import ProductContainer from './ProductContainer';
import { getClassNames } from '../data/helper';
import { Product, RandomProductsProps } from '../data/types';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const RandomProducts: React.FC<RandomProductsProps> = ({ handleClick }) => {
  const products = useSelector((state: RootState) => state.products.products);
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  useEffect(() => {
    if (products.length === 0) return;

    const selectRandomProducts = () => {
      const selectedProducts: Product[] = [];

      while (selectedProducts.length < 6) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const product = products[randomIndex];
        if (!selectedProducts.find((p) => p.id === product.id)) {
          selectedProducts.push({
            ...product,
            price: product.prices[0] || 0,
          });
        }
      }

      setRandomProducts(selectedProducts);
    };

    selectRandomProducts();
  }, [products]);

  return (
    <div className="px-8 mt-2 flex flex-col gap-5 min-h-dvh overflow-y-scroll pb-5 sm:px-4 md:px-8 lg:px-16">
      <h2 className={`mt-6 text-3xl font-medium ${getClassNames(toggle)}`}>
        Selected Coffee Specialties
      </h2>
      <ul className="flex flex-wrap overflow-auto justify-between gap-5">
        {randomProducts.map((coffee) => (
          <ProductContainer
            key={coffee.id}
            id={coffee.id}
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
