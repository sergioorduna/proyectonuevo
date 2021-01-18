import React from "react";
import { Button } from "react-bootstrap";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="banner_info">
        <h1>Bienvenido</h1>
        <h5>Aqui encontraras todo lo que necesitas.</h5>
        <Button>Hello</Button>
      </div>
    </div>
  );
}

export default Header;
