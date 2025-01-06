import { useCallback, useState } from "react";
import ProductContainer from "../components/ProductContainer";
import ProductDetail from "../components/ProductDetail";
import FilterOptions from "../components/FilterOptions";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

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
      className={`${getClassNames(
        toggle
      )} text-white flex flex-wrap justify-start gap-3 pb-60`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <FilterOptions toggle={toggle} />
      <div className="px-8 mt-10 flex flex-wrap justify-between items-center gap-11">
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
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};
export default Products;
