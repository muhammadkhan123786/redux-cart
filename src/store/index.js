import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cartRedux/cartReducers';
import uiReducers from './uiRedux/uiSlice';

const store = configureStore({
  reducer: { cartReducers: cartReducers, uiReducers: uiReducers },
});

export default store;
