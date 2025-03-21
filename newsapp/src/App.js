import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Slider from "./components/Slider";
import { BrowserRouter as Router, Route, Routes } from "react-router";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bg: "light",
      btn: "primary",
      color: "dark",
      loading: false
    }

  }

  togglemode = () => {
    this.setState({
      bg: this.state.bg === "light" ? "dark" : "light",
      btn: this.state.btn === "primary" ? "success" : "primary",
      color: this.state.color === "dark" ? "light" : "dark",
    })
  }

  componentDidUpdate() {
    console.log(this.state.bg)
    document.body.style.backgroundColor = this.state.bg === "dark" ? "#212529" : "white";
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar title="Abhitak" togglemode={this.togglemode} state={this.state} />
          <div className="container">
            <Slider first="Taza Khabar Har Pal" second="Grab a latest news here" state={this.state} />
            <Routes>
              <Route path="/" element={<News  key="general"state={this.state} category="general" />} />
              <Route path="/entertainment" element={<News key="entertainment" state={this.state} category="entertainment" />} />
              <Route path="/business" element={<News  key="business"state={this.state} category="business" />} />
              <Route path="/health" element={<News key="health" state={this.state} category="health" />} />
              <Route path="/sports" element={<News key="sports" state={this.state} category="sports" />} />
              <Route path="/technology" element={<News  key="technology"state={this.state} category="technology" />} />
              <Route path="/science" element={<News  key="science"state={this.state} category="science" />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
