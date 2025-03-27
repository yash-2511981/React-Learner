import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Slider from "./components/Slider";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bg: "light",
      btn: "primary",
      color: "dark",
      loading: false,
      progress: 0,
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

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar title="Abhitak" togglemode={this.togglemode} state={this.state} />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <div className="container">
            <Slider first="Taza Khabar Har Pal" second="Grab a latest news here" state={this.state} />
            <Routes>
              <Route path="/" element={<News setProgress={this.setProgress}  key="general" state={this.state} category="general" country="us" />} />
              <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" state={this.state} category="entertainment" country="us" />} />
              <Route path="/business" element={<News setProgress={this.setProgress}  key="business" state={this.state} category="business" country="us" />} />
              <Route path="/health" element={<News setProgress={this.setProgress}  key="health" state={this.state} category="health" country="us" />} />
              <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" state={this.state} category="sports" country="us" />} />
              <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" state={this.state} category="technology" country="us" />} />
              <Route path="/science" element={<News setProgress={this.setProgress}  key="science" state={this.state} category="science" country="us" />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
