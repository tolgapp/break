import { Link, useLocation } from "react-router-dom";
import { navbarIcons } from "../data/helper";

type NavbarProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
};

const Navbar: React.FC<NavbarProps> = ({ toggle, getClassNames }) => {
  const location = useLocation();

  const icons = navbarIcons.map((icon, id) => {
    const isActive = location.pathname === icon.pathname;
    const dynamicClass = isActive && toggle ? "text-black text-xl" : "text-white text-xl"

    return (
      <div
        key={id}
        className={`cursor-pointer flex flex-col items-center justify-center p-3 ${
          isActive && toggle ? "bg-slate-400" : ""
        } transition-all duration-300`}
      >
        {toggle ? (
          <Link
            to={icon.pathname}
            className="flex flex-col justify-center items-center"
          >
            <img className="w-10 h-10" src={icon.iconDark} alt={icon.name} />
            <p className={`${dynamicClass}`}>{icon.name}</p>
          </Link>
        ) : (
          <Link
            to={icon.pathname}
            className="flex flex-col justify-center items-center"
          >
            {" "}
            <img className="w-10 h-10" src={icon.icon} alt={icon.name} />
            <p className={`${dynamicClass}`}>{icon.name}</p>
          </Link>
        )}
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
