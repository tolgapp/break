import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedOption: string | null;
}

const initialState: FilterState = {
  selectedOption: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
