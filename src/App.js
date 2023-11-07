import React from "react";
import Category from "./Category";
import Menu from "./Menu";
import data from './data'

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center my-24">
      <h1 className="text-5xl font-bold text-slate-900">Our Menu</h1>
      <div className="w-24 h-1 bg-yellow-600 my-4"></div>
      <Category />
      <Menu />
    </div>
  );
}

export default App;
