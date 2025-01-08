type ItemContainerProps = {
  toggle: boolean
}

const ItemContainer: React.FC<ItemContainerProps> = ({toggle}) => {
  
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget.closest(".item-container") as HTMLElement;
    element?.remove();
  };
  
  return (
    <div
      className={`item-container mt-4 w-full max-w-3xl  py-3 px-8 rounded-lg shadow-md ${toggle ? "bg-gray-400" : "bg-gray-800"}`}
    >
      <li className="flex items-center justify-between py-4">
        <span className="text-2xl font-medium">Fresh brewed Coffee - M</span>
        <div className="flex items-center space-x-4">
          <span className="text-xl">4.95 €</span>
          <button
            onClick={handleRemove}
            className="p-2 px-4 text-lg bg-red-500 rounded-lg hover:bg-red-600"
          >
            X
          </button>
        </div>
      </li>
    </div>
  );
  
};
export default ItemContainer;
