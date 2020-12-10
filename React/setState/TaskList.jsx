import React from "react";

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

export default TaskList;
