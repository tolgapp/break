export type ProductsProps = {
  addToCart: (product: Product) => void;
  setAddedProducts: (value: Product[]) => void;
  handleClick: (id: number) => void;
  openDetail: boolean;
  productId: number | null;
  closeDetail: () => void;
  selectedProductId: number | null;
};

export type UpdateDataProps = {
  userId: string;
};

export type ProductContainerProps = {
  addToCart?: (product: Product) => void;
  handleClick: (id: number) => void;
  id: number;
  name: string;
  image: string;
  prices: number[];
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
  handleClick: (id: number) => void;
};

export type ButtonProps = {
  isLoggedIn?: boolean;
};

export type BeanProps = {
  userId: string;
};

export type CartItemContainerProps = {
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export type CheckoutProps = {
  total: number;
  handleCheckout: () => void;
  isLoggedIn?: boolean;
};

export type FilterProps = {
  setSelectedOption: (option: string) => void;
};

export type Container = {
  id: string;
  title: string;
  description: string;
};

export type SignupProps = {
  getClassNames: (value: boolean) => string;
};

export type ProtectedRouteProps = {
  isLoggedIn: boolean;
};

export type OfferInfoProps = {
  showDetail: boolean;
  id: number;
  toggleDetail: (id: number) => void;
};

export type OfferContainerProps = {
  toggleDetail: (id: number) => void;
};

export type NavbarProps = {
  userName?: string;
  isLoggedIn?: boolean;
  addedProducts: Product[];
};

export type LogoProps = {
  isLoggedIn?: boolean;
};

export type LoginProps = {
  setIsLoggedIn: (value: boolean) => void;
  setUserName: (value: string) => void;
  setUserId: (value: string) => void;
};

export type CartProps = {
  addedProducts: Product[];
  setAddedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  userId: string;
  isLoggedIn?: boolean;
  closeDetail: () => void;
};

export type HomeProps = {
  addToCart: (product: Product) => void;
  setAddedProducts: (value: Product[]) => void;
  handleClick: (id: number) => void;
  closeDetail: () => void;
  openDetail: boolean;
  selectedProductId: number | null;
  isLoggedIn: boolean;
  userName: string;
};

export type UserProps = {
  setIsLoggedIn: (value: boolean) => void;
  isLoggedIn: boolean;
  userName: string;
};
