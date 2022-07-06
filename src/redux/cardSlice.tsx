import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import { ICards } from "../modules/types/card";

const initialState: ICards = {
  loading: false,
  items: null,
};

export const fetchCards = createAsyncThunk("card/fetchCards", async () => {
  let cartId = localStorage.getItem("cartId") || "";
  try {
    const response = await api.get(`/carts/${cartId}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addProductToBasket = createAsyncThunk(
  "card/addProductToBasket",
  async ({ cartId, id }: { cartId: string; id: string }) => {
    try {
      const response = await api.post(`/carts/${cartId}`, {
        id: id,
        quantity: 1,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);

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
  },
});

export default cardSlice.reducer;
