import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/NoteSlice";
export const Store = configureStore({
  reducer: {
    notes: counterReducer,
  },
});
