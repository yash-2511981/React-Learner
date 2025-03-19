import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Slider from "./components/Slider";


export default class App extends Component {
  constructor(){
    super();
    this.state={
      bg:"light",
      btn:"primary",
      color:"dark",
      loading:false
    }

  }

  togglemode =()=>{
    this.setState({
      bg:this.state.bg === "light" ? "dark":"light",
      btn:this.state.btn === "primary" ? "success":"primary",
      color:this.state.color === "dark" ? "light":"dark",
    })
  }

  componentDidUpdate(){
      console.log(this.state.bg)
      document.body.style.backgroundColor = this.state.bg === "dark" ? "#212529":"white"; 
  }

  render() {
    return (
      <div>
        <Navbar title="Abhitak" togglemode={this.togglemode} state={this.state}/>
        <div className="container">
          <Slider first="Taza Khabar Har Pal" second="Grab a latest news here" state={this.state}/>
          <News state={this.state}/>
        </div>
      </div>
    );
  }
}
