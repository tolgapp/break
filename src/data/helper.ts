// Navbar Icons Data
export const navbarIcons = [
  {
    name: 'Home',
    icon: '/icons/home.png',
    iconDark: '/icons/homedark.png',
    pathname: '/',
  },
  {
    name: 'Coffee',
    icon: '/icons/coffee.png',
    iconDark: '/icons/coffeedark.png',
    pathname: '/products',
  },
  {
    name: 'Cart',
    icon: '/icons/cart.png',
    iconDark: '/icons/cartdark.png',
    pathname: '/cart',
  },
  {
    name: 'User',
    icon: '/icons/user.png',
    iconDark: '/icons/userdark.png',
    pathname: '/profile',
  },
];

export const filterOptions: string[] = [
  'All',
  'Fresh',
  'Vegan',
  'Sugar-Free',
  'Vegetarian',
  'Lactose-Free',
];

// Login & Signup
export const inputClass = `text-3xl p-4 rounded-lg`;

// Text Color
export const getClassNames = (toggle: boolean): string =>
  `${toggle ? 'bg-slate-900 text-white' : 'bg-white text-black'}`;

export const getLogoSrc = (toggle: boolean): string =>
  `/logo${toggle ? '/breakwhite' : '/breakblack'}.png`;

export const toggleTextColor = (toggle: boolean): string => (toggle ? 'text-black' : 'text-white');

export const toggleButtonColor = (toggle: boolean): string =>
  toggle ? 'bg-slate-100 text-slate-900' : 'text-white bg-slate-900';

export const backgroundColor = (toggle: boolean) => (toggle ? 'bg-white' : 'bg-slate-900');

// Backend URL
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
