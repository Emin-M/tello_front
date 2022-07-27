import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const getUser = createAsyncThunk("card/getUser", async () => {
  const id = localStorage.getItem("customerId");
  try {
    const response = await api.get(`/customers/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const updateUser = createAsyncThunk(
  "card/updateUser",
  async ({
    firstname,
    lastname,
    email,
    phone,
  }: {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
  }) => {
    const id = localStorage.getItem("customerId");
    try {
      const response = await api.put(`/customers/${id}`, {
        firstname,
        lastname,
        email,
        phone,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
