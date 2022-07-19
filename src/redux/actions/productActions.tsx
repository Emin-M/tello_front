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
