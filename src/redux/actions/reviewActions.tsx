import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const postReview = createAsyncThunk(
  "review/postReview",
  async ({
    content,
    rating,
    product_id,
    variant_id,
  }: {
    content?: string;
    rating: Number;
    product_id?: string;
    variant_id?: string;
  }) => {
    try {
      const response = await api.post(`/products/${product_id}/reviews`, {
        data: {
          content,
          rating,
          product_id,
          variant_id,
        },
      });
      return response?.data?.reviews;
    } catch (error) {
      return error;
    }
  }
);

export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async (id?: string) => {
    try {
      const response = await api.get(`/products/${id}/reviews`);
      return response?.data?.reviews;
    } catch (error) {
      return error;
    }
  }
);

export const deleteReview = createAsyncThunk(
  "review/deleteReview",
  async ({ productId, reviewId }: { productId?: string; reviewId: string }) => {
    try {
      const response = await api.delete(
        `/products/${productId}/reviews/${reviewId}`
      );
      return response?.data?.reviews;
    } catch (error) {
      return error;
    }
  }
);
