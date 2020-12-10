import React from "react";

const TaskEditor = ({ onAddTask }) => {
  return (
    <div>
      <button type="button" onClick={onAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskEditor;
