import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cartRedux/cartReducers';

const store = configureStore({
  reducer: { cartReducers: cartReducers },
});

export default store;
