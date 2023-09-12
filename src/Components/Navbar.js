import React, { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import portfolioContext from "../Context/portfolioContext";

const Navbar = () => {
  const { mode, applyMode } = useContext(portfolioContext);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} shadow-sm fixed-top rounded-4 mt-2 mx-3`}
      >
        <div className="container-lg">
          <a className="navbar-brand fw-bold fs-4 text-warning" href="#home">
            {"<SK />"}
          </a>
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
            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 mx-2`}>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#skills">
                  My Skills
                </a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#works">
                  Works
                </a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item d-none d-sm-block">
                <a className="nav-link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
            <div>
              <h3
                className={`text-${
                  mode === "light" ? "dark" : "light"
                } d-none d-sm-block`}
                onClick={applyMode}
              >
                {mode === "light" ? <BsMoon /> : <BsSun />}
              </h3>

              <h3
                className={`text-${
                  mode === "light" ? "dark" : "light"
                } text-center d-block d-sm-none`}
                onClick={applyMode}
              >
                {mode === "light" ? <BsMoon /> : <BsSun />}
              </h3>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
