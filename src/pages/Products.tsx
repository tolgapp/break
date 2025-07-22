import { useState } from 'react';
import ProductContainer from '../components/ProductContainer';
import ProductDetail from '../components/ProductDetail';
import FilterOptions from '../components/FilterOptions';
import Logo from '../components/Logo';
import { ProductsProps } from '../data/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getClassNames } from '../data/helper';

const Products: React.FC<ProductsProps> = ({
  addToCart,
  openDetail,
  handleClick,
  closeDetail,
  selectedProductId,
}) => {
  const products = useSelector((state: RootState) => state.products.products);
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredCoffee = selectedOption
    ? products.filter(coffee => coffee.tags?.includes(selectedOption))
    : products;

  return (
    <main className={`${getClassNames(toggle)} gap-3 pb-60 min-h-screen`}>
      <Logo />
      <FilterOptions setSelectedOption={setSelectedOption} />
      <div className="px-8 mt-10 flex flex-wrap justify-between gap-11">
        {filteredCoffee.map(coffee => (
          <ProductContainer
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            image={coffee.image}
            prices={coffee.prices}
            handleClick={handleClick}
            addToCart={addToCart}
          />
        ))}
      </div>
      {openDetail && (
        <ProductDetail
          closeDetail={closeDetail}
          openDetail={openDetail}
          productId={selectedProductId}
          addToCart={addToCart}
        />
      )}
    </main>
  );
};

export default Products;
