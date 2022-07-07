import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../modules/types/products";
import {
  fetchProductById,
  fetchProducts,
  fetchProductsByCategory,
  filterProducts,
} from "./actions/productActions";

const initialState: IProducts = {
  loading: false,
  allProducts: [],
  categoryProducts: [],
  singleProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Fetching All Products */
    builder.addCase(fetchProducts.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        allProducts: action.payload.data,
      });
    });

    /* Filtering Products */
    builder.addCase(filterProducts.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(filterProducts.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        categoryProducts: action.payload?.data,
      });
    });

    /* Fetching Products By Category */
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        categoryProducts: action.payload?.data,
      });
    });

    /* Fetching Single Product */
    builder.addCase(fetchProductById.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        singleProduct: action.payload,
      });
    });
  },
});

export default productsSlice.reducer;
