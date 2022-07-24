import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { ICreateUser } from "../../modules/types/user";

export const createUser = createAsyncThunk(
  "card/createUser",
  async (data: ICreateUser) => {
    try {
      const response = await api.post("/customers", data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
