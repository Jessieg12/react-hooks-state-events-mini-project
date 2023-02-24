import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text,setInput] = useState("")
  const [category, setCategory] = useState('Code')

  let filtered = categories.filter((category) => category !== "All")
  
 let filteredCategories= filtered.map((category) =>  (
    <option key={category}>{category}</option>
  ))

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({text, category})
    setInput('')
    setCategory("Code")
  }

  
  return (
    <form 
    onSubmit={handleSubmit}
    className="new-task-form">

      <label>

        Details

        <input 
        type="text" 
        value={text} 
        onChange={(event) => setInput(event.target.value)} 
        name="text" />

      </label>
      <label>
        Category
        <select value={category} onChange={(event) => setCategory(event.target.value)} name="category">
          {filteredCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
