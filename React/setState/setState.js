import React, { Component } from "react";

import TaskEditor from "./TaskEditor";
import TaskList from "./TaskList";

import createTask from "./services/createTask";


class App extends Component {
  state = {
    tasks: [],
  };

  // add task to array, using setState
  addTask = () => {
    const task = createTask();

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  // remove task from task list by ID
  removeTask = (id) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 0 && (
          <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
        )}
      </>
    );
  }
}

export default App;
