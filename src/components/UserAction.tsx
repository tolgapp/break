import { Link, useLocation } from 'react-router-dom';
import { getClassNames } from '../data/helper';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const UserAction = () => {
  const { pathname } = useLocation();

  const toggle = useSelector((state: RootState) => state.toggle);

  const buttonBg = toggle ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-200';

  if (pathname === '/profile') {
    return (
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          to="/signup"
          className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 bg-white text-slate-900 `}
        >
          Signup
        </Link>
        <Link
          to="/login"
          className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 bg-white text-slate-900`}
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <Link
        to="/signup"
        className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 ${buttonBg} ${getClassNames(
          !toggle
        )}`}
      >
        Signup
      </Link>
      <Link
        to="/login"
        className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 ${buttonBg} ${getClassNames(
          !toggle
        )}`}
      >
        Login
      </Link>
    </div>
  );
};
export default UserAction;
