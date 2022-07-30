import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
import cardSlice from "./reducers/cardSlice";
import userSlice from "./reducers/userSlice";

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
