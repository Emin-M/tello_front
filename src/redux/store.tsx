import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsReducer from "./productsSlice";
import cardSlice from "./cardSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesSlice,
    card: cardSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
