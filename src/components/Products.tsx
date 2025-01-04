import { useCallback, useState } from "react";
import ProductContainer from "./ProductContainer";
import ProductDetail from "./ProductDetail";
import FilterOptions from "./FilterOptions";
import Logo from "./Logo";

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

  const handleClick = useCallback(() => {
    console.log("Detail Opened");
    setOpenDetail((prev) => !prev);
  }, []);

  return (
    <div
      className={`pt-6 ${getClassNames(
        toggle
      )} text-white flex flex-wrap justify-start gap-11 pb-32`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <div className="px-8 flex flex-wrap gap-8 overflow-auto">
        <FilterOptions toggle={toggle} />
      </div>
      <div className="px-8 flex flex-wrap gap-8">
        <ProductContainer
          getClassNames={getClassNames}
          toggle={toggle}
          handleClick={handleClick}
        />
        <ProductContainer
          getClassNames={getClassNames}
          toggle={toggle}
          handleClick={handleClick}
        />
        <ProductContainer
          getClassNames={getClassNames}
          toggle={toggle}
          handleClick={handleClick}
        />
      </div>
      {openDetail && (
        <ProductDetail handleClick={handleClick} openDetail={openDetail} />
      )}
    </div>
  );
};
export default Products;
