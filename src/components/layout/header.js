import React from "react";
import { NavLink } from "react-router-dom";
import { AiTwotoneShop } from "react-icons/ai";
import { useAuth } from "../context/auth";

const Header = () => {
  const [User, SetUser] = useAuth();
  const handleLogout = () => {
    SetUser({ ...User, user: null, token: "" });
    localStorage.removeItem("auth");
  };
  // useEffect(()=>{})
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink to="/" className="navbar-brand" href="#">
              <AiTwotoneShop
                className=" me-2"
                style={{
                  fontSize: "50px",
                  fontFamily: '"Poppins", sans-serif',
                }}
              />
              Ecommerce site
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" href="#">
                  About
                </NavLink>
              </li>

              {!localStorage.getItem("auth") ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link "
                      aria-current="page"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link "
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/dashboard" className="dropdown-item">
                          Dashboard
                        </NavLink>
                      </li>
                      <li className=" dropdown-item">
                        <NavLink
                          to="/login"
                          className="dropdown-item "
                          onClick={handleLogout}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" href="#">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/policy" className="nav-link" href="#">
                  Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
