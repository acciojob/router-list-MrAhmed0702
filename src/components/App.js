import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './../styles/App.css';
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";

const App = () => {
  return (
    <BrowserRouter>
    <h1>Item List</h1>
    <ul>
      <li>
        <Link to="/items/1">Item 1</Link>
      </li>
      <li>
        <Link to="/items/2">Item 2</Link>
      </li>
      <li>
        <Link to="/items/3">Item 3</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/items/1" element={<Item1 />} />
      <Route path="/items/2" element={<Item2 />} />
      <Route path="/items/3" element={<Item3 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
