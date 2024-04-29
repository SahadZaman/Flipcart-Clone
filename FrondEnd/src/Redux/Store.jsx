import { configureStore } from '@reduxjs/toolkit';
import { getProductsReducer, getProductsDetailsReducer } from './Reducers/ProductReducer';
import { cartReducer } from './Reducers/cartReducer';
const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
    getProductsDetails: getProductsDetailsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
