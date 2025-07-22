import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './reducers/toggleSlice';
import authReducer from "./reducers/authSlice"
import productSlice from './reducers/productSlice';

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    auth: authReducer,
    products: productSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
