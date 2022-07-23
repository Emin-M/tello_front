import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../modules/types/products";
import {
  fetchProductById,
  fetchProducts,
  fetchProductVariants,
  fetchSearchResults,
} from "./actions/productActions";

const initialState: IProducts = {
  loading: false,
  searchLoading: false,
  products: [],
  searchResults: [],
  singleProduct: null,
  productVariants: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Fetching Products */
    builder.addCase(fetchProducts.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        products: action.payload.data || [],
      });
    });

    /* Fetching Search Results */
    builder.addCase(fetchSearchResults.pending, (state) => {
      return (state = { ...state, searchLoading: true });
    });
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      return (state = {
        ...state,
        searchLoading: false,
        searchResults: action.payload.data || [],
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

    /* Fetching Product Variants */
    builder.addCase(fetchProductVariants.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProductVariants.fulfilled, (state, action) => {
      return (state = {
        ...state,
        loading: false,
        productVariants: action.payload,
      });
    });
  },
});

export default productsSlice.reducer;
