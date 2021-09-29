import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    AddNotes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { AddNotes } = counterSlice.actions;

export default counterSlice.reducer;
