
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";

const App = () => {
  return (
    <BrowserRouter>
    <h1>Item List</h1>
    <ul>
      <li>
        <link to="/items/1">Item 1</link>
      </li>
      <li>
        <link to="/items/2">Item 2</link>
      </li>
      <li>
        <link to="/items/3">Item 3</link>
      </li>
    </ul>

    <Routes>
      <Route path="/items/:id" element={<Item1 />} />
      <Route path="/items/:id" element={<Item2 />} />
      <Route path="/items/:id" element={<Item3 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
