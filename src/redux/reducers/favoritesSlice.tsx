import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { alertSuccess } from "../../modules/alert";
import { IFavorites } from "../../modules/types/favorites";
import { IProduct } from "../../modules/types/products";

const initialState: IFavorites = {
  favs: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    updateFavorite: (state, { payload }: PayloadAction<IProduct>) => {
      /* getting favorites from state */
      let updatedFavorites = current(state.favs);

      /* checking if item is in state or not */
      let check = false;
      updatedFavorites.map((fav) => {
        if (fav.id === payload.id) {
          check = true;
        }
      });

      /* updating item in state */
      if (check) {
        updatedFavorites = updatedFavorites.filter(
          (updatedFav) => updatedFav.id !== payload.id
        );
        alertSuccess("Məhsul favorilərdən çıxarıldı");
      } else {
        updatedFavorites = [payload, ...updatedFavorites];
        alertSuccess("Məhsul favorilərə əlavə olundu");
      }

      /* writing new items to the state */
      state.favs = updatedFavorites;
    },
    clearFavorite: (state) => {
      state.favs = [];
    },
  },
});

export const { updateFavorite, clearFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
