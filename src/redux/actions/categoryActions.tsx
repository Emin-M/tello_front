import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await api.get("/categories", {
        params: { type: "slug", depth: "2" },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
