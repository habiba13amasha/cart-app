import { configureStore } from '@reduxjs/toolkit'
import productSlices from './slices/product-slices';
import cartSlice from './slices/cart-slice';


const store = configureStore({
  reducer: {
    Products:productSlices,
    cart:cartSlice
  }
})

export default store;