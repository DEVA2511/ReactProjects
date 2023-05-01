import { configureStore } from "@reduxjs/toolkit";
import { exponseSlice } from "./expense/expense-slice";

const store = configureStore({
  reducer: {
    Expense: exponseSlice.reducer,
  },
});

export { store };
