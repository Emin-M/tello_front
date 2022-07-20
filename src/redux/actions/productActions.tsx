import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

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
    sortBy,
    direction,
    category,
  }: {
    sortBy?: string;
    direction?: string;
    category?: string[];
  }) => {
    try {
      const response = await api.get("/products", {
        params: {
          category_slug: category,
          sortBy: sortBy,
          sortDirection: direction,
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
