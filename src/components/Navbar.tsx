import { navbarIcons } from "../data/helper";

type NavbarProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
};

const Navbar: React.FC<NavbarProps> = ({ toggle, getClassNames }) => {
  const icons = navbarIcons.map((icon, id) => {
    return (
      <div
        key={id}
        className="cursor-pointer flex flex-col items-center justify-center"
      >
        {toggle ? (
          <img className="w-14" src={icon.iconDark} alt={icon.name} />
        ) : (
          <img className="w-14" src={icon.icon} alt={icon.name} />
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
