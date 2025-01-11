import { useCallback, useState } from "react";
import ProductContainer from "../components/ProductContainer";
import ProductDetail from "../components/ProductDetail";
import FilterOptions from "../components/FilterOptions";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import coffeeData from "../data/coffee.json";
import { Product } from "../data/helper";

type ProductsProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getLogoSrc: (value: boolean) => string;
  getClassNames: (value: boolean) => string;
  addToCart: (product: Product) => void;
  setAddedProducts: (value: ArrayLike) => void;
} & Product;

const Products: React.FC<ProductsProps> = ({
  toggle,
  getClassNames,
  setToggle,
  getLogoSrc,
  addToCart
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredCoffee = selectedOption
    ? coffeeData.coffeeSpecialties.filter((coffee) =>
        coffee.tags.includes(selectedOption)
      )
    : coffeeData.coffeeSpecialties;

  const handleClick = useCallback((id: number) => {
    setSelectedProductId(id);
    setOpenDetail(true);
  }, []);

  const closeDetail = useCallback(() => {
    setOpenDetail(false);
    setSelectedProductId(null);
  }, []);

  return (
    <div
  className={`${getClassNames(
    toggle
  )} gap-3 pb-60 min-h-screen`}
>
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <FilterOptions toggle={toggle} setSelectedOption={setSelectedOption} />
      <div className="px-8 mt-10 flex flex-wrap justify-between gap-11">
        {filteredCoffee.map((coffee) => (
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
      </div>
      {openDetail && (
        <ProductDetail
          handleClick={closeDetail}
          openDetail={openDetail}
          productId={selectedProductId}
        />
      )}
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};

export default Products;
