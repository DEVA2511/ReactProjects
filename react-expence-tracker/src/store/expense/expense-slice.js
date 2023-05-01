import { createSlice } from "@reduxjs/toolkit";

export const exponseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Apple", Price: 100.0 },
      { name: "laptop", Price: 1000.0 },
    ],
  },
  reducers: {
    addExpenseAction: () => {
      console.log("addExpenseAction");
    },
  },
});
