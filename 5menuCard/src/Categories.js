import React from "react";

const Categories = ({ elements, filteredItems, allElements }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => allElements()}>
        All
      </button>
      {elements.map((ele) => {
        return (
          <button className="filter-btn" onClick={() => filteredItems(ele)}>
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
