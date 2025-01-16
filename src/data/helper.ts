// Navbar Icons Data
export const navbarIcons = [
  {
    name: "Home",
    icon: "/icons/home.png",
    iconDark: "/icons/homedark.png",
    pathname: "/",
  },
  {
    name: "Coffee",
    icon: "/icons/coffee.png",
    iconDark: "/icons/coffeedark.png",
    pathname: "/products",
  },
  {
    name: "Cart",
    icon: "/icons/cart.png",
    iconDark: "/icons/cartdark.png",
    pathname: "/cart",
  },
  {
    name: "User",
    icon: "/icons/user.png",
    iconDark: "/icons/userdark.png",
    pathname: "/profile",
  },
];

// Filter Options
export const filterOptions: string[] = [
  "All",
  "Fresh",
  "Vegan",
  "Sugar-Free",
  "Vegetarian",
  "Lactose-Free",
];

// Login & Signup
export const inputClass = `text-3xl p-4 rounded-lg`;

// Text Color
export const getClassNames = (toggle: boolean): string =>
  `${toggle ? "bg-white text-black" : "bg-slate-900 text-white"}`;

export const getLogoSrc = (toggle: boolean): string =>
  `/logo${toggle ? "/breakblack" : "/breakwhite"}.png`;

export const toggleTextColor = (toggle: boolean): string =>
  toggle ? "text-white" : "text-black";

export const toggleButtonColor = (toggle: boolean): string =>
  toggle ? "text-black" : "text-black";

export const backgroundColor = (toggle: boolean) =>
  toggle ? "bg-black" : "bg-white";

// Prodcut Type
export type Product = {
  id: number;
  name: string;
  image: string;
  price: number | number[];
  instanceId?: string,
  size?: string
};
