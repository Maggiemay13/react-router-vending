import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">Vanding Machine</Link>
      <Link to="/water">Water</Link>
      <Link to="/chips">Chips</Link>
      <Link to="/candy">Candy</Link>
    </nav>
  );
}

export default NavBar;
