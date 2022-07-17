import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { alertSuccess } from "../../modules/alert";

export const fetchCards = createAsyncThunk("card/fetchCards", async () => {
  let cartId = localStorage.getItem("cartId") || "";
  try {
    const response = await api.get(`/carts/${cartId}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addProductToBasket = createAsyncThunk(
  "card/addProductToBasket",
  async ({ id, quantity }: { id: string; quantity: number }) => {
    let cartId = localStorage.getItem("cartId") || "";
    try {
      await api.post(`/carts/${cartId}`, {
        id: id,
        quantity: quantity,
      });
      alertSuccess("Məhsul səbətə əlavə olundu!");
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteItemFromCart = createAsyncThunk(
  "card/deleteItemFromCart",
  async (id: string) => {
    let cartId = localStorage.getItem("cartId") || "";
    try {
      await api.delete(`/carts/${cartId}/items/${id}`);
      alertSuccess("Məhsul silindi!");
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateItemInCart = createAsyncThunk(
  "card/updateItemInCart",
  async ({ id, quantity }: { id: string; quantity: number }) => {
    let cartId = localStorage.getItem("cartId") || "";
    try {
      await api.put(`/carts/${cartId}/items/${id}`, {
        quantity: quantity,
      });
      alertSuccess("Məhsul yeniləndi!");
    } catch (error) {
      console.log(error);
    }
  }
);
