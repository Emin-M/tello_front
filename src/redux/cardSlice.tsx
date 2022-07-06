import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import { ICards } from "../modules/types/card";

const initialState: ICards = {
  loading: false,
  items: [],
};

export const fetchCards = createAsyncThunk("card/fetchCards", async () => {
  try {
    const response = await api.get("/carts", {
      params: { type: "slug", depth: "2" },
    });
    return response.data;
  } catch (error) {
    return error;
  }
});

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, items: payload.data });
    });
  },
});

export default cardSlice.reducer;
