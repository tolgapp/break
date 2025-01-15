import { getClassNames } from "../data/helper";

type OfferInfoProps = {
  toggle: boolean;
};

const OfferInfo: React.FC<OfferInfoProps> = ({ toggle }) => {
  return (
    <div className={`${getClassNames(toggle)} fixed bottom-0 left-0 h-[70%] w-full flex flex-col`}>
      <h2 className={`${getClassNames(toggle)}`}>Offer Info</h2>
    </div>
  );
};
export default OfferInfo;
