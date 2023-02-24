import React from "react";
// import TaskList from "./TaskList";

function Task({text, category, onDeleteButton}) {

  function handleClick(){
    onDeleteButton(text)
  }

  return (
    <div 
    className="task">

      <div 
      className="label">
        {category}
        </div>

      <div 
      className="text">
        {text}
        </div>

      <button 
      onClick={handleClick} 
      className="delete">
        X
      </button>

    </div>
  );
}

export default Task;
