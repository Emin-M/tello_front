import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  products: string[];
}

const initialState: CounterState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<string>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { addProduct } = counterSlice.actions;

export default counterSlice.reducer;
