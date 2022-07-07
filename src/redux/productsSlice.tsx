import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../api/api";
import { IProduct, IProducts } from "../modules/types/products";

const initialState: IProducts = {
  loading: false,
  allProducts: [],
  categoryProducts: [],
  singleProduct: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const filterProducts = createAsyncThunk(
  "products/filterProducts",
  async ({
    direction,
    category,
  }: {
    direction: string;
    category: string[];
  }) => {
    try {
      const response = await api.get("/products", {
        params: {
          category_slug: category,
          sortBy: "price",
          sortOrder: direction,
        },
      });
      return response.data;
    } catch (error: any) {
      console.log(error);
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
      console.log(error);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

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
