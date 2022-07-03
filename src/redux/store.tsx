import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
