import axios from 'axios';
import { BACKEND_URL, getClassNames, toggleTextColor } from '../data/helper';
import BackButton from './BackButton';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { LastOrderType, Order } from '../data/types';
import type { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const LastOrders = () => {
  const toggle = useSelector((state: RootState) => state.toggle.toggle);
  const { userId } = useSelector((state: RootState) => state.auth);

  const [lastOrders, setLastOrders] = useState<LastOrderType>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await axios.get<LastOrderType>(`${BACKEND_URL}/users/${userId}/receipts`);
        const sortedOrders = response.data.sort(
          (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setLastOrders(sortedOrders);
      } catch (error) {
        console.error('Checkout error:', error);
      }
    };

    getRecipes();
  }, []);

  const eachOrder = lastOrders.map((order: Order, index) => (
    <div
      key={order.receiptId}
      className="p-6 m-2 border-dotted border-2 border-gray-300 w-full bg-white shadow-sm"
    >
      <div className="text-center border-b-2 border-dotted border-gray-300 pb-4 mb-4">
        <p className="font-mono text-xl font-bold text-slate-900">
          ORDER #{lastOrders.length - index}
        </p>
        <p className="font-mono text-sm text-gray-600">
          {new Date(order.timestamp).toLocaleDateString()}
        </p>
      </div>
      <div className="space-y-3 mb-6">
        {order.products.map(product => (
          <div key={nanoid()} className="flex justify-between items-center font-mono text-sm">
            <div className="flex gap-2">
              <span className="font-medium text-slate-900">{product.name}</span>
              <span className="text-gray-500">({product.size || 'N/A'})</span>
            </div>
            <span className="font-semibold text-slate-900">{product.price.toFixed(2)} €</span>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-dotted border-gray-300 my-4"></div>
      <div className="flex justify-between items-center pt-2">
        <p className="font-mono font-bold text-2xl text-slate-900">TOTAL</p>
        <p className="font-mono font-bold text-2xl text-slate-900">{order.total.toFixed(2)} €</p>
      </div>
    </div>
  ));

  return (
    <div
      className={`${getClassNames(
        toggle
      )} flex flex-col gap-4 justify-start items-center min-h-screen overflow-auto pb-48 pt-32 px-8`}
    >
      <Logo />
      <BackButton />
      <h2 className={`${toggleTextColor} text-3xl font-mono font-bold`}>Order History</h2>

      {lastOrders.length > 0 ? (
        <div className="flex flex-col items-center w-full gap-6">{eachOrder}</div>
      ) : (
        <p className={`${toggleTextColor} text-xl font-mono`}>No orders found</p>
      )}
    </div>
  );
};

export default LastOrders;
