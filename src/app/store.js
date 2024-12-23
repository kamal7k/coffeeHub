import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../auth/userApi";
import { userSlice } from "../auth/userSlice";
import { productApi } from "../product/productApi";
import { cartSlice } from "../cart/cartSlice";
import { orderApi } from "../order/orderApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,

    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      productApi.middleware,
      orderApi.middleware

    ])
})