import { useState } from 'react';
import Logo from '../components/Logo';
import OfferContainer from '../components/OfferContainer';
import ProductDetail from '../components/ProductDetail';
import RandomProducts from '../components/RandomProducts';
import OfferInfo from '../components/OfferInfo';
import { HomeProps } from '../data/types';

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
  const [showDetail, setShowDetail] = useState(false);
  const [offerId, setOfferId] = useState<number | undefined>(undefined);

  const toggleDetail = (id: number) => {
    if (id === 0) {
      setShowDetail(prev => !prev);
      setOfferId(id);
    }
  };

  return (
    <div
      className={`relative flex flex-col ${getClassNames(
        toggle
      )} min-h-dvh overflow-y-scroll pb-48`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <OfferContainer toggle={toggle} toggleDetail={toggleDetail} />
      <RandomProducts toggle={toggle} handleClick={handleClick} />
      {openDetail && (
        <ProductDetail
          closeDetail={closeDetail}
          openDetail={openDetail}
          productId={selectedProductId}
          addToCart={addToCart}
        />
      )}
      {showDetail && offerId !== undefined && (
        <OfferInfo
          toggle={toggle}
          toggleDetail={toggleDetail}
          showDetail={showDetail}
          id={offerId}
        />
      )}
    </div>
  );
};

export default Home;
