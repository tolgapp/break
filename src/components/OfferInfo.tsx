import { getClassNames } from "../data/helper";

type OfferInfoProps = {
  toggle: boolean;
  showDetail: boolean;
  id: number;
  toggleDetail: (id: number) => void;
};

const OfferInfo: React.FC<OfferInfoProps> = ({
  toggle,
  toggleDetail,
  showDetail,
  id,
}) => {
  return (
    <div
      className={`${getClassNames(
        toggle
      )} fixed bottom-0 left-0 min-h-[91%] rounded-t-3xl  bg-slate-50 w-full flex flex-col items-center ${
        showDetail ? "fade-in" : "fade-out"
      }`}
    >
      <div className="w-full">
        <img
          src="/offer/offer01.png"
          alt="4Friends Offer"
          className="w-full h-72 object-cover rounded-t-3xl"
        />
      </div>
      <div className="flex flex-col px-8 py-6 space-y-4 text-gray-800">
        <h2 className="text-3xl font-bold text-center">
          4Friends Offer: Buy 4, Pay for 3!
        </h2>
        <p className="text-lg">
          Enjoy this exclusive deal with 4Friends! For a limited time, purchase
          4 items and pay for only 3.
        </p>
        <h3 className="text-xl font-semibold">How It Works:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Add any 4 items to your cart.</li>
          <li>The item with the lowest price will be free.</li>
        </ul>
        <h3 className="text-xl font-semibold">Offer Validity:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>This offer is available for a limited time only.</li>
          <li>
            Payment must be made using <strong>Apple Pay</strong> or{" "}
            <strong>Google Pay</strong>.
          </li>
        </ul>
        <h3 className="text-xl font-semibold">Terms and Conditions:</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>The promotion is valid for a single transaction only.</li>
          <li>
            The free item must be of equal or lesser value compared to the other
            items.
          </li>
          <li>
            This offer cannot be combined with other promotions or discounts.
          </li>
          <li>
            4Friends reserves the right to modify or cancel the offer at any
            time.
          </li>
        </ul>
      </div>
      <button
        className="right-2 top-2 text-4xl border rounded-full w-48 px-4 py-2 text-white bg-black hover:scale-95 text-center"
        onClick={() => toggleDetail(id)}
      >
        Close
      </button>
    </div>
  );
};

export default OfferInfo;
