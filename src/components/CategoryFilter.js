import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, setCategory}) {
  
 let buttons = categories.map((category) => {
  let categoryName = (category === selectedCategory ? "selected": "")
  
  return (
  <button 
  className={categoryName}
  key={category}
  onClick={()=>setCategory(category)}
  >
    {category}
  </button>
 )}
 )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
