import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 m-2 card">
      <a className="navbar-brand s-16px " href="/">
        Home
      </a>
      <a className="navbar-brand s-16px" href="/favourite">
        Favourite
      </a>
    </nav>
  );
}

export default Navbar;
