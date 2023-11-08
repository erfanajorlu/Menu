import React, { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";
import data from "./data";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [items, setItems] = useState(data);
  const [category, setcategory] = useState(allCategories);
  function filterItems(category) {
    if (category === "all") {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  }
  console.log(items);
  return (
    <div className="w-full min-h-screen flex flex-col items-center my-24">
      <h1 className="text-5xl font-bold text-slate-900">Our Menu</h1>
      <div className="w-24 h-1 bg-yellow-600 my-4"></div>
      <Category categories={category} filterItems={filterItems} />
      <Menu items={items} />
    </div>
  );
}

export default App;
