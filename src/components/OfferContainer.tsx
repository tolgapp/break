type OfferContainerProps = {
    toggle: boolean;
  };
  
  const OfferContainer: React.FC<OfferContainerProps> = () => {
    const offers = {
      image: ["/offer/offer01.png", "/offer/offer02.jpg", "/offer/offer03.jpg"],
    };

    return (
      <div
        className="relative mt-24 grid grid-cols-2 gap-5 px-8"
        style={{ gridTemplateRows: "auto auto" }}
      >
        {offers.image.map((src, index) => (
          <img
           
            key={index}
            src={src}
            className={`rounded-3xl ${
              index === 0
                ? "col-span-2 w-[35rem]"
                : "mx-auto mt-2 w-[17rem]"
            }`}
          />
        ))}
      </div>
    );
  };
  
  export default OfferContainer;
  