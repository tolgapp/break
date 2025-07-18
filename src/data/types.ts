export type ProductsProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getLogoSrc: (value: boolean) => string;
  getClassNames: (value: boolean) => string;
  addToCart: (product: Product) => void;
  setAddedProducts: (value: Product[]) => void;
  handleClick: (id: number) => void;
  openDetail: boolean;
  productId: number | null;
  closeDetail: () => void;
  selectedProductId: number | null;
};

export type UpdateDataProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  userId: string;
};

export type Product = {
  id: number;
  name: string;
  image: string;
  prices: number[];
  sizes: string[];
  instanceId?: string;
  size?: string | undefined;
  price: number;
  timestamp?: string;
};

export type Order = {
  receiptId: string;
  timestamp: string;
  total: number;
  products: Product[];
};

export type LastOrderType = Order[];

export type RandomProductsProps = {
  toggle: boolean;
  handleClick: (id: number) => void;
};

export type ButtonProps = {
  toggle: boolean;
  isLoggedIn?: boolean;
};

export type BeanProps = {
  toggle: boolean;
  userId: string;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
};

export type CartItemContainerProps = {
  toggle: boolean;
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export type CheckoutProps = {
  toggle: boolean;
  total: number;
  handleCheckout: () => void;
  isLoggedIn?: boolean;
};

export type FilterProps = {
  toggle: boolean;
  setSelectedOption: (option: string) => void;
};

export type Container = {
  id: string;
  title: string;
  description: string;
};

export type UserActionProps = {
  toggle: boolean;
};

export type ThemeProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
};

export type SignupProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
};

export type ProtectedRouteProps = {
  isLoggedIn: boolean;
};

export type OfferInfoProps = {
  toggle: boolean;
  showDetail: boolean;
  id: number;
  toggleDetail: (id: number) => void;
};

export type OfferContainerProps = {
  toggle: boolean;
  toggleDetail: (id: number) => void;
};

export type NavbarProps = {
  toggle: boolean; 
  getClassNames: (value: boolean) => string;
  userName?: string;
  isLoggedIn?: boolean;
  addedProducts: Product[];
};

export type LogoProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getLogoSrc: (toggle: boolean) => string;
  isLoggedIn?: boolean;
};

export type LoginProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  setIsLoggedIn: (value: boolean) => void;
  setUserName: (value: string) => void;
  setUserId: (value: string) => void;
};

export type CartProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  userId: string;
  isLoggedIn?: boolean;
  closeDetail: () => void;
};

export type HomeProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getLogoSrc: (value: boolean) => string;
  getClassNames: (value: boolean) => string;
  addToCart: (product: Product) => void;
  setAddedProducts: (value: Product[]) => void;
  handleClick: (id: number) => void;
  closeDetail: () => void;
  openDetail: boolean;
  selectedProductId: number | null;
  isLoggedIn: boolean;
  userName: string;
};

export type NotFoundProps = {
  toggle: boolean;
  getClassNames: (value: boolean) => string;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getLogoSrc: (value: boolean) => string;
};

export type UserProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  setIsLoggedIn: (value: boolean) => void;
  isLoggedIn: boolean;
  userName: string;
};
