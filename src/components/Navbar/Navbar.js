import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const handleClear = () => {
    localStorage.clear();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 m-2 card">
      <Link className="navbar-brand " to="/">
        Home
      </Link>
      <Link className="navbar-brand " to="/favourite">
        Favourite
      </Link>
      <a href="/" className="navbar-brand " onClick={handleClear}>
        Clear localStorage
      </a>
    </nav>
  );
}

export default Navbar;
