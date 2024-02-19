import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addTodo } from "./todoSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    sortBy: "asc",
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action) => {
      console.log("clear data");
      state.name = "";
    });
  },
});

export const { changeName, editName, changeSortBy } = formSlice.actions;
export const formReducer = formSlice.reducer;
