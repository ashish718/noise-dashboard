import React from "react";
import {Link} from "react-router-dom";
import './Nav.css';

function Nav(){
  return(
    <nav className="nav-container">

      <ul className="nav-links">
      <Link to="/">
        <li className = "li-nav">Config</li>
      </Link>
        <Link to="/order">
          <li className = "li-nav">Orders</li>
        </Link>
        <Link to="/list">
          <li className = "li-nav">Product List</li>
        </Link>
        <Link to="/pincode">
          <li className = "li-nav">Pincode</li>
        </Link>
        <Link to="/coupon">
          <li className = "li-nav">Coupon</li>
        </Link>
        <Link to="/app-section">
          <li className = "li-nav">App-Home</li>
        </Link>
      </ul>
    </nav>

  )
}




export default Nav;
