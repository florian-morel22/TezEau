import React from "react";
import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <a
        href="#"
        className="nav-logo"
        aria-label="Visiter la page d'accueil de TezEau"
        aria-current="page"
      >
        <span>TezEau</span>
      </a>

      <div className="nav-links">
        <a href="#">Je vote</a>
      </div>

      <button className="nav-signup">Sign up</button>
      <button className="nav-signin">Sign in</button>
    </nav>
  );
};

export default NavBar;
