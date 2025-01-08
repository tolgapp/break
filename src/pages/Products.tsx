import { useCallback, useState } from "react";
import ProductContainer from "../components/ProductContainer";
import ProductDetail from "../components/ProductDetail";
import FilterOptions from "../components/FilterOptions";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import coffeeData from "../data/coffee.json";

type ProductsProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getLogoSrc: (value: boolean) => string;
  getClassNames: (value: boolean) => string;
};

const Products: React.FC<ProductsProps> = ({
  toggle,
  getClassNames,
  setToggle,
  getLogoSrc,
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const handleClick = useCallback((id: number) => {
    console.log(`Detail Opened for Product ID: ${id}`);
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
      )} flex flex-wrap justify-start gap-3 pb-60`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <FilterOptions toggle={toggle} />
      <div className="px-8 mt-10 flex flex-wrap justify-between items-center gap-11">
        {coffeeData.coffeeSpecialties.map((coffee) => (
          <ProductContainer
            key={coffee.id}
            id={coffee.id}
            getClassNames={getClassNames}
            toggle={toggle}
            name={coffee.name}
            image={coffee.image}
            price={coffee.prices}
            handleClick={() => handleClick(coffee.id)}
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
