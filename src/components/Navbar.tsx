import { Link, useLocation } from 'react-router-dom';
import { navbarIcons } from '../data/helper';
import { NavbarProps } from '../data/types';

const Navbar: React.FC<NavbarProps> = ({
  toggle,
  getClassNames,
  userName,
  isLoggedIn,
  addedProducts,
}) => {
  const location = useLocation();

  const icons = navbarIcons.map((icon, id) => {
    const isActive = location.pathname === icon.pathname;
    const dynamicClass = `
      ${isActive ? 'text-xl font-bold' : 'text-base'}
      ${toggle ? 'text-white' : 'text-black'}
    `;
    const bgClass = isActive ? (toggle ? 'bg-gray-700' : 'bg-gray-300') : '';

    return (
      <div
        key={id}
        className={`relative flex items-center justify-center w-20 h-20 ${bgClass} transition-all duration-300 rounded-lg`}
      >
        <Link to={icon.pathname} className="flex flex-col justify-center items-center space-y-2">
          {icon.name === 'Cart' && addedProducts.length > 0 && (
            <span className="absolute -top-2 right-0 bg-red-600 text-white text-lg w-9 h-9 font-bold rounded-full flex items-center justify-center">
              {addedProducts.length > 9 ? '9+' : addedProducts.length}
            </span>
          )}
          <img className="w-10 h-10" src={toggle ? icon.icon : icon.iconDark} alt={icon.name} />
          <p className={`text-center ${dynamicClass}`}>
            {icon.name === 'User' && isLoggedIn ? userName?.slice(0, 5) : icon.name}
          </p>
        </Link>
      </div>
    );
  });

  return (
    <nav
      className={`flex justify-around items-center fixed bottom-0 w-full ${getClassNames(
        toggle
      )} px-4 py-2 md:py-4 border-t border-gray-300 min-h-32 z-50`}
    >
      {icons}
    </nav>
  );
};

export default Navbar;
