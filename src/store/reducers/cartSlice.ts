// store/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../data/types';
import { nanoid } from 'nanoid';

interface CartState {
  addedProducts: Product[];
  total: number;
}

const initialState: CartState = {
  addedProducts: [],
  total: 0,
};

const calculateTotal = (products: Product[]) => {
  return products.reduce((acc, product) => acc + (product.price ?? 0), 0);
};

const applyDiscount = (products: Product[]): Product[] => {
  if (products.length <= 3)
    return products.map((p) => {
      if (p.price === 0 && p.size) {
        const originalPrice = p.prices[p.sizes.indexOf(p.size)];
        return { ...p, price: originalPrice };
      }
      return p;
    });

  const smallestPrice = Math.min(
    ...products.map((product) => {
      if (!product.size) return Infinity;
      const originalPrice = product.prices[product.sizes.indexOf(product.size)];
      return product.price === 0
        ? originalPrice
        : (product.price ?? originalPrice);
    })
  );

  let discountApplied = false;

  return products.map((product) => {
    const originalPrice =
      product.size && product.sizes.includes(product.size)
        ? product.prices[product.sizes.indexOf(product.size)]
        : (product.price ?? 0);

    if (!discountApplied && originalPrice === smallestPrice) {
      discountApplied = true;
      return { ...product, price: 0 };
    }

    if (product.price === 0 && originalPrice !== smallestPrice) {
      return { ...product, price: originalPrice };
    }

    return product;
  });
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const productWithInstanceId = { ...action.payload, instanceId: nanoid() };
      const updatedProducts = [...state.addedProducts, productWithInstanceId];
      const discountedProducts = applyDiscount(updatedProducts);

      state.addedProducts = discountedProducts;
      state.total = calculateTotal(discountedProducts);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const updatedProducts = state.addedProducts.filter(
        (product) => product.instanceId !== action.payload
      );
      const discountedProducts = applyDiscount(updatedProducts);
      state.addedProducts = discountedProducts;
      state.total = calculateTotal(discountedProducts);
    },
    loadCartFromStorage(
      state,
      action: PayloadAction<{ products: Product[]; total: number }>
    ) {
      state.addedProducts = action.payload.products;
      state.total = action.payload.total;
    },
    clearCart(state) {
      state.addedProducts = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, loadCartFromStorage, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
