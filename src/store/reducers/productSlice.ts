import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  name: string;
  image: string;
  prices: number[];
  sizes: string[];
  instanceId?: string;
  size?: string | undefined;
  price?: number;
  timestamp?: string;
  tags: string[];
};

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
