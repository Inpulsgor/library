```js

import React, { Component } from "react";

class Test extends Component {
  state = {
    tasks: [],
  };

  addTask = (task) => {
    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <button onClick={this.addTask}>Add</button>
        {tasks.length > 0 && <TaskList tasks={tasks} />}
      </>
    );
  }
}

export default Test;

```
