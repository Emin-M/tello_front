import { createSlice } from "@reduxjs/toolkit";
import { ICards } from "../modules/types/card";
import {
  addProductToBasket,
  deleteItemFromCart,
  emptyCard,
  fetchCards,
  updateItemInCart,
} from "./actions/cardActions";

const initialState: ICards = {
  loading: false,
  updateLoading: false,
  error: "",
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
    builder.addCase(fetchCards.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error fetching card",
      });
    });

    /* Adding Item To Card */
    builder.addCase(addProductToBasket.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(addProductToBasket.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, items: payload?.cart });
    });
    builder.addCase(addProductToBasket.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error adding item to card",
      });
    });

    /* Deleting Item From Card */
    builder.addCase(deleteItemFromCart.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(deleteItemFromCart.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, items: payload.cart });
    });
    builder.addCase(deleteItemFromCart.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error fdeleting card item",
      });
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
    builder.addCase(updateItemInCart.rejected, (state) => {
      return (state = {
        ...state,
        updateLoading: false,
        error: "Error updating card item",
      });
    });

    /* Deleting All Items From Card */
    builder.addCase(emptyCard.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(emptyCard.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, items: payload.cart });
    });
    builder.addCase(emptyCard.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error clearing card",
      });
    });
  },
});

export default cardSlice.reducer;
