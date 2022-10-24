import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

/* reducers */
import categoriesSlice from "./reducers/categoriesSlice";
import productsReducer from "./reducers/productsSlice";
import cardSlice from "./reducers/cardSlice";
import userSlice from "./reducers/userSlice";
import favoritesSlice from "./reducers/favoritesSlice";
import reviewsSlice from "./reducers/reviewsSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesSlice);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesSlice,
    card: cardSlice,
    user: userSlice,
    reviews: reviewsSlice,
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
