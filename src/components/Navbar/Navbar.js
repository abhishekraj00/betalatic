import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 m-2 card">
      <Link className="navbar-brand s-16px" to="/">
        Home
      </Link>
      <Link className="navbar-brand s-16px" to="/favourite">
        Favourite
      </Link>
    </nav>
  );
}

export default Navbar;
