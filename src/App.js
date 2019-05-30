import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./App.css";
// Set Task In LocalStorage
if (localStorage.getItem("tasks") === null) {
  localStorage.setItem("tasks", JSON.stringify([]));
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")),
      task: ""
    };
  }

  onChange = e => {
    this.setState({ task: e.target.value });
  };

  addTodo = () => {
    if (this.state.task.length === 0) {
      return;
    }
    const newTask = {
      id: Date.now(),
      task: this.state.task,
      completed: false
    };
    const newStateTasks = this.state.tasks.concat(newTask);
    this.setDataToLocalStorage(newStateTasks);
    this.setState({ tasks: newStateTasks, task: "" });
  };

  setDataToLocalStorage = data => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

  toggleCompleted = id => {
    const { tasks } = this.state;
    tasks.find(task => {
      if (task.id === id) {
        task.completed = !task.completed ? true : false;
      }
    });

    this.setDataToLocalStorage(tasks);
    this.setState({ tasks: tasks });
  };

  clearCompleted = () => {
    const { tasks } = this.state;
    let unCompletedTasks = tasks.filter(task => task.completed !== true);

    this.setDataToLocalStorage(unCompletedTasks);
    this.setState({ tasks: unCompletedTasks });
  };

  keyUp = e => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  };

  render() {
    return (
      <div className="app">
        <div className="info">
          <p
            className="infoBox"
            style={{
              backgroundColor: "green"
            }}
          />
          <p>Completed</p>
        </div>

        <div className="info">
          <p
            className="infoBox"
            style={{
              backgroundColor: "#99621e"
            }}
          />
          <p>UnCompleted</p>
        </div>

        <h2>Welcome to your Todo App!</h2>

        <TodoForm
          onChange={this.onChange}
          addTodo={this.addTodo}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
          keyUp={this.keyUp}
        />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
