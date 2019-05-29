import React from "react";

export default function TodoForm({ onChange, addTodo, task }) {
  return (
    <div>
      <input type="text" value={task} placeholder="Enter Task" onChange={onChange} />
      <button onClick={addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </div>
  );
}
