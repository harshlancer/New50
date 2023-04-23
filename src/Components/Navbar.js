import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>Logo</li>
        <li>Trending</li>
        <li>For You</li>
        <li>Explore</li>
      </ul>
    </nav>
  );
}

export default Navbar;
