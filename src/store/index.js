import { combineReducers, createStore } from 'redux';
import cartReducers from './cartRedux/cartReducers';

const store = createStore(combineReducers({ cartReducers }));

export default store;
