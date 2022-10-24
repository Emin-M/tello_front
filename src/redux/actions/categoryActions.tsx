import { createAsyncThunk } from "@reduxjs/toolkit";
import localApi from "../../api/api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await localApi.get("/categories");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
