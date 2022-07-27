import { createSlice } from "@reduxjs/toolkit";
import { ICategories } from "../modules/types/categories";
import { fetchCategories } from "./actions/categoryActions";

const initialState: ICategories = {
  loading: "idle",
  error: "",
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      return (state = { ...state, loading: "pending" });
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        loading: "succeeded",
        categories: payload.data,
      });
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      return (state = {
        ...state,
        loading: "failed",
        error: "Error fetching categories",
      });
    });
  },
});

export default categoriesSlice.reducer;
