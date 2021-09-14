import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
  const[active,setActive] = useState("")
  return (
    <nav className="nav-container text-center">

      <ul className="nav-links font-weight-bold">
        <Link to="/list">
          <li className="li-nav">Product List</li>
        </Link>
        <Link to="/">
          <li className="li-nav">Preorder Config</li>
        </Link>
        {/* <Link to="/order">
          <li className = "li-nav">Orders</li>
        </Link> */}

        {/* <Link to="/pincode">
          <li className = "li-nav">Pincode</li>
        </Link> */}
        <Link to="/coupon">
          <li className="li-nav">Student</li>
        </Link>
        <Link to="/app-section">
          <li className="li-nav">App-Home</li>
        </Link>
      </ul>
    </nav>

  )
}




export default Nav;
