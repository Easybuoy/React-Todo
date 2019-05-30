import React from "react";

export default function Todo({ task, toggleCompleted, keyUp }) {
  const todoStyle = {
    cursor: "pointer",
    textDecoration: task.completed ? "line-through" : "none",
    backgroundColor: task.completed ? "green" : ""
  };
  return (
    <div>
      <p
        className="todo"
        onClick={() => {
          toggleCompleted(task.id);
        }}
        style={todoStyle}
      >
        {task.task}
      </p>
    </div>
  );
}
