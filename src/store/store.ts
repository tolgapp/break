import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './reducers/toggleSlice';
import authReducer from "./reducers/authSlice"
import filterReducer from "./reducers/filterSlice"
import productReducer from './reducers/productSlice';

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    auth: authReducer,
    products: productReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
