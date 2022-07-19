import { createSlice } from "@reduxjs/toolkit";
import { ICards } from "../modules/types/card";
import {
  addProductToBasket,
  deleteItemFromCart,
  fetchCards,
  updateItemInCart,
} from "./actions/cardActions";

const initialState: ICards = {
  loading: false,
  updateLoading: false,
  items: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Fetching Card Products */
    builder.addCase(fetchCards.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
      localStorage.setItem("cartId", payload.id);
      return (state = { ...state, loading: false, items: payload });
    });

    /* Adding Item To Card */
    builder.addCase(addProductToBasket.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(addProductToBasket.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, items: payload?.cart });
    });

    /* Deleting Item From Card */
    builder.addCase(deleteItemFromCart.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(deleteItemFromCart.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, items: payload.cart });
    });

    /* Update Item In Card */
    builder.addCase(updateItemInCart.pending, (state) => {
      return (state = { ...state, updateLoading: true });
    });
    builder.addCase(updateItemInCart.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        items: payload.cart,
        updateLoading: false,
      });
    });
  },
});

export default cardSlice.reducer;
