import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({
    limit,
    sortBy,
    direction,
    category,
    query,
    page,
  }: {
    limit?: number;
    sortBy?: string;
    direction?: string;
    category?: string[];
    query?: string;
    page?: string;
  }) => {
    try {
      const response = await api.get("/products", {
        params: {
          category_slug: category,
          sortBy: sortBy,
          sortDirection: direction,
          limit: limit,
          query: query,
          page: page,
        },
      });
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const fetchSearchResults = createAsyncThunk(
  "products/fetchSearchResults",
  async (query?: string) => {
    try {
      const response = await api.get("/products", {
        params: {
          query: query,
        },
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

export const fetchProductVariants = createAsyncThunk(
  "products/fetchProductVariants",
  async (id: string) => {
    try {
      const response = await api.get(`/products/${id}/variants`);
      return response?.data?.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);
