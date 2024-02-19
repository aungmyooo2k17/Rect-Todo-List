import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import SortDropDown from "./components/SortDropDown";
import TaskInput from "./components/TaskInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Todo list</h1>
        <div className="row justify-content-between">
          <TaskInput />
          <SortDropDown />
        </div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
