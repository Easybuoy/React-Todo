import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [],
      task: ""
    };
  }

  onChange = e => {
    this.setState({ task: e.target.value });
  };

  addTodo = () => {
    const newTask = {
      id: Date.now(),
      task: this.state.task,
      completed: false
    };
    const newStateTasks = this.state.tasks.concat(newTask);
    this.setState({ tasks: newStateTasks, task: "" });
  };

  toggleCompleted = id => {
    const { tasks } = this.state;
    tasks.find(task => {
      if (task.id === id) {
        task.completed = !task.completed ? true : false;
      }
    });
    console.log(tasks);

    this.setState({ tasks: tasks });
    // this.state.tasks.filter(id => )
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          onChange={this.onChange}
          addTodo={this.addTodo}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
