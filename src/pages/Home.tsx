import { useState } from 'react';
import Logo from '../components/Logo';
import OfferContainer from '../components/OfferContainer';
import ProductDetail from '../components/ProductDetail';
import RandomProducts from '../components/RandomProducts';
import OfferInfo from '../components/OfferInfo';
import { HomeProps } from '../data/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getClassNames } from '../data/helper';

const Home: React.FC<HomeProps> = ({
  addToCart,
  handleClick,
  openDetail,
  closeDetail,
  selectedProductId,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [offerId, setOfferId] = useState<number | undefined>(undefined);
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  const toggleDetail = (id: number) => {
    if (id === 0) {
      setShowDetail((prev) => !prev);
      setOfferId(id);
    }
  };

  return (
    <main
      className={`relative flex flex-col ${getClassNames(
        toggle
      )} min-h-dvh overflow-y-scroll pb-48 sm:px-4 md:px-8 lg:px-16`}
    >
      <Logo />
      <OfferContainer toggleDetail={toggleDetail} />
      <RandomProducts handleClick={handleClick} />
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
          toggleDetail={toggleDetail}
          showDetail={showDetail}
          id={offerId}
        />
      )}
    </main>
  );
};

export default Home;
