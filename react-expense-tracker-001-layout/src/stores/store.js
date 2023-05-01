import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expenses/expense-slice";

const store = configureStore({
  reducer: {
    Expense: expenseSlice.reducer,
  },
});

export { store };
