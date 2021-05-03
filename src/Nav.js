import React from "react";
import {Link} from "react-router-dom";


function Nav(){
  return(
    <nav>

      <ul className="nav-links">
      <Link to="/">
        <li>Config</li>
      </Link>
        <Link to="/order">
          <li>Orders</li>
        </Link>
        <Link to="/list">
          <li>Product List</li>
        </Link>
        <Link to="/pincode">
          <li>Pincode</li>
        </Link>
      </ul>
    </nav>

  )
}




export default Nav;
