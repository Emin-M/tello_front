import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import { ICategories } from "../modules/types/categories";

const initialState: ICategories = {
  loading: false,
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await api.get("/categories", {
        params: { type: "slug", depth: "2" },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, categories: payload.data });
    });
  },
});

export default categoriesSlice.reducer;
