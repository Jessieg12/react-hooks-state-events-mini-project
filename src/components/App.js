import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [myTasks, setTasks] = useState(TASKS)
  const [selectedCategory, setCategory] = useState('All')

  function onTaskFormSubmit(taskForm){
    setTasks([...myTasks, taskForm])
  }

  function handleDelete(deletedTask){
    setTasks(myTasks.filter((task) => task.text !== deletedTask))
    console.log(myTasks)
  }

  let categoryTasks= myTasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory)
  
  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      setCategory={setCategory}
      />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />

      <TaskList 
      tasks={categoryTasks} 
      onDeleteButton={handleDelete}
      />
    </div>
  );
}

export default App;
