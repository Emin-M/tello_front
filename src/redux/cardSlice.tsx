import { createSlice } from "@reduxjs/toolkit";
import { ICards } from "../modules/types/card";
import { fetchCards, updateItemInCart } from "./actions/cardActions";

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
    builder.addCase(fetchCards.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
      localStorage.setItem("cartId", payload.id);
      return (state = { ...state, loading: false, items: payload });
    });
    builder.addCase(updateItemInCart.pending, (state) => {
      return (state = { ...state, updateLoading: true });
    });
    builder.addCase(updateItemInCart.fulfilled, (state) => {
      return (state = { ...state, updateLoading: false });
    });
  },
});

export default cardSlice.reducer;
