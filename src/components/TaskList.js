import React from "react";
import Task from "./Task";



function TaskList({tasks, onDeleteButton}) {
  const mappedTasks = tasks.map((task) =>(
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteButton={onDeleteButton}/>
  ))
  return (
    <div className="tasks">
      {mappedTasks}
    </div>
  );
}

export default TaskList;
