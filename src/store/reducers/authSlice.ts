import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  userName: string;
  userId: string;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', 
  userName: localStorage.getItem('userName') || '',
  userId: localStorage.getItem('userId') || '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{ isLoggedIn: boolean; userName: string; userId: string }>
    ) {
      const { isLoggedIn, userName, userId } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.userName = userName;
      state.userId = userId;

      if (isLoggedIn) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', userName);
        localStorage.setItem('userId', userId);
      } else {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
      }
    },
    clearAuth(state) {
      state.isLoggedIn = false;
      state.userName = '';
      state.userId = '';

      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
