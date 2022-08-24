import React from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import { useDispatch } from "react-redux";
import { signOut } from "./redux/account/authActions";

function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/login");
  };

  return (
    <nav className="nav-container text-center">
      <ul className="nav-links font-weight-bold">
        <Link to="/list">
          <li className="li-nav">Shopify Product Sync</li>
        </Link>
        {/*<Link to="/">
          <li className="li-nav">Preorder Config</li>
        </Link>*/}
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
        <Link to="/spin-wheel">
          <li className="li-nav">Spin Wheel</li>
        </Link>
        <Link to="/couponIIT">
          <li className="li-nav">Student IIT</li>
        </Link>
      </ul>
      <Button className="w-40" onClick={() => handleSignOut()}>
        Sign Out
      </Button>
    </nav>
  );
}

export default Nav;
