import React from 'react'
import './Navbar.css';


function Navbar() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
 
      <a className="navbar-brand" href="https://www.google.com/">YAYA accesorios</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
             <a className="nav-link" href="https://www.netflix.com/browse">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="https://www.facebook.com/">Nosotros</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="https://twitter.com/">Servicios</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="https://www.youtube.com/">Contacto</a>
          </li>
      </ul>
      <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
      </div>
  
  </nav>
  
    )
     
   }
  
export default Navbar
