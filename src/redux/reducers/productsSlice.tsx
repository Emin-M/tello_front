import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../modules/types/products";
import {
  fetchProductById,
  fetchProducts,
  fetchProductVariants,
  fetchSearchResults,
} from "../actions/productActions";

const initialState: IProducts = {
  loading: "idle",
  searchLoading: "idle",
  error: "",
  products: [],
  totalResult: 0,
  searchResults: [],
  singleProduct: null,
  productVariants: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Fetching Products */
    builder.addCase(fetchProducts.pending, (state) => {
      return (state = { ...state, loading: "pending" });
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        loading: "succeeded",
        totalResult: payload?.meta?.pagination?.total,
        products: payload.data || [],
      });
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      return (state = {
        ...state,
        loading: "failed",
        error: "Error fetching data",
      });
    });

    /* Fetching Search Results */
    builder.addCase(fetchSearchResults.pending, (state) => {
      return (state = { ...state, searchLoading: "pending" });
    });
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      return (state = {
        ...state,
        searchLoading: "succeeded",
        searchResults: action.payload.data || [],
      });
    });
    builder.addCase(fetchSearchResults.rejected, (state) => {
      return (state = {
        ...state,
        searchLoading: "failed",
        error: "Error fetching search results",
      });
    });

    /* Fetching Single Product */
    builder.addCase(fetchProductById.pending, (state) => {
      return (state = { ...state, loading: "pending" });
    });
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        loading: "succeeded",
        singleProduct: payload?.id ? payload : null,
      });
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      return (state = {
        ...state,
        loading: "failed",
        error: "Error fetching product",
      });
    });

    /* Fetching Product Variants */
    builder.addCase(fetchProductVariants.pending, (state) => {
      return (state = { ...state, loading: "pending" });
    });
    builder.addCase(fetchProductVariants.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        loading: "succeeded",
        productVariants: payload?.[0]?.id ? payload : null,
      });
    });
    builder.addCase(fetchProductVariants.rejected, (state) => {
      return (state = {
        ...state,
        loading: "failed",
        error: "Error fetching product variants",
      });
    });
  },
});

export default productsSlice.reducer;
