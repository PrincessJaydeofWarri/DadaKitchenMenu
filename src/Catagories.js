import React from "react";

const Catagories = ({ types, filterItems }) => {
  return (
    <div className="btn-container">
      {types.map((types, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(types)}
          >
            {types}
          </button>
        );
      })}
    </div>
  );
};

export default Catagories;
