type ProductDetail = {
  handleClick: () => void;
  openDetail: boolean;
};

const ProductDetail: React.FC<ProductDetail> = ({ handleClick, openDetail }) => {
  return (
    <div className={`fixed flex flex-col justify-center items-center bottom-0 z-[100] h-[70%] w-full bg-slate-50 rounded-t-3xl translate-x-[-2rem] rounded-xl ${openDetail ? 'fade-in' : 'fade-out'}`}>
      <button
        onClick={handleClick}
        className="absolute top-8 right-8 border border-black text-black px-4 py-3 rounded-3xl"
      >
        X
      </button>
      <h2 className="text-black ">Fresh Coffee</h2>
      <div className="flex flex-col text-black">Ingredients</div>
    </div>
  );
};
export default ProductDetail;
