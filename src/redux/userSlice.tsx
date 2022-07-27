import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../modules/types/user";
import { getUser, updateUser } from "./actions/userActions";

const initialState: IUser = {
  loading: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Creating User */
    builder.addCase(getUser.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, user: payload });
    });
    builder.addCase(getUser.rejected, (state) => {
      return (state = { ...state, loading: false });
    });

    /* Updating User */
    builder.addCase(updateUser.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, user: payload });
    });
    builder.addCase(updateUser.rejected, (state) => {
      return (state = { ...state, loading: false });
    });
  },
});

export default userSlice.reducer;
