import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/account/authActions";
import noise from '../asset/noise.svg'

const Navbar = () => {
  const location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/list">
            <img
              alt=""
              src={noise}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Noise
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/list" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/list"
                >
                  Product List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Preorder Config
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/coupon" ? "active" : ""
                  }`}
                  to="/coupon"
                >
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/app-section" ? "active" : ""
                  }`}
                  to="/app-section"
                >
                  App-Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/spin-wheel" ? "active" : ""
                  }`}
                  to="/spin-wheel"
                >
                  Spin Wheel
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={handleSignOut} className="btn btn-primary" >Sign Out</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
