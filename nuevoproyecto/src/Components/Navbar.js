import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/">
        YAYA accesorios
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nosotros" className="nav-link">
              Nosotros
            </Link>
          </li>
        </ul>
        <div className="navbar_option">
          <span className="navbar_option1"> Inicia Sesión</span>
        </div>
        <form className="form-inline mt-2 mt-md-0">
          <AccessibilityIcon />
          <ShoppingCartIcon />
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
