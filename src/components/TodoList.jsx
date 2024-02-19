import React from "react";

import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const sortBy = useSelector((state) => state.form.sortBy);
  console.log(todos);
  console.log(sortBy);

  const handleSort = (sortBy, data) => {
    switch (sortBy) {
      case "asc":
        return data.sort((a, b) => a.datetime - b.datetime);
      case "desc":
        return data.sort((a, b) => b.datetime - a.datetime);
      default:
        return data;
    }
  };

  const sortedTodoList = handleSort(sortBy, todos);
  const renderedTodoList = sortedTodoList.map((element) => {
    return <TodoItem key={element.id} todo={element} />;
  });

  return <div className="row">{renderedTodoList}</div>;
};

export default TodoList;
