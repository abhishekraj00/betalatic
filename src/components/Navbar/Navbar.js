import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-2 m-2 card">
      <Link className="navbar-brand " to="/">
        Home
      </Link>
      <Link className="navbar-brand " to="/favourite">
        Favourite
      </Link>
    </nav>
  );
}

export default Navbar;
