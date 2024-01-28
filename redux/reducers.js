import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter';
import cartReducer from './features/cart';


const rootReducer = combineReducers({
  counter: counterReducer,
  cart:cartReducer
});
export default rootReducer;