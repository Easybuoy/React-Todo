import React from "react";

export default function Todo({ task, toggleCompleted }) {
  const todoStyle = {
    cursor: "pointer",
    textDecoration: task.completed ? "line-through" : "none"
  };
  return (
    <div>
      <p
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
