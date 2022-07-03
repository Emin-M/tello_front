import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import { IProducts } from "../modules/types/products";

const initialState: IProducts = {
  loading: false,
  products: [],
  categories: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
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

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        products: action.payload.data,
      });
    });
    // builder.addCase(fetchProducts.rejected, (state) => {
    //   return (state = {
    //     ...state,
    //     loading: false,
    //     error: "Error in Fetching products...",
    //   });
    // });
    builder.addCase(fetchCategories.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, categories: payload.data });
    });
  },
});

export default productsSlice.reducer;
