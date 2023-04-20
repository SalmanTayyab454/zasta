import React from 'react';
import logo from '../../assets/logo.png';


function Navbar() {

  return (
      <nav className="navbar" style={{backgroundColor: '#e3f2fd'}}>
    <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="..." height=""/>
          </a>
         </div>
      </nav>
      
  );
}

export default Navbar;
