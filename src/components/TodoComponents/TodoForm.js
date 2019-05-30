import React from "react";
import "./Todo.css";

export default function TodoForm({ onChange, addTodo, task, clearCompleted }) {
  return (
    <div className="todoForm">
      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={onChange}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
