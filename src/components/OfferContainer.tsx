import { OfferContainerProps } from '../data/types';

const OfferContainer: React.FC<OfferContainerProps> = ({ toggleDetail }) => {
  const offers = {
    image: ['/offer/offer01.jpg', '/offer/offer02.jpg', '/offer/offer03.jpg'],
  };

  return (
    <div
      className="relative mt-24 grid grid-cols-2 gap-5 px-8"
      style={{ gridTemplateRows: 'auto auto' }}
    >
      {offers.image.map((src, index) => (
        <img
          onClick={() => toggleDetail(index)}
          key={index}
          id={index.toString()}
          src={src}
          className={`rounded-3xl ${
            index === 0 ? 'col-span-2 w-[35rem] cursor-pointer' : 'mx-auto mt-2 w-[17rem]'
          } `}
        />
      ))}
    </div>
  );
};

export default OfferContainer;
