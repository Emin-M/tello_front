import { createSlice } from "@reduxjs/toolkit";
import {
  postReview,
  fetchReviews,
  deleteReview,
} from "../actions/reviewActions";

const initialState: any = {
  review_loading: "idle",
  reviews: null,
};

export const userSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Post Review */
    // builder.addCase(postReview.pending, (state) => {
    //   return (state = { ...state, review_loading: "pending" });
    // });
    // builder.addCase(postReview.fulfilled, (state, { payload }) => {
    //   return (state = {
    //     ...state,
    //     review_loading: "succeeded",
    //     reviews: payload,
    //   });
    // });
    // builder.addCase(postReview.rejected, (state) => {
    //   return (state = { ...state, review_loading: "failed" });
    // });

    /* Get Reviews */
    builder.addCase(fetchReviews.pending, (state) => {
      return (state = { ...state, review_loading: "pending" });
    });
    builder.addCase(fetchReviews.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        review_loading: "succeeded",
        reviews: payload,
      });
    });
    builder.addCase(fetchReviews.rejected, (state) => {
      return (state = { ...state, review_loading: "failed" });
    });

    /* Delete Review */
    // builder.addCase(deleteReview.pending, (state) => {
    //   return (state = { ...state, review_loading: "pending" });
    // });
    // builder.addCase(deleteReview.fulfilled, (state, { payload }) => {
    //   return (state = {
    //     ...state,
    //     review_loading: "succeeded",
    //     reviews: payload,
    //   });
    // });
    // builder.addCase(deleteReview.rejected, (state) => {
    //   return (state = { ...state, review_loading: "failed" });
    // });
  },
});

export default userSlice.reducer;
