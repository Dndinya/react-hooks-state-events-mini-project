import React from "react";
import {CATEGORIES, TASKS} from"../data"

function Task({CATEGORIES, TASKS}) {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE{CATEGORIES}</div>
      <div className="text">TEXT HERE{TASKS.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
