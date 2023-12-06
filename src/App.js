import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Water from "./Water";
import Candy from "./Candy";
import Chips from "./Chips";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<Water />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/chips" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
