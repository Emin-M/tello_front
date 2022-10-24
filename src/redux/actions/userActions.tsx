import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await api.get("/customers", {
      headers: {
        authorization: token ? "Bearer " + token : "",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({
    email,
    phone,
    firstname,
    lastname,
  }: {
    email?: string;
    phone?: string;
    firstname?: string;
    lastname?: string;
  }) => {
    try {
      const response = await api.put("/customers", {
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

export const deleteUser = createAsyncThunk("user/deleteUser", async () => {
  try {
    await api.delete("/customers");
  } catch (error) {
    return error;
  }
});
