import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import OfferContainer from "../components/OfferContainer";
import ProductDetail from "../components/ProductDetail";
import RandomProducts from "../components/RandomProducts";
import { Product } from "../data/helper";

type HomeProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getLogoSrc: (value: boolean) => string;
  getClassNames: (value: boolean) => string;
  addToCart: (product: Product) => void;
  setAddedProducts: (value: Product[]) => void;
  handleClick: (id: number) => void;
  closeDetail: () => void;
  openDetail: boolean;
  selectedProductId: number | null;
};

const Home: React.FC<HomeProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
  addToCart,
  handleClick,
  openDetail,
  closeDetail,
  selectedProductId,
}) => {
  return (
    <div
      className={`relative flex flex-col ${getClassNames(
        toggle
      )} min-h-dvh overflow-y-scroll pb-48 `}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <OfferContainer toggle={toggle} />
      <RandomProducts
        toggle={toggle}
        // addToCart={addToCart}
        handleClick={handleClick}
      />
      {openDetail && (
        <ProductDetail
          handleClick={closeDetail}
          openDetail={openDetail}
          productId={selectedProductId}
          addToCart={addToCart}
        />
      )}
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};

export default Home;
