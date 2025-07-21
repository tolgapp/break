import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToggleState {
  toggle: boolean;
}

const initialState: ToggleState = {
  toggle: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
 reducers: {
  setToggle(state, action: PayloadAction<boolean>) {
    state.toggle = action.payload;
  },
  toggleSwitch(state) {
    state.toggle = !state.toggle;
  },
},
});

export const { setToggle, toggleSwitch } = toggleSlice.actions;
export default toggleSlice.reducer;
