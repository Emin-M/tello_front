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
  error: "",
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
    builder.addCase(fetchProducts.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error fetching data",
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
    builder.addCase(fetchSearchResults.rejected, (state) => {
      return (state = {
        ...state,
        searchLoading: false,
        error: "Error fetching search results",
      });
    });

    /* Fetching Single Product */
    builder.addCase(fetchProductById.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        loading: false,
        singleProduct: payload,
      });
      // if (payload?.id) {
      //   return (state = {
      //     ...state,
      //     loading: false,
      //     singleProduct: payload,
      //   });
      // } else {
      //   return (state = {
      //     ...state,
      //     loading: false,
      //     singleProduct: null,
      //   });
      // }
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error fetching product",
      });
    });

    /* Fetching Product Variants */
    builder.addCase(fetchProductVariants.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(fetchProductVariants.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        loading: false,
        productVariants: payload,
      });
      // if (payload?.id) {
      //   return (state = {
      //     ...state,
      //     loading: false,
      //     productVariants: payload,
      //   });
      // } else {
      //   return (state = {
      //     ...state,
      //     loading: false,
      //     singleProduct: null,
      //   });
      // }
    });
    builder.addCase(fetchProductVariants.rejected, (state) => {
      return (state = {
        ...state,
        loading: false,
        error: "Error fetching product variants",
      });
    });
  },
});

export default productsSlice.reducer;
