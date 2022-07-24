import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../modules/types/user";
import { createUser } from "./actions/userActions";

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
    builder.addCase(createUser.pending, (state) => {
      return (state = { ...state, loading: true });
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      return (state = { ...state, loading: false, user: payload });
    });
    builder.addCase(createUser.rejected, (state) => {
      return (state = { ...state, loading: false });
    });
  },
});

export default userSlice.reducer;
