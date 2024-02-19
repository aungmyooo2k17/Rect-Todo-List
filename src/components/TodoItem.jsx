import moment from "moment";
import React, { useState } from "react";
import { removeTodo } from "../store";
import { useDispatch } from "react-redux";
import { editTodo } from "../store";

const TodoItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const dispatcher = useDispatch();
  const handleDelete = (todo) => {
    dispatcher(removeTodo(todo.id));
  };

  const handleEdit = (todo) => {
    setIsEdit(true);
    setName(todo.name);
  };

  const handlEdit = (e, todo) => {
    if (e.key === "Enter") {
      setIsEdit(false);
      dispatcher(
        editTodo({
          id: todo.id,
          name: name,
        })
      );
    }
  };

  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />{" "}
            &nbsp;
            <label className="form-check-label" html="flexCheckDefault">
              {isEdit ? (
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => handlEdit(e, todo)}
                />
              ) : (
                <h5 className="mb-1">{todo.name}</h5>
              )}

              <span>{moment(todo.datetime).format("llll")}</span>
            </label>
          </div>
          <div>
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => handleEdit(todo)}
            >
              Edit
            </button>{" "}
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
