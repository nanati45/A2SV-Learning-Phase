import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  span: 1,
};

const counter = createSlice({
  name: "conter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += state.span;
    },
    decreament: (state) => {
      state.value -= state.span;
    },
    setSpan: (state, action: PayloadAction<number>) => {
      state.span = action.payload;
    },
  },
});

// actions creators

export const { increament, decreament, setSpan } = counter.actions;
export default counter.reducer;
