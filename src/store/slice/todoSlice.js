import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    changeTodo: (state, action) => {
      state = action.payload;
    },
    addTodo: (state, action) => {
      action.payload != "" &&
        state.push({
          id: nanoid(),
          name: action.payload,
          datetime: Date.now(),
          completed: false,
        });
    },
    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.name = action.payload.name;
        todo.datetime = Date.now();
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, changeTodo, editTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
