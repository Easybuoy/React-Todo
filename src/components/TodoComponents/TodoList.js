// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default function TodoList() {
  const tasks = [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: false
    }
  ];
  return (
    <div>
      {tasks.map(task => {
        return <Todo key={task.id} task={task} />;
      })}
    </div>
  );
}
