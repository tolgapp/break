import { Link, useLocation } from "react-router-dom";
import { navbarIcons } from "../data/helper";

type NavbarProps = {
  toggle: boolean; // DarkMode toggle
  getClassNames: (value: boolean) => string;
};

const Navbar: React.FC<NavbarProps> = ({ toggle, getClassNames }) => {
  const location = useLocation();

  const icons = navbarIcons.map((icon, id) => {
    const isActive = location.pathname === icon.pathname;
    const dynamicClass = `
      ${isActive ? "text-xl font-bold" : "text-base"}
      ${toggle ? "text-black" : "text-white"}
    `;
    const bgClass = isActive
      ? toggle
        ? "bg-gray-300"
        : "bg-gray-700"
      : "";

    return (
      <div
        key={id}
        className={`flex items-center justify-center w-20 h-20 ${bgClass} transition-all duration-300 rounded-lg`}
      >
        <Link
          to={icon.pathname}
          className="flex flex-col justify-center items-center space-y-2"
        >
          <img
            className="w-10 h-10"
            src={toggle ? icon.iconDark : icon.icon}
            alt={icon.name}
          />
          <p className={`text-center ${dynamicClass}`}>{icon.name}</p>
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
