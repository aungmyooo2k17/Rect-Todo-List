import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/slice/formSlice";
import { addTodo } from "../store/slice/todoSlice";

const TaskInput = () => {
  const dispatcher = useDispatch();
  const name  = useSelector((state) => state.form.name);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatcher(addTodo(name));
  };

  const handleChange = (event) => {
    dispatcher(changeName(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className="col-4">
      <input type="text" value={name} onChange={handleChange} />
    </form>
  );
};

export default TaskInput;
