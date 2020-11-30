import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="jumbotron">
        <h1 className="display-4">Gracias por tu visita!</h1>
        <p className="lead">
          Puedes encontrarnos en Facebook <FacebookIcon /> e Instagram{" "}
          <InstagramIcon /> como: YAYA accesorios.
        </p>
        <hr className="my-4"></hr>
        <p>
          YAYA accesorios es una marca mexicana. Gracias por apoyar el consumo
          local.
        </p>

        <a className="btn btn-primary btn-lg" href="/" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Footer;
