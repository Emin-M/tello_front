import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../api/api";
import { IProduct, IProducts } from "../modules/types/products";

const initialState: IProducts = {
  loading: false,
  allProducts: [],
  categoryProducts: [],
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

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category: string[]) => {
    try {
      const response = await api.get("/products", {
        params: { category_slug: category },
      });
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductsByCategory: (state, action: PayloadAction<string>) => {
      let filteredData: IProduct[] = [];

      // state.categoryProducts.map((categoryProduct) => {
      //   // console.log(categoryProduct);

      //   return categoryProduct.categories.map((subCategory) => {
      //     // console.log(subCategory);

      //     if (subCategory.name === action.payload) {
      //       return (filteredData = [...filteredData, categoryProduct]);
      //     }
      //   });
      // });
      // return (state = { ...state, categoryProducts: filteredData });
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const { filterProductsByCategory } = productsSlice.actions;

export default productsSlice.reducer;
