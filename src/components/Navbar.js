import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn }) {
  let navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    alert("log out successfull");
    navigate("/logIn");
  };
  return (
    <div>
      {isLoggedIn ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Tution.com
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AboutUs">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
              <Link
                className="btn btn-outline-success mx-1 my-1"
                role="button"
                to="/LogIn"
              >
                Log In
              </Link>
              <Link
                className="btn btn-outline-success mx-1 my-1"
                role="button"
                to="/SignUp"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="MyProfile">
              Tution.com
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/MyProfile"
                  >
                    My Profile
                  </Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">
                  Contact Us
                </Link>
              </li> */}
              </ul>
              {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
              <Link
                className="btn btn-outline-success mx-1 my-1"
                role="button"
                to="/"
                onClick={logOutHandler}
              >
                Log Out
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
