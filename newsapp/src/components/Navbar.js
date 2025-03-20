import React, { Component } from "react";
import logo from "../logo.png";

export default class Navbar extends Component {
  render() {
    let { state } = this.props;
    console.log(state)
    return (
      <div>
        <nav className={`navbar navbar-expand-sm navbar-${state.bg} bg-${state.bg}`}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" height={"40px"} />
            </a>
            <buttonc className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </buttonc>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/" aria-current="page">
                    Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                  <li className="nav-item"><a className="nav-link" href="/">business</a></li>
                  <li className="nav-item"><a className="nav-link" href="/">entertainment</a></li>
                  <li className="nav-item"><a className="nav-link" href="/">general</a></li>
                  <li className="nav-item"><a className="nav-link" href="/">health</a></li>
                  <li className="nav-item"><a className="nav-link" href="/">science</a></li>
                  <li className="nav-item"><a className="nav-link" href="/">sports</a></li>
                  <li className="nav-item"><a className="nav-link" href="/">technology</a></li>
                
              </ul>
            </div>
          </div>
          <div className="container d-flex justify-content-end">
            <div className="form-check form-switch text-end">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={this.props.togglemode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode</label>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
