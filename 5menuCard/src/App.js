import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  let result = menuItems.map((ele) => ele.category);
  let newItems = result.filter(
    (element, index) => result.indexOf(element) === index
  );

  function filterItems(category) {
    const setNewItems = items.filter((item) => item.category === category);
    setMenuItems(setNewItems);
    console.log("I'm Clicked!");
  }

  function allItems() {
    setMenuItems(items);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          elements={newItems}
          filteredItems={filterItems}
          allElements={allItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
