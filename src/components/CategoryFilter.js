import React, { useState } from "react";

function CategoryFilter({categories,onSelectCategory}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        key="All"
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
