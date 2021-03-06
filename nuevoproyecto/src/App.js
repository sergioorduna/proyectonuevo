import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nosotros from "./Components/Nosotros";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import imagenes from "./assets/imagenes";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/nosotros" exact>
            <Nosotros />
          </Route>
          <Route path="/" exact>
            <Home />
            <imagenes />
          </Route>
        </Switch>
        <Navbar />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
