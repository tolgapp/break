import Logo from "../components/Logo";
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
  isLoggedIn: boolean;
  userName: string;
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
      <RandomProducts toggle={toggle} handleClick={handleClick} />
      {openDetail && (
        <ProductDetail
          closeDetail={closeDetail}
          openDetail={openDetail}
          productId={selectedProductId}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Home;
