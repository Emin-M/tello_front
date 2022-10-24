import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../modules/types/user";
import { getUser, updateUser } from "../actions/userActions";

const initialState: IUser = {
  loading: "idle",
  user: null,
  isLoggedin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Creating User */
    builder.addCase(getUser.pending, (state) => {
      return (state = { ...state, loading: "pending" });
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      return (state = {
        ...state,
        loading: "succeeded",
        user: payload,
        isLoggedin: payload._id ? true : false,
      });
    });
    builder.addCase(getUser.rejected, (state) => {
      return (state = { ...state, loading: "failed" });
    });

    /* Updating User */
    builder.addCase(updateUser.pending, (state) => {
      return (state = { ...state, loading: "pending" });
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: "succeeded", user: payload });
    });
    builder.addCase(updateUser.rejected, (state) => {
      return (state = { ...state, loading: "failed" });
    });
  },
});

export default userSlice.reducer;
