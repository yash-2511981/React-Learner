import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "Title",
  mode,
  setMode,
}) {
  //we are providing default values to props using object destructuring instead of passing props object and then setting default value
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div class="form-floating">
              <select
                class={`form-select bg-${mode} text-${
                  mode === "dark" ? "light" : "dark"
                } border border-none`}
                id="theme"
                aria-label="Floating label select example"
                onChange={setMode}
              >
                <option value="light">White</option>
                <option value="success">Green</option>
                <option value="danger">Red</option>
                <option value="dark">Dark</option>
                <option value="primary">Blue</option>
              </select>
              <label htmlFor="">Thems</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
