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
  async ({
    variant_id,
    id,
    quantity,
  }: {
    variant_id?: string;
    id?: string;
    quantity: number;
  }) => {
    let cartId = localStorage.getItem("cartId") || "";
    try {
      const response = await api.post(`/carts/${cartId}`, {
        variant_id: variant_id,
        id: id,
        quantity: quantity,
      });
      alertSuccess("Məhsul səbətə əlavə olundu!");
      return response.data;
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
      const response = await api.delete(`/carts/${cartId}/items/${id}`);
      alertSuccess("Məhsul silindi!");
      return response.data;
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
      const response = await api.put(`/carts/${cartId}/items/${id}`, {
        quantity: quantity,
      });
      alertSuccess("Məhsul yeniləndi!");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const emptyCard = createAsyncThunk("card/emptyCard", async () => {
  let cartId = localStorage.getItem("cartId") || "";
  try {
    const response = await api.delete(`/carts/${cartId}/items`);
    alertSuccess("Səbət boşaldıldı!");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
