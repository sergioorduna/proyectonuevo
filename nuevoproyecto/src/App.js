import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import DropdownButton from 'react-bootstrap/DropdownButton';        
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from './Components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <DropdownButton />
      <Dropdown />
      <Navbar />
      
      

    </div>
  )
}

export default App;
