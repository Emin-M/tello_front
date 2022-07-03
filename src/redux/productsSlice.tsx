import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
import { IProducts } from "../modules/types/products";

const initialState: IProducts = {
  loading: false,
  products: [],
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
  },
});

export default productsSlice.reducer;
