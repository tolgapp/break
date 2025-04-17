import { useState } from 'react';
import ProductContainer from '../components/ProductContainer';
import ProductDetail from '../components/ProductDetail';
import FilterOptions from '../components/FilterOptions';
import Logo from '../components/Logo';
import coffeeData from '../data/coffee.json';
import { ProductsProps } from '../data/types';

const Products: React.FC<ProductsProps> = ({
  toggle,
  getClassNames,
  setToggle,
  getLogoSrc,
  addToCart,
  openDetail,
  handleClick,
  closeDetail,
  selectedProductId,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredCoffee = selectedOption
    ? coffeeData.coffeeSpecialties.filter(coffee => coffee.tags.includes(selectedOption))
    : coffeeData.coffeeSpecialties;

  return (
    <main className={`${getClassNames(toggle)} gap-3 pb-60 min-h-screen`}>
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <FilterOptions toggle={toggle} setSelectedOption={setSelectedOption} />
      <div className="px-8 mt-10 flex flex-wrap justify-between gap-11">
        {filteredCoffee.map(coffee => (
          <ProductContainer
            key={coffee.id}
            id={coffee.id}
            getClassNames={getClassNames}
            toggle={toggle}
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
