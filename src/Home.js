import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1> WHAT WOULD YOU LIKE FROM THE VENDING MACHINE </h1>
      <p>
        <li>
          <Link to="/water">WATER</Link>
        </li>
        <li>
          <Link to="/chips">CHIPS</Link>
        </li>
        <li>
          <Link to="/candy">Candy</Link>
        </li>
      </p>
      <img
        height="500px"
        src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?q=80&w=3033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}

export default Chips;
