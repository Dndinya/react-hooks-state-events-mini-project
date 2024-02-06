import React from "react";
import { Task } from "./Task";
import { TASKS } from "../data";
function TaskList({Task}) {
  return (
    <div className="tasks">
      {Task.map((task, index) => (
        <TASKS key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
