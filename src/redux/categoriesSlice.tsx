import { createSlice } from "@reduxjs/toolkit";
import { ICategories } from "../modules/types/categories";
import { fetchCategories } from "./actions/categoryActions";

const initialState: ICategories = {
  loading: false,
  error: "",
  categories: [],
};

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
    builder.addCase(fetchCategories.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error fetching categories",
      });
    });
  },
});

export default categoriesSlice.reducer;
