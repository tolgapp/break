import { useEffect, useState } from 'react';
import { BACKEND_URL, getClassNames } from '../data/helper';
import BackButton from './BackButton';
import Logo from './Logo';
import axios from 'axios';
import { BeanProps, LastOrderType } from '../data/types';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const Beans: React.FC<BeanProps> = () => {
  const { userId } = useSelector((state: RootState) => state.auth);
  const [lastOrders, setLastOrders] = useState<LastOrderType>([]);
  const points = lastOrders.length;
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get<LastOrderType>(`${BACKEND_URL}/users/${userId}/receipts`);
        setLastOrders(response.data);
      } catch (error) {
        console.error('Checkout error:', error);
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
      <Logo />
      <BackButton />
      <div className={`border flex w-full justify-between min-h-[55rem]`}>
        <div className={`${getClassNames(toggle)} flex w-1/2 items-center justify-center`}>
          {points < 1 ? (
            <h3 className="px-2 text-7xl text-center font-bold ">No Orders Yet 🫣</h3>
          ) : (
            <h2 className={`text-5xl overflow-hidden text-left font-bold px-8`}>
              You currently have
            </h2>
          )}
        </div>
        {points > 0 ? (
          <div
            className={`${getClassNames(!toggle)} px-6 py-4 w-1/2 flex justify-center items-center`}
          >
            <h3 className="text-5xl font-bold text-center">
              {points > 1 ? `${points} BEANS` : `${points} BEAN`}
            </h3>
          </div>
        ) : (
          <div
            className={`${getClassNames(
              !toggle
            )} w-1/2 px-4 text-balance py-4 shadow-lg flex flex-col justify-center items-center`}
          >
            <p className="mt-2 text-4xl font-semibold text-center">
              Earn 1 BEAN for every order you place.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beans;
