import { createSlice } from '@reduxjs/toolkit';
const initialState = { showCart: false };
const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = state.showCart ? false : true;
    },
  },
});
export const { toggleCart } = uiSlice.actions;
export default uiSlice.reducer;
