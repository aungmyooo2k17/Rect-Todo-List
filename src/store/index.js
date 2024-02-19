import { configureStore } from "@reduxjs/toolkit";
import { todosReducer, addTodo, removeTodo, editTodo } from "./slice/todoSlice";
import { formReducer } from "./slice/formSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    form: formReducer,
  },
});

export { store, addTodo, removeTodo, editTodo };
