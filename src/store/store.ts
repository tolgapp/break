import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './reducers/toggleSlice';
import authReducer from "./reducers/authSlice"

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
