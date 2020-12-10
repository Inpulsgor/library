## App.js

```js
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
```

## TaskEditor.jsx

```js
const TaskEditor = ({ onAddTask }) => {
  return (
    <div>
      <button type="button" onClick={onAddTask}>
        Add Task
      </button>
    </div>
  );
};
```

## TaskList.jsx

```js
const TaskList = ({ tasks, onRemoveTask }) => {
  return (
    <ul>
      {tasks.map(({ text, id }) => (
        <li key={id}>
          <p>{text}</p>
          <button type="button" onClick={() => onRemoveTask(id)}></button>
        </li>
      ))}
    </ul>
  );
};
```
