import { useEffect, useState } from "react";
import { getClassNames, getLogoSrc, LastOrderType } from "../data/helper";
import BackButton from "./BackButton";
import Logo from "./Logo";
import axios from "axios";

type PointsProps = {
  toggle: boolean;
  userId: string;
  setToggle: (value: boolean) => void;
};

const Points: React.FC<PointsProps> = ({ toggle, setToggle, userId }) => {
  const [lastOrders, setLastOrders] = useState<LastOrderType>([]);
  const points = lastOrders.length;

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get<LastOrderType>(
          `http://localhost:5002/api/users/${userId}/receipts`
        );
        setLastOrders(response.data);
      } catch (error) {
        console.error("Checkout error:", error);
      }
    };

    getRecipes();
  }, [userId]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-8 transition-all duration-500 ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle} />
      <div className={`border flex w-full justify-between min-h-[55rem]`}>
       <div className={`${getClassNames(
        toggle
      )} flex w-1/2 items-center justify-center`}>
       <h2
          className={`text-6xl text-center font-bold font-mono px-8`}
        >
          Your actual {points > 1 ? "BEANS are" : "BEAN is"}
        </h2>
       </div>
        {points > 0 ? (
          <div className={`${getClassNames(
            !toggle
          )} px-6 py-4 w-1/2 flex justify-center items-center`}>
            <h3 className="text-7xl font-bold text-center">
              {points}
            </h3>
            
          </div>
        ) : (
          <div className={`${getClassNames(
            !toggle
          )} w-1/2 px-6 py-4 rounded-lg shadow-lg flex flex-col justify-center items-center`}>
            <h3 className="text-3xl font-bold ">
              No Orders Yet!
            </h3>
            <p className="mt-2 text-lg text-center">
              Earn 1 BEAN for every order you place.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Points;
