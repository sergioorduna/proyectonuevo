import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';





function Header() {
    return (
        
        <div className='header'>
            <img
             
                 className="header_icon"
                src="https://i.pinimg.com/564x/25/d9/29/25d9294c5bfcfdeede1eb112d6fc6067.jpg" 
                alt="logo"
            />

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

        <div className="header_right">
            <AccountCircleIcon />

            <p>Iniciar sesión</p>

        </div>

            
        </div>
    );
}

export default Header
